import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import {Observable, throwError} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private hubConnection: signalR.HubConnection;
  startConnection = async () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://nomenclature.3dcafe.ru/notificationHub')
      .build();
    return this.hubConnection
      .start();
  }
  invoke = async () => {
    if (await this.hubConnection.state === 'Connected') {
      return this.hubConnection.invoke('SendMessage', 'test');
    } else {
      throwError('Сокеты не подключены');
    }
  }
  dataTransferSub(method): Observable<any> {
    return new Observable((obs) => {
      if (this.hubConnection.state === 'Connected') {
        this.hubConnection.on(method, (user, message) => {
          obs.next({user, message});
        });
      } else {
        obs.error('Сокеты потерпели крушение');
      }
    });
  }
  // public addTransferChartDataListener = () => {
  //   this.hubConnection.on('transferchartdata', (data) => {
  //     this.data = data;
  //     console.log(data);
  //   });
  // }
}
