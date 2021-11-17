import { Component, OnInit } from '@angular/core';
import {Reason} from "../../../shared/interfaces/reason";
import {ApiService} from "../../../shared/services/api.service";

@Component({
  selector: 'app-reason-postpone',
  templateUrl: './reason-postpone.component.html',
  styleUrls: ['./reason-postpone.component.scss']
})
export class ReasonPostponeComponent implements OnInit {

  reasons: Reason[] = [];
  constructor(
    private api: ApiService
  ) { }

  async ngOnInit(): Promise<void> {
    this.reasons = await this.api.getPostpones().toPromise();
  }

}
