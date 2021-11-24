import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  email = '';
  constructor(
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  async create(): Promise<void> {
    await this.api.createUser({email: this.email, code: '1122'}).toPromise();
    this.router.navigate(['/admin/users'])
  }

}
