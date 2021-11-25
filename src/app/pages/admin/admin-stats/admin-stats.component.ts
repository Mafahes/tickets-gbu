import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import {Router} from "@angular/router";
import {forkJoin} from "rxjs";
import {Category, RoomData, RoomObject, Service} from "../../../shared/interfaces/room";

@Component({
  selector: 'app-admin-stats',
  templateUrl: './admin-stats.component.html',
  styleUrls: ['./admin-stats.component.scss']
})
export class AdminStatsComponent implements OnInit {
  room: RoomObject;
  selectedCategory: Category[] = [];
  selectedService: Service[] = [];
  selectedData;
  a1;
  a2;
  a3;
  constructor(
    private api: ApiService,
    private router: Router
  ) { }
  filterArr(a, type) {
    if(a === null) return;
    console.log(a);
    console.log(typeof a);
    switch (type) {
      case 1: {
        this.selectedCategory = this.room.data.find((e) => e.id === parseInt(a)).category;
        break;
      }
      case 2: {
        this.selectedService = this.selectedCategory.find((e) => e.id === parseInt(a)).services;
        break;
      }
      case 3: {
        this.selectedData = this.selectedService.find((e) => e.id === parseInt(a)).id;
        break;
      }
    }
  }
  ngOnInit(): void {
    forkJoin([
      this.api.getRooms()
    ]).subscribe((e) => {
      this.room = e[0];
    })
  }

}
