import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from "../../shared/services/api.service";
import {Queue} from "../../shared/services/queue";
import * as _ from 'lodash';
@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private api: ApiService,
    private arouter: ActivatedRoute
  ) { }
  interval: any;
  arr: any[] = [
    { name: 'Б12', window: '1' },
    { name: 'Б13', window: '1' },
    { name: 'А4', window: '1' },
    { name: 'С15', window: '1' },
    { name: 'B10', window: null },
    { name: 'A5', window: null }
  ];
  queue: Queue[][] = [];
  selectedItem: any;
  selectedPage = 0;
  async getQueue(): Promise<void> {
    this.arouter.paramMap.subscribe(async (e) => {
      this.queue = _.chunk((await this.api.getMonitorTickets(parseInt(e.get('id'))).toPromise()), 5);
    })
    console.log(this.queue);
  }
  ngOnInit(): void {
    this.getQueue();
    // setTimeout(() => this.router.navigate(['/safety']), 14000);
    this.interval = setInterval(() => {
      if((this.selectedItem + 1) === this.queue[this.selectedPage].length) {
        this.selectedPage = this.queue.length === (this.selectedPage + 1) ? 0 : this.selectedPage + 1;
        this.selectedItem = 0;
        return;
      }
      this.selectedItem = this.selectedItem === undefined ? 0 : this.selectedItem + 1 === this.queue[this.selectedPage].length ? 0 : this.selectedItem + 1;
    }, 2000);
  }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  select(i: any): void {
    this.selectedItem = i;
  }

}
