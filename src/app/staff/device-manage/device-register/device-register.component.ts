import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';
import {Firm} from '../../../shared/domain/Firm';

@Component({
  selector: 'app-device-register',
  templateUrl: './device-register.component.html',
  styleUrls: ['./device-register.component.css']
})
export class DeviceRegisterComponent implements OnInit {

  DeviceInfoForm: FormGroup;
  pageIndex = 1;
  pageSize = 20;

  firms: Firm[] = [];

  constructor(private _message: NzMessageService) {
    this.DeviceInfoForm = new FormGroup({
      DeviceNo: new FormControl('', [Validators.required]),
      DeviceName: new FormControl('', [Validators.required]),
      DeviceCategory: new FormControl('', [Validators.required]),
      DeviceStandard: new FormControl('', [Validators.required]),
      DevicePrice: new FormControl('', [Validators.required]),
      DeviceStatus: new FormControl('', [ Validators.required]),
      DeviceAddDate: new FormControl('', [ Validators.required])
    });
  }

  ngOnInit() {
  }

  // DeviceInfo() {
  //   if (this.DeviceInfoForm.valid) {
  //     this._message.create('success', '修改成功');
  //     this.isVisible_modify = false;
  //   } else {
  //     this._message.create('warning', '填写数据有误');
  //   }
  // }

}
