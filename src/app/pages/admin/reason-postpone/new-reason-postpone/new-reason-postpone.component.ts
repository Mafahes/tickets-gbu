import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../../../../shared/services/api.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-new-reason-postpone',
  templateUrl: './new-reason-postpone.component.html',
  styleUrls: ['./new-reason-postpone.component.scss']
})
export class NewReasonPostponeComponent implements OnInit {

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
    await this.api.createPostponeReason(this.form.value).toPromise();
    this.router.navigate(['/admin/postpone'])
  }

}
