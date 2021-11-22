import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {StatObject} from "../../../shared/interfaces/stats";

@Component({
  selector: 'app-session-stats',
  templateUrl: './session-stats.component.html',
  styleUrls: ['./session-stats.component.scss']
})
export class SessionStatsComponent implements OnInit {
  sessionId = 0;
  stats: StatObject;
  constructor(
    private api: ApiService,
    private router: Router,
    private arouter: ActivatedRoute
  ) { }
  get timesession(): any {
    let date = new Date(null);
    date.setSeconds(this.stats.timesession);
    let result = date.toISOString().substr(11, 8);
    return result;
  }
  get timewait(): any {
    let date = new Date(null);
    date.setSeconds(this.stats.timewait);
    let result = date.toISOString().substr(11, 8);
    return result;
  }
  get timelastticket(): any {
    let date = new Date(null);
    date.setSeconds(this.stats.timelastticket);
    let result = date.toISOString().substr(11, 8);
    return result;
  }
  get timeavgticket(): any {
    let date = new Date(null);
    date.setSeconds(this.stats.timeavgticket);
    let result = date.toISOString().substr(11, 8);
    return result;
  }
  async ngOnInit(): Promise<void> {
    this.stats = await this.api.getStats().toPromise();
    this.arouter.paramMap.subscribe((e) => {
      this.sessionId = parseInt(e.get('id'), 10);
    })
  }

}
