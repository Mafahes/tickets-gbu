import { Component, OnInit } from '@angular/core';
import {User} from "../../../shared/interfaces/User";
import {ApiService} from "../../../shared/services/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  constructor(
    private api: ApiService,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    this.users = await this.api.getUsers().toPromise();
  }
  async deleteUser(id): Promise<void> {
    await this.api.deleteUser(id).toPromise();
    this.users = await this.api.getUsers().toPromise();
  }

}
