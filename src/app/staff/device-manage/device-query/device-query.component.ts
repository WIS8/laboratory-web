import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';
import {Firm} from '../../../shared/domain/Firm';

@Component({
  selector: 'app-device-query',
  templateUrl: './device-query.component.html',
  styleUrls: ['./device-query.component.css']
})
export class DeviceQueryComponent implements OnInit {

  DeviceInfoForm: FormGroup;
  DeviceRepairForm: FormGroup;
  DeviceScrapForm: FormGroup;
  isVisible_modify = false;    // 修改隐藏
  isVisible_ToRepair = false;
  isVisible_ToScrap = false;
  selectedValue;
  select = document.getElementById("Select");
  pageIndex = 1;
  pageSize = 20;

  firms: Firm[] = [];

  DeviceData = [
    {
      DeviceNo: '100',
      DeviceName: '设备测试1',
      DeviceCategory: '类别测试',
      DeviceStandard: '标准测试',
      DevicePrice: '5610.33',
      DeviceStatus: '使用中',
      DeviceAddDate: '2018/5/11'
    },
    {
      DeviceNo: '1001',
      DeviceName: '华东理工大学',
      DeviceCategory: '上海市奉贤区',
      DeviceStandard: '郑庆文',
      DevicePrice: '56108888',
      DeviceStatus: '修理中',
      DeviceAddDate: '2018/5/11'
    },
    {
      DeviceNo: '1005564',
      DeviceName: '华东理工大学',
      DeviceCategory: '上海市奉贤区',
      DeviceStandard: '郑庆文',
      DevicePrice: '56108888',
      DeviceStatus: '报废中',
      DeviceAddDate: '2018/12/11'
    }
  ];
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

    this.DeviceRepairForm = new FormGroup({
      DeviceNo: new FormControl('', [Validators.required]),
      DeviceRepairNo: new FormControl('', [Validators.required]),
      DeviceRepairPrice: new FormControl('', [Validators.required]),
      DeviceRepairResult: new FormControl('', [Validators.required]),
      DeviceRepairDateStart: new FormControl('', [Validators.required]),
      DeviceRepairDateFinish: new FormControl('', [ Validators.required]),
    });

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

  DeviceInfo() {
    if (this.DeviceInfoForm.valid) {
      this._message.create('success', '修改成功');
      this.isVisible_modify = false;
    } else {
      this._message.create('warning', '填写数据有误');
    }
  }

  DeviceInfoMod(firm: Firm): void {
    this.DeviceInfoForm.setValue(firm);
  }

  CheckSelect(): void {
    if (this.selectedValue === "维修") {
      this.isVisible_ToRepair = true ;
    } else if (this.selectedValue === "报废"){
      this.isVisible_ToScrap = true;
    }
  }

  ToRepair(): void {
    if (this.DeviceRepairForm.valid) {
      this._message.create('success', '修改成功');
      this.isVisible_ToRepair = false;
    } else {
      this._message.create('warning', '填写数据有误');
    }
  }

  ToScrap(): void {
    if (this.DeviceScrapForm.valid) {
      this._message.create('success', '修改成功');
      this.isVisible_ToScrap = false;
    } else {
      this._message.create('warning', '填写数据有误');
    }
  }
}
