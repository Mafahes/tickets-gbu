import { Component, OnInit } from '@angular/core';
import {Reason} from "../../../shared/interfaces/reason";
import {ApiService} from "../../../shared/services/api.service";

@Component({
  selector: 'app-reason-redirect',
  templateUrl: './reason-redirect.component.html',
  styleUrls: ['./reason-redirect.component.scss']
})
export class ReasonRedirectComponent implements OnInit {

  reasons: Reason[] = [];
  constructor(
    private api: ApiService
  ) { }

  async ngOnInit(): Promise<void> {
    this.reasons = await this.api.getReasonRedirects().toPromise();
  }
  async delete(id): Promise<void> {
    await this.api.delReasonRedirects(id).toPromise();
    this.reasons = await this.api.getReasonRedirects().toPromise();
  }
}
