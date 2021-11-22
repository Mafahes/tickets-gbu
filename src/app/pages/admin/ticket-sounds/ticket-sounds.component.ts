import { Component, OnInit } from '@angular/core';
import {Reason} from "../../../shared/interfaces/reason";
import {ApiService} from "../../../shared/services/api.service";
import {SoundObject} from "../../../shared/interfaces/Sound";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-ticket-sounds',
  templateUrl: './ticket-sounds.component.html',
  styleUrls: ['./ticket-sounds.component.scss']
})
export class TicketSoundsComponent implements OnInit {

  sounds: SoundObject[] = [];
  name = '';
  loading = false;
  form = this.fb.group({
    name: ['', Validators.required],
    file: [null, Validators.required]
  })
  constructor(
    private api: ApiService,
    private fb: FormBuilder
  ) { }
  onFileSelect(e): void {
    if(!!e.target.files) {
      this.form.patchValue({
        file: e.target.files[0]
      })
    }
  }
  async delSound(id): Promise<void> {
    await this.api.deleteSound(id).toPromise();
    this.sounds = await this.api.getSounds().toPromise();
  }
  async submit(): Promise<void> {
    if(this.form.valid) {
      this.loading = true;
      const fd = new FormData();
      fd.append('uploadedFiles', this.form.get('file').value);
      var file = await this.api.uploadFile(fd).toPromise()
      await this.api.createSound({
        ...this.form.value,
        fileId: file[0].id
      }).toPromise();
      this.sounds = await this.api.getSounds().toPromise();
      this.loading = false;
    }
  }
  async ngOnInit(): Promise<void> {
    this.sounds = await this.api.getSounds().toPromise();
  }

}
