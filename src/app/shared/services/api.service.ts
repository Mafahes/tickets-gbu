import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ToolsService} from './tools.service';
import {Api, Status} from '../configuration';
import {map} from 'rxjs/operators';
import {Session} from "../interfaces/self";
import {RoomObject} from "../interfaces/room";
import {Cat} from "../interfaces/Cat";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private tool: ToolsService) { }
  logIn(data): Observable<any> {
    return this.http.post<any>(`${Api.API_LINK}auth/login-email`, data);
  }
  getSession(): Observable<Session[]> {
    return this.http.get<Session[]>(`${Api.API_LINK}api/sessions`);
  }
  getRooms(): Observable<RoomObject> {
    return this.http.get<RoomObject>(`${Api.API_LINK}api/rooms`);
  }
  getCatByRoom(id): Observable<Cat[]> {
    return this.http.get<Cat[]>(`${Api.API_LINK}api/rooms/categories?roomId=${id}`);
  }
  startSession(data): Observable<any> {
    return this.http.post<any>(`${Api.API_LINK}api/sessions/start`, data);
  }
}
