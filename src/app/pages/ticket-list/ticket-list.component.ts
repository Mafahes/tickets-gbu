import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from "../../shared/services/api.service";
import {Queue} from "../../shared/services/queue";
import * as _ from 'lodash';
import {SignalRService} from "../../shared/services/signal-r.service";
import {forkJoin} from "rxjs";
import {map} from "rxjs/operators";
@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private api: ApiService,
    private arouter: ActivatedRoute,
    private socket: SignalRService
  ) { }
  interval: any;
  queue: Queue[][] = [];
  selectedItem: any;
  selectedPage = 0;
  async getQueue(): Promise<void> {
    this.arouter.paramMap.subscribe(async (e) => {
      this.queue = _.chunk((
        await this.api.getQueue().pipe(
          map(i => i.filter(e2 => e2.roomId === parseInt(e.get('id'))))
        ).toPromise()), 5);
      if(this.queue.length === 0) {
        this.selectedItem = null;
        this.selectedPage = 0;
      }
    })
  }
  parseData(): void {
    if(!!this.interval) {
      clearInterval(this.interval);
    }
    this.getQueue();
    // setTimeout(() => this.router.navigate(['/safety']), 14000);
    this.interval = setInterval(() => {
      if(this.queue.length === 0) {
        this.selectedPage = 0;
        this.selectedItem = 0;
        return;
      }
      if((this.selectedItem + 1) === this.queue[this.selectedPage].length) {
        this.selectedPage = this.queue.length === (this.selectedPage + 1) ? 0 : this.selectedPage + 1;
        this.selectedItem = 0;
        return;
      }
      this.selectedItem = this.selectedItem === undefined ? 0 : this.selectedItem + 1 === this.queue[this.selectedPage].length ? 0 : this.selectedItem + 1;
    }, 2000);
  }
  ngOnInit(): void {
    this.parseData();
    this.socket.dataTransferSub('work').subscribe(async (e: any) => {
      var sound = (await this.api.getSounds().toPromise()).filter((e2) => e2.name === e.user.name);
      if(sound.length > 0) {
        let audio = new Audio();
        audio.src = sound[0].file.fullUrl;
        audio.load();
        audio.play();
      }
      this.parseData();
    });
    this.socket.dataTransferSub('register').subscribe((e) => {
      this.parseData();
    });
    this.socket.dataTransferSub('over').subscribe((e) => {
      this.parseData();
    });
  }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  select(i: any): void {
    this.selectedItem = i;
  }

}
