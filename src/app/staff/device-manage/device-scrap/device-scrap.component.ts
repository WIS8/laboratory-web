import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';
import {Firm} from '../../../shared/domain/Firm';

@Component({
  selector: 'app-device-scrap',
  templateUrl: './device-scrap.component.html',
  styleUrls: ['./device-scrap.component.css']
})
export class DeviceScrapComponent implements OnInit {

  DeviceScrapForm: FormGroup;
  pageIndex = 1;
  pageSize = 20;

  firms: Firm[] = [];

  constructor(private _message: NzMessageService) {
    this.DeviceScrapForm = new FormGroup({
      DeviceNo: new FormControl('', [Validators.required]),
      DeviceScrapNo: new FormControl('', [Validators.required]),
      DeviceScrapDate: new FormControl('', [Validators.required]),
      DeviceScrapStatus: new FormControl('', [Validators.required]),
      DeviceScrapDateNew: new FormControl('', [Validators.required]),
      DeviceScrapProcess: new FormControl('', [ Validators.required]),
    });
  }

  ngOnInit() {
  }

}
