import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-manufacturer-management',
  templateUrl: './manufacturer-management.component.html',
  styles  : []
})
export class ManufacturerManagementComponent implements OnInit {
  manuAddForm: FormGroup;  // 表格
  manuModForm: FormGroup;
  isVisible_add = false;    // 添加隐藏
  isVisible_modify = false;    // 修改隐藏
  pageIndex = 1;
  pageSize = 20;
  manuData = [
    {
    firmNo: '1001',
    firmName: '华东理工大学',
    firmAddress: '上海市奉贤区',
    firmContact: '郑庆文',
    firmTelephone: '56108888',
    firmEmail: '123@qq.com',
    firmAddDate: '2018/5/11'
  },
  {
      firmNo: '1002',
      firmName: '华西理工大学',
      firmAddress: '上海市奉贤区',
      firmContact: '郑小文',
      firmTelephone: '56108882',
      firmEmail: '1234@qq.com',
      firmAddDate: '2018/2/11'
    },
    {
      firmNo: '1003',
      firmName: '华北理工大学',
      firmAddress: '上海市奉贤区',
      firmContact: '郑大文',
      firmTelephone: '56108881',
      firmEmail: '12345@qq.com',
      firmAddDate: '2018/1/11'
    }
];

    constructor(private _message: NzMessageService) {
      this.manuAddForm = new FormGroup({
        firmNo: new FormControl('', [Validators.required]),
        firmName: new FormControl('', [Validators.required]),
        firmAddress: new FormControl('', [Validators.required]),
        firmContact: new FormControl('', [Validators.required]),
        firmTelephone: new FormControl('', [Validators.required]),
        firmEmail: new FormControl('', [Validators.email])
      });
      this.manuModForm = new FormGroup({
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

  addManu(): void {
    this._message.create('success', '添加成功');
    this.isVisible_add = false;
    }

  modManu(): void {
    this._message.create('success', '修改成功');
    this.isVisible_modify = false;
  }

  getFormControl(name) {
    return this.manuAddForm.controls[ name ];
  }

  getFormControl_mod(name) {
    return this.manuModForm.controls[ name ];
  }

}
