import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../../../../shared/services/api.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-new-reason-redirect',
  templateUrl: './new-reason-redirect.component.html',
  styleUrls: ['./new-reason-redirect.component.scss']
})
export class NewReasonRedirectComponent implements OnInit {

  constructor(
    private router: Router,
    private api: ApiService,
    private fb: FormBuilder
  ) { }
  form = this.fb.group({
    name: '',
    description: ''
  })
  ngOnInit(): void {
  }
  async save(): Promise<void> {
    await this.api.createRedirectReason(this.form.value).toPromise();
    this.router.navigate(['/admin/redirect'])
  }

}
