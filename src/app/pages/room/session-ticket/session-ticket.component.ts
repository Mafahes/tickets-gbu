import { Component, OnInit } from '@angular/core';
import {Session} from "../../../shared/interfaces/self";
import {Queue} from "../../../shared/services/queue";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ApiService} from "../../../shared/services/api.service";
import {MatDialog} from "@angular/material/dialog";
import {SessionPageDialogComponent} from "../session-page/session-page.component";
import {Tickets} from "../../../shared/interfaces/myTickets";
import {Reason} from "../../../shared/interfaces/reason";

@Component({
  selector: 'app-session-ticket',
  templateUrl: './session-ticket.component.html',
  styleUrls: ['./session-ticket.component.scss']
})
export class SessionTicketComponent implements OnInit {

  session: Session;
  queue: Queue[] = [];
  myTicket: Tickets;
  timer = 0;
  ticketTimer = 0;
  activeTicket: number = null;
  interval;
  sessionId;
  ticketId;
  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    public api: ApiService,
    private dialog: MatDialog,
    private arouter: ActivatedRoute
  ) { }
  get timeSeconds(): any {
    let date = new Date(null);
    date.setSeconds(this.timer);
    let result = date.toISOString().substr(11, 8);
    return result;
  }
  get ticketSessionTime(): any {
    if(!this.myTicket) {
      return '';
    }
    let date = new Date(null);
    date.setSeconds(this.ticketTimer);
    let result = date.toISOString().substr(11, 8);
    return result;
  }
  async parseData(): Promise<void> {
    let a = await this.api.getSession().toPromise();
    this.session = a[0];
    this.queue = await this.api.getQueue().toPromise();
    let t = await this.api.getMyTickets().toPromise();
    this.myTicket = t.find((e) => e.id === parseInt(this.ticketId));
    if(this.session.id !== parseInt(this.sessionId) || !this.myTicket) {
      this.router.navigate(['/']);
    }
    if(this.queue.length > 0) {
      this.activeTicket = 0;
    }
    this.timer = new Date().getTime() - new Date(a[0].dateStart).getTime();
    this.timer = Math.floor(this.timer/1000);
    this.ticketTimer = new Date().getTime() - new Date(this.myTicket.dateStart).getTime();
    this.ticketTimer = Math.floor(this.ticketTimer/1000);
    try {
      clearInterval(this.interval);
    } catch (e) {

    }
    this.interval = setInterval(() => {
      ++this.timer;
      ++this.ticketTimer;
    }, 1000)
  }
  changeActiveTicket(index): void {
    this.activeTicket = index;
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }

  ngOnInit(): void {
    this.arouter.paramMap.subscribe((e) => {
        this.sessionId = e.get('id');
        this.ticketId = e.get('tId');
      }
    )
    this.parseData();
  }
  async stopSession(): Promise<void> {
    await this.api.stopSession().toPromise();
    this.router.navigate(['/room/list']);
    this.snackBar.open('Сессия завершена!', null, {
      duration: 1000
    })
  }
  async switchPause(): Promise<void> {
    if(this.session.pause === null || this.session.pause.length === 0) {
      await this.api.pauseSession().toPromise();
      this.parseData();
    } else {
      await this.api.unpauseSession().toPromise();
      this.parseData();
    }
  }
  async endTicket(): Promise<void> {
    const dialogRef = this.dialog.open(TicketEndComponent);

    dialogRef.afterClosed().subscribe(async (result) => {
      await this.api.overTicket({...result, ticketId: parseInt(this.ticketId)}).toPromise();
      this.router.navigate(['room/session/' + this.sessionId])
    });
  }
}
@Component({
  selector: 'dialog-end-ticket',
  templateUrl: 'formEndTicketDialog.component.html',
  styleUrls: ['./session-ticket.component.scss']
})
export class TicketEndComponent {
  constructor(
    private api: ApiService
  ) {
    this.api.getReasons().subscribe((e) => {
      this.reasons = e;
    });
  }
  reasons: Reason[] = [];
  selected;
  inits = '';
  comment = '';
}
