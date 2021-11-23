import { Component, OnInit } from '@angular/core';
import {RoomObject} from "../../../shared/interfaces/room";
import {ApiService} from "../../../shared/services/api.service";
import {Reason} from "../../../shared/interfaces/reason";

@Component({
  selector: 'app-reason-over',
  templateUrl: './reason-over.component.html',
  styleUrls: ['./reason-over.component.scss']
})
export class ReasonOverComponent implements OnInit {

  reasons: Reason[] = [];
  constructor(
    private api: ApiService
  ) { }

  async ngOnInit(): Promise<void> {
    this.reasons = await this.api.getReasons().toPromise();
  }
  async delete(id): Promise<void> {
    await this.api.delReason(id).toPromise();
    this.reasons = await this.api.getReasons().toPromise();
  }

}
