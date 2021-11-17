import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../../../shared/services/api.service";

@Component({
  selector: 'app-new-admin-rooms',
  templateUrl: './new-admin-rooms.component.html',
  styleUrls: ['./new-admin-rooms.component.scss']
})
export class NewAdminRoomsComponent implements OnInit {

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private api: ApiService
  ) { }
  form = this.fb.group({
    name: '',
    description: '',
    address: '',
    category: this.fb.array([]),
    windows: this.fb.array([]),
    fileId: 1
  })
  getCatControls():FormArray {
    return this.form.controls['category'] as FormArray;
  }
  getWindowControls():FormArray {
    return this.form.controls['windows'] as FormArray;
  }
  getServiceControl(index):FormArray {
    return (this.form.controls['category'] as FormArray)['controls'][index].get('services') as FormArray;
  }
  removeCatControl(index) {
    let cats = this.form.get('category') as FormArray;
    cats.removeAt(index);
  }
  removeWindowControl(index) {
    let cats = this.form.get('windows') as FormArray;
    cats.removeAt(index);
  }
  removeServiceControl(indexToCat, index) {
    let cats = (this.form.get('category') as FormArray).controls[indexToCat].get('services') as FormArray;
    cats.removeAt(index);
  }
  addCatControl() {
    let cats = this.form.get('category') as FormArray;
    cats.push(this.fb.group({
      name: '',
      description: '',
      letter: '',
      services: this.fb.array([]),
      fileId: 1
    }))
  }
  addWindowControl() {
    let cats = this.form.get('windows') as FormArray;
    cats.push(this.fb.group({
      name: '',
      description: '',
      letter: '',
      fileId: 1
    }))
  }
  addServiceControl(index) {
    let cats = (this.form.get('category') as FormArray).controls[index].get('services') as FormArray;
    cats.push(this.fb.group({
      name: '',
      description: '',
      letter: '',
      fileId: 1
    }))
  }
  async save(): Promise<void> {
    await this.api.createRoom(this.form.value).toPromise();
    this.router.navigate(['/admin/rooms'])
  }
  ngOnInit(): void {
  }

}
