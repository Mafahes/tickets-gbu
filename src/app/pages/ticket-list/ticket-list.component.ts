import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit, OnDestroy {

  constructor(private router: Router) { }
  interval: any;
  arr: any[] = [
    { name: 'Б12', window: '1' },
    { name: 'Б13', window: '1' },
    { name: 'А4', window: '1' },
    { name: 'С15', window: '1' },
    { name: 'B10', window: null },
    { name: 'A5', window: null }
  ];
  selectedItem: any;
  ngOnInit(): void {
    // setTimeout(() => this.router.navigate(['/safety']), 14000);
    this.interval = setInterval(() => {
      this.selectedItem = this.selectedItem === undefined ? 0 : this.selectedItem + 1 === this.arr.length ? 0 : this.selectedItem + 1;
    }, 2000);
  }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  select(i: any): void {
    this.selectedItem = i;
  }

}
