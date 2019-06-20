import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';
import {SharedModule} from "../../shared/shared.module";

import {LeaderComponent} from "../leader.component";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-room-management',
  templateUrl: './room-management.component.html',
  styles  : []
})
export class RoomManagementComponent implements OnInit {
  roomForm: FormGroup;
  isVisible = false;
  constructor(private message: NzMessageService) {
    this.roomForm = new FormGroup({
      firmNo: new FormControl('', [Validators.required]),
      firmName: new FormControl('', [Validators.required]),
      firmAddress: new FormControl('', [Validators.required]),
      firmContact: new FormControl('', [Validators.required]),
      firmTelephone: new FormControl('', [Validators.required]),
      firmEmail: new FormControl('', [Validators.email])
    });
  }

  ngOnInit() {
  }

  addRoom(): void {
    this.message.create('success', '添加成功');
  }

  getFormControl(name) {
    return this.roomForm.controls[ name ];
  }

}
