import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ApiService} from "../../../shared/services/api.service";
import {RoomData, RoomObject} from "../../../shared/interfaces/room";
import {Window} from "../../../shared/interfaces/window";

@Component({
  selector: 'app-room-subdivisions',
  templateUrl: './room-subdivisions.component.html',
  styleUrls: ['./room-subdivisions.component.scss']
})
export class RoomSubdivisionsComponent implements OnInit {
  rooms: RoomObject;
  wins: Window[] = [];
  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private api: ApiService
  ) { }
  selected: number;
  selectedWin: number;
  ngOnInit(): void {
    this.api.getRooms().subscribe((e) => this.rooms = e);
  }
  async subChange(e) {
    this.wins = await this.api.getWindows(e.value).toPromise();
  }
  submit(): void {
    if(true) {
      this.router.navigate([`/room/list/${this.selected}/windows/${this.selectedWin}/cats`]);
      return;
    }
    if (!!this.selected) {
      this.router.navigate([`/room/list/${this.selected}/windows`]);
    }
  }

}
