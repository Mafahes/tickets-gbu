import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import {RoomData, RoomObject} from "../../../shared/interfaces/room";
import {SignalRService} from "../../../shared/services/signal-r.service";


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
  async deleteRoom(i): Promise<void> {
    await this.api.deleteRoom(i).toPromise()
    this.rooms = await this.api.getRooms().toPromise();
  }

}
