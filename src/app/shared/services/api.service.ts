import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ToolsService} from './tools.service';
import {Api, Status} from '../configuration';
import {map} from 'rxjs/operators';
import {Session} from "../interfaces/self";
import {RoomObject} from "../interfaces/room";
import {Cat} from "../interfaces/Cat";
import {Queue} from "./queue";
import {Window} from "../interfaces/window";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private tool: ToolsService) { }
  logIn(data): Observable<any> {
    return this.http.post<any>(`${Api.API_LINK}auth/login-email`, data);
  }
  getSession(): Observable<Session[]> {
    return this.http.get<Session[]>(`${Api.API_LINK}api/sessions`)
      .pipe(
        map(e => e.map(e2 => ({...e2, pause: e2.pause.filter(e3 => e3.dateOver === null)})))
      );
  }
  stopSession(): Observable<any> {
    return this.http.get<any>(`${Api.API_LINK}api/sessions/stop`);
  }
  getRooms(): Observable<RoomObject> {
    return this.http.get<RoomObject>(`${Api.API_LINK}api/rooms`);
  }
  getWindows(id): Observable<Window[]> {
    return this.http.get<Window[]>(`${Api.API_LINK}api/rooms/windows?roomId=${id}`)
      .pipe(map(e => e.map((e2) => ({...e2, checked: false}))));
  }
  getCatByRoom(id): Observable<Cat[]> {
    return this.http.get<Cat[]>(`${Api.API_LINK}api/rooms/categories?roomId=${id}`);
  }
  startSession(data): Observable<any> {
    return this.http.post<any>(`${Api.API_LINK}api/sessions/start`, data);
  }
  pauseSession(): Observable<any> {
    return this.http.get<any>(`${Api.API_LINK}api/sessions/pause`);
  }
  unpauseSession(): Observable<any> {
    return this.http.get<any>(`${Api.API_LINK}api/sessions/unpause`);
  }
  getTicket(id): Observable<any> {
    return this.http.get<any>(`${Api.API_LINK}api/tickets/take?ticketId=${id}`);
  }
  findTicket(text): Observable<any> {
    return this.http.post<any>(`${Api.API_LINK}api/tickets/find?name=${text}`, null);
  }
  getQueue(): Observable<Queue[]> {
    return this.http.get<Queue[]>(`${Api.API_LINK}api/sessions/queue`)
    //   .pipe(
    //   map(e => e.map(e2 => ({...e2, name: `${e2?.service?.letter || '-'}${e2.id}`})))
    // );
  }
}