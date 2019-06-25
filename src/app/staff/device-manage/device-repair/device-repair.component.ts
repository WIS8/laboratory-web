import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';
import {Firm} from '../../../shared/domain/Firm';

@Component({
  selector: 'app-device-repair',
  templateUrl: './device-repair.component.html',
  styleUrls: ['./device-repair.component.css']
})
export class DeviceRepairComponent implements OnInit {

  DeviceRepairForm: FormGroup;
  pageIndex = 1;
  pageSize = 20;

  firms: Firm[] = [];

  constructor(private _message: NzMessageService) {
    this.DeviceRepairForm = new FormGroup({
      DeviceNo: new FormControl('', [Validators.required]),
      DeviceRepairNo: new FormControl('', [Validators.required]),
      DeviceRepairPrice: new FormControl('', [Validators.required]),
      DeviceRepairResult: new FormControl('', [Validators.required]),
      DeviceRepairDateStart: new FormControl('', [Validators.required]),
      DeviceRepairDateFinish: new FormControl('', [ Validators.required]),
    });
  }

  ngOnInit() {
  }

}
