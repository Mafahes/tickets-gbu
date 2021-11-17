import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Cat} from "../../../shared/interfaces/Cat";

@Component({
  selector: 'app-room-cats',
  templateUrl: './room-cats.component.html',
  styleUrls: ['./room-cats.component.scss']
})
export class RoomCatsComponent implements OnInit {
  cats: Cat[] = [];
  constructor(
    private api: ApiService,
    private router: Router,
    private arouter: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }
  mainCat = [];
  secondCat = [];
  roomId;
  wid
  ngOnInit(): void {
    this.arouter.paramMap.subscribe(async (e) => {
      this.wid = e.get('wid');
      this.roomId = e.get('id');
      this.cats = await this.api.getCatByRoom(this.roomId).toPromise();
    });
  }
  switchCat(id, type): void {
    // 1 - mainCat; 2 - secondCat
    if (type === 1) {
      if (this.mainCat.find((e) => e === id)) {
        this.mainCat = this.mainCat.filter((e) => e !== id);
      } else {
        this.mainCat.push(id);
      }
      // if (!!this.secondCat.find((e) => e === id)) {
      //   this.secondCat = this.secondCat.filter((e) => e !== id);
      // }
    } else {
      if (this.secondCat.find((e) => e === id)) {
        this.secondCat = this.secondCat.filter((e) => e !== id);
      } else {
        this.secondCat.push(id);
      }
      // if (!!this.mainCat.find((e) => e === id)) {
      //   this.mainCat = this.mainCat.filter((e) => e !== id);
      // }
    }
  }
  async startSession(): Promise<void> {
    var res = await this.api.startSession({
      roomId: parseInt(this.roomId, 10),
      mainCategory: this.mainCat.map((e) => ({catId: e})),
      secondCategory: this.secondCat.map((e) => ({catId: e})),
      windowsId: parseInt(this.wid)
    }).toPromise();
    this.router.navigate(['/room/session/' + res.id]);
  }

}
