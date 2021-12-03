import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {ApiService} from "../../../../shared/services/api.service";
import {RoomData} from "../../../../shared/interfaces/room";

@Component({
  selector: 'app-new-admin-rooms',
  templateUrl: './new-admin-rooms.component.html',
  styleUrls: ['./new-admin-rooms.component.scss']
})
export class NewAdminRoomsComponent implements OnInit {

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private api: ApiService,
    private arouter: ActivatedRoute
  ) { }
  form = this.fb.group({
    name: '',
    description: '',
    address: '',
    category: this.fb.array([]),
    windows: this.fb.array([]),
    fileId: 1
  })
  roomId = null;
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
  async onWindowAudioUpload(roomIndex, file) {
    if(!!file.target.files.length) {
      const fd = new FormData();
      fd.append('uploadedFiles', file.target.files[0]);
      var a = await this.api.uploadFile(fd).toPromise();
      (this.form.get('windows') as FormArray).controls[roomIndex].patchValue({
        audioId: a[0].id
      })
    }
  }
  addWindowControl() {
    let cats = this.form.get('windows') as FormArray;
    cats.push(this.fb.group({
      name: '',
      description: '',
      letter: '',
      audioId: 25,
      fileId: 1
    }))
  }
  async addServiceFile(catIndex, serviceIndex, e) {
    if(!e.target.files.length) return;
    let cat = ((this.form.get('category') as FormArray).controls[catIndex].get('services') as FormArray).controls[serviceIndex] as FormGroup;
    const fd = new FormData();
    fd.append('uploadedFiles', e.target.files[0])
    var file = await this.api.uploadFile(fd).toPromise();
    cat.patchValue({
      fileId: file[0].id
    })
  }
  addServiceControl(index) {
    let cats = (this.form.get('category') as FormArray).controls[index].get('services') as FormArray;
    cats.push(this.fb.group({
      name: '',
      description: '',
      letter: '',
      fileUrl: '',
      fileId: 1
    }))
  }
  async save(): Promise<void> {
    await (!!this.roomId ? this.api.updateRoom({id: parseInt(this.roomId), ...this.form.value}) : this.api.createRoom(this.form.value)).toPromise();
    this.router.navigate(['/admin/rooms'])
  }
  ngOnInit(): void {
    this.arouter.paramMap.subscribe(async (e) => {
      if(!!e.get('id')) {
        let room = (await this.api.getRooms().toPromise()).data.find((e2) => e2.id === parseInt(e.get('id')));
        this.roomId = room.id;
        // await new Promise((res, rej) => setTimeout(() => res(true), 2000))
        this.form.patchValue({
          name: room.name,
          description: room.description,
          address: room.address,
          fileId: 1
        });
        var a = (this.form.get('category') as FormArray);
        var a2 = (this.form.get('windows') as FormArray);
        room.category.forEach((e) => a.push(
          this.fb.group({
            name: e.name,
            description: e.description,
            letter: e.letter,
            services: this.fb.array(e.services.map((e2) => this.fb.group({
              name: e2.name,
              description: e2.description,
              letter: e2.letter,
              fileId: 1
            }))),
            fileId: 1
          })
        ));
        (room?.windows ?? []).forEach((e) => a2.push(
          this.fb.group({
            name: e.name,
            audioId: e.audioId,
            description: e.description,
            letter: e.letter,
            fileId: 1
          })
        ))
      }
    })
  }

}
