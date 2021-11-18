import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Category, RoomData} from "../../../shared/interfaces/room";

@Component({
  selector: 'app-terminal-cat-list',
  templateUrl: './terminal-cat-list.component.html',
  styleUrls: ['./terminal-cat-list.component.scss']
})
export class TerminalCatListComponent implements OnInit, OnDestroy {
  roomCats: RoomData;
  roomId = 0;
  type = 1;
  interval;
  selectedCat: Category;
  currentDate = new Date();
  constructor(
    private api: ApiService,
    private router: Router,
    private arouter: ActivatedRoute
  ) { }
  async ngOnInit(): Promise<void> {
    this.interval = setInterval(() => this.currentDate = new Date(), 1000);
    this.arouter.paramMap.subscribe(async (i) => {
      this.roomId = i.get('id') === null ? null : parseInt(i.get('id'));
      this.roomCats = (await this.api.getRooms().toPromise()).data.find((e) => e.id === this.roomId)
    })
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }

  switchType(cat: Category): void {
    this.selectedCat = cat;
    this.type = 2;
  }
  async registerTicket(id): Promise<void> {
    await this.api.registerTicket(id).toPromise();
    this.type = 1;
    this.selectedCat = null;
  }
}


