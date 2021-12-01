import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import {Router} from "@angular/router";
import {forkJoin} from "rxjs";
import {Category, RoomData, RoomObject, Service} from "../../../shared/interfaces/room";
import {ChartDataset, ChartOptions, ChartType} from "chart.js";
import {DateRange} from "@angular/material/datepicker";

@Component({
  selector: 'app-admin-stats',
  templateUrl: './admin-stats.component.html',
  styleUrls: ['./admin-stats.component.scss']
})
export class AdminStatsComponent implements OnInit {
  room: RoomObject;
  selectedCategory: Category[] = [];
  selectedService: Service[] = [];
  selectedData;
  a1;
  a2;
  a3;
  pickerShowed = false;
  selectedDateRange: DateRange<Date> = new DateRange(new Date(), new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()+1));
  selectedDateRangePicker: DateRange<Date>;
  ticketsCount = 0;
  async _onSwitchDate(type: boolean): Promise<void> { // true - left, false - right
    var d1 = new Date(this.selectedDateRange.start.toISOString());
    var d2 = new Date(this.selectedDateRange.end.toISOString());
    if(type) {
      d1.setDate(d1.getDate()-1);
      d2.setDate(d2.getDate()-1);
    } else {
      d1.setDate(d1.getDate()+1);
      d2.setDate(d2.getDate()+1);
    }
    this.selectedDateRange = new DateRange(d1, d2);
    var a = await this.api.getAdminStats(d1.toISOString(), d2.toISOString()).toPromise();
    this.barChartLabels = a.stats.map((e) => new Date(e.date).getDay().toString())
    this.barChartData = [
      {
        data: a.stats.map(e => e.count),
        label: 'Статистика',
        backgroundColor: 'rgb(99,150,226,1)'
      },
    ];
    this.ticketsCount = a.stats.map((e) => e.count).length === 0 ? 0 : a.stats.map((e) => e.count).reduce((a, b) => a+b);
    this.pickerShowed = false;
  }
  async _onSelectedChange(date: Date): Promise<void> {
    if (
      this.selectedDateRangePicker &&
      this.selectedDateRangePicker.start &&
      date > this.selectedDateRangePicker.start &&
      !this.selectedDateRangePicker.end
    ) {
      this.selectedDateRangePicker = new DateRange(
        this.selectedDateRangePicker.start,
        date
      );
      var a = await this.api.getAdminStats(this.selectedDateRangePicker.start.toISOString(), this.selectedDateRangePicker.end.toISOString()).toPromise();
      this.barChartLabels = a.stats.map((e) => new Date(e.date).getDay().toString())
      this.barChartData = [
        {
          data: a.stats.map(e => e.count),
          label: 'Статистика',
          backgroundColor: 'rgb(99,150,226,1)',
          hoverBackgroundColor: 'rgb(99,150,226,1)'
        },
      ];
      this.ticketsCount = a.stats.map((e) => e.count).length === 0 ? 0 : a.stats.map((e) => e.count).reduce((a, b) => a+b);
      this.pickerShowed = false;
    } else {
      this.selectedDateRangePicker = new DateRange(date, null);
    }
    this.selectedDateRange = this.selectedDateRangePicker;
  }
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
  public barChartLabels: any[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataset[] = [];
  constructor(
    private api: ApiService,
    private router: Router
  ) { }
  filterArr(a, type) {
    if(a === null) return;
    switch (type) {
      case 1: {
        this.selectedCategory = this.room.data.find((e) => e.id === parseInt(a)).category;
        break;
      }
      case 2: {
        this.selectedService = this.selectedCategory.find((e) => e.id === parseInt(a)).services;
        break;
      }
      case 3: {
        this.selectedData = this.selectedService.find((e) => e.id === parseInt(a)).id;
        break;
      }
    }
  }
  ngOnInit(): void {
    forkJoin([
      this.api.getRooms()
    ]).subscribe((e) => {
      this.room = e[0];
    })
  }

}
