import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import {RoomData, RoomObject} from "../../../shared/interfaces/room";


@Component({
  selector: 'app-admin-rooms',
  templateUrl: './admin-rooms.component.html',
  styleUrls: ['./admin-rooms.component.scss']
})
export class AdminRoomsComponent implements OnInit {
  rooms: RoomObject;
  constructor(
    private api: ApiService
  ) { }

  async ngOnInit(): Promise<void> {
    this.rooms = await this.api.getRooms().toPromise();
  }

}
