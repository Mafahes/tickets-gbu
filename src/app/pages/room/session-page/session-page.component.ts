import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ApiService} from "../../../shared/services/api.service";
import {Session} from "../../../shared/interfaces/self";
import {Queue} from "../../../shared/services/queue";
import {queue} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {AppComponent} from "../../../app.component";
import {SignalRService} from "../../../shared/services/signal-r.service";

@Component({
  selector: 'app-session-page',
  templateUrl: './session-page.component.html',
  styleUrls: ['./session-page.component.scss']
})
export class SessionPageComponent implements OnInit, OnDestroy {
  session: Session;
  queue: Queue[] = [];
  timer = 0;
  activeTicket: number = null;
  interval;
  sessionId;
  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    public api: ApiService,
    private app: AppComponent,
    private dialog: MatDialog,
    private arouter: ActivatedRoute,
    private socket: SignalRService
  ) { }
  get timeSeconds(): any {
    let date = new Date(null);
    date.setSeconds(this.timer);
    let result = date.toISOString().substr(11, 8);
    return result;
  }
  async parseData(): Promise<void> {
    await this.app.getSessions();
    let a = this.app.sessions;
    this.queue = await this.api.getQueue().toPromise();
    if(this.queue.length > 0) {
      this.activeTicket = 0;
    }
    this.timer = new Date().getTime() - new Date(a[0].dateStart).getTime();
    this.timer = Math.floor(this.timer/1000);
    this.session = a[0];
    let tickets = await this.api.getMyTickets().toPromise();
    if(tickets.length > 0) {
      this.router.navigate([`/room/session/${this.sessionId}/ticket/${tickets[0].id}`])
      return;
    }
    try {
      clearInterval(this.interval);
    } catch (e) {

    }
    this.interval = setInterval(() => ++this.timer, 1000)
  }
  changeActiveTicket(index): void {
    this.activeTicket = index;
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }

  async ngOnInit(): Promise<void> {
    this.arouter.paramMap.subscribe((e) => this.sessionId = e.get('id'))
    if(this.app.sessions.length === 0) {
      await this.app.getSessions();
    }
    this.parseData();
    this.socket.dataTransferSub('register').subscribe((e) => {
      this.parseData();
    })
  }
  async stopSession(): Promise<void> {
    await this.api.stopSession().toPromise();
    this.router.navigate(['/room/list']);
    this.snackBar.open('Сессия завершена!', null, {
      duration: 1000
    })
  }
  callByNumber(): void {
    const dialogRef = this.dialog.open(SessionPageDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(!!result) {
        this.api.findTicket(result).toPromise();
      }
    });
  }
  async switchPause(): Promise<void> {
    console.log(!!this.session.pause);
    if(this.session.pause === null || this.session.pause.length === 0) {
      await this.api.pauseSession().toPromise();
      await this.parseData();
      this.session = this.app.sessions[0];
    } else {
      await this.api.unpauseSession().toPromise();
      await this.parseData();
      this.session = this.app.sessions[0];
    }
  }
  async getTicket(): Promise<void> {
    await this.api.getTicket(this.queue[this.activeTicket].id).toPromise();
    this.router.navigate([`/room/session/${this.sessionId}/ticket/${this.queue[this.activeTicket].id}`])
  }
}
@Component({
  selector: 'dialog-find-number',
  templateUrl: 'findNumberDialog.component.html',
  styleUrls: ['./session-page.component.scss']
})
export class SessionPageDialogComponent {
  constructor() {
  }
  text = '';
}
