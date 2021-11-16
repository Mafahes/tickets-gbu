import { Component, OnInit } from '@angular/core';
import {RoomObject} from "../../../shared/interfaces/room";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ApiService} from "../../../shared/services/api.service";
import {Window} from "../../../shared/interfaces/window";

@Component({
  selector: 'app-room-windows',
  templateUrl: './room-windows.component.html',
  styleUrls: ['./room-windows.component.scss']
})
export class RoomWindowsComponent implements OnInit {
  windows: Window[] = [];
  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private api: ApiService,
    private arouter: ActivatedRoute
  ) { }
  selected: number;
  roomId;
  get isChecked(): boolean {
    return !!this.windows.find((e) => e.checked)
  }
  ngOnInit(): void {
    this.arouter.paramMap.subscribe((e) => {
      this.roomId = e.get('id');
      this.api.getWindows(e.get('id')).subscribe((e) => this.windows = e);
    })
  }
  submit(): void {
    if (!!this.selected) {
      this.router.navigate([`/room/list/${this.roomId}/windows/${true ? this.selected : this.windows.filter(e => e.checked).map((e) => e.id)}/cats`]);
    }
  }

}
