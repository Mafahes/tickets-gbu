import {Component, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, Routes} from '@angular/router';
import {ApiService} from './shared/services/api.service';
import {Api, ApiTypes} from './shared/configuration';
import {SignalRService} from './shared/services/signal-r.service';
import {MatDialog} from '@angular/material/dialog';
import {ActualizeDialogComponent} from './shared/components/actualize-dialog/actualize-dialog.component';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Session} from "./shared/interfaces/self";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'less-adm';
  constructor(private activeRoute: ActivatedRoute,
              private signalR: SignalRService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar,
              private api: ApiService,
              private router: Router) {}
  route = '';
  sessions: Session[] = [];
  get isTerminal(): any {
    return this.route.includes('monitor') || this.route.includes('terminal');
  }
  get isEmpty(): any {
    return this.route.includes('room');
  }
  initialized = false;
  getApiType(): string {
    return localStorage.getItem('apiType');
  }
  async getSessions(): Promise<Session[]> {
    this.sessions = await this.api.getSession().toPromise();
    return this.sessions;
  }
  switchApi(type: boolean): void {
    if (type) {
      localStorage.setItem('apiType', 'prod');
      Api.API_LINK = ApiTypes.PROD;
    } else {
      localStorage.setItem('apiType', 'test');
      Api.API_LINK = ApiTypes.TEST;
    }
    window.location.reload();
  }
  async ngOnInit(): Promise<void> {
    if (!this.getApiType()) {
      localStorage.setItem('apiType', 'test');
      Api.API_LINK = ApiTypes.TEST;
    } else {
      switch (this.getApiType()) {
        case 'prod': {
          Api.API_LINK = ApiTypes.PROD;
          break;
        }
        case 'test': {
          Api.API_LINK = ApiTypes.TEST;
          break;
        }
      }
    }
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        console.log(e);
        this.checkAuth(e.url);
        this.route = e.url;
      }
    });
    this.parseUser();
  }
  async parseUser(): Promise<void> {
    if (!!localStorage.getItem('api_token')) {
      // this.user = await this.api.getSelf().toPromise();
      this.initialized = true;
      // this.signalR.startConnection().then(i => {
      //   this.initialized = true;
      // });
    } else {
      this.initialized = true;
      // this.signalR.startConnection().then(i => {
      //   this.initialized = true;
      // });
    }
  }
  exit(): void {
    localStorage.removeItem('api_token');
    this.router.navigate(['/login']);
  }
  async checkAuth(route = '/'): Promise<void> {
    if (localStorage.getItem('api_token') === null) {
      this.router.navigate(['/login']);
    } else {
      var a = await this.api.getSession().toPromise();
      if(route === '/') {
        if(a.length > 0) {
          this.router.navigate(['room/session/' + a[0].id]);
        } else {
          this.router.navigate([route]);
        }
      }
    }
  }
}
