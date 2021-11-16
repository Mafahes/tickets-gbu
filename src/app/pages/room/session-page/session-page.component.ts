import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ApiService} from "../../../shared/services/api.service";
import {Session} from "../../../shared/interfaces/self";
import {Queue} from "../../../shared/services/queue";
import {queue} from "rxjs";
import {MatDialog} from "@angular/material/dialog";

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
    private dialog: MatDialog,
    private arouter: ActivatedRoute
  ) { }
  get timeSeconds(): any {
    let date = new Date(null);
    date.setSeconds(this.timer);
    let result = date.toISOString().substr(11, 8);
    return result;
  }
  async parseData(): Promise<void> {
    let a = await this.api.getSession().toPromise();
    this.queue = await this.api.getQueue().toPromise();
    if(this.queue.length > 0) {
      this.activeTicket = 0;
    }
    this.timer = new Date().getTime() - new Date(a[0].dateStart).getTime();
    this.timer = Math.floor(this.timer/1000);
    this.session = a[0];
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

  ngOnInit(): void {
    this.arouter.paramMap.subscribe((e) => this.sessionId = e.get('id'))
    this.parseData();
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
      this.parseData();
    } else {
      await this.api.unpauseSession().toPromise();
      this.parseData();
    }
  }
  async getTicket(): Promise<void> {
    await this.api.getTicket(this.queue[this.activeTicket].id).toPromise();
    this.router.navigate([`/room/session/${this.sessionId}/ticket/${this.queue[this.activeTicket].id}`])
  }
}
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'findNumberDialog.component.html',
  styleUrls: ['./session-page.component.scss']
})
export class SessionPageDialogComponent {
  constructor() {
  }
  text = '';
}
