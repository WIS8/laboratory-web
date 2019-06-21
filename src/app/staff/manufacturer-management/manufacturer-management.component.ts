import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';
import {Firm} from '../../shared/domain/Firm';
import {BehaviorSubject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from "rxjs/operators";


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
  searchTerms = new BehaviorSubject<string>('');  // 查询

  firms: Firm[] = [];

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
        firmEmail: new FormControl('', [Validators.email, Validators.required])
      });
      this.manuModForm = new FormGroup({
        firmNo: new FormControl('', [Validators.required]),
        firmName: new FormControl('', [Validators.required]),
        firmAddress: new FormControl('', [Validators.required]),
        firmContact: new FormControl('', [Validators.required]),
        firmTelephone: new FormControl('', [Validators.required]),
        firmEmail: new FormControl('', [Validators.email, Validators.required])
      });
  }

  ngOnInit() {
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(() => {
        this.findAll();
      }
    );
  }

  addManu(): void {       // 增加厂商
      if (this.manuAddForm.valid) {
        const firm: Firm = {
          firmNo: this.manuAddForm.get('firmNo').value,
          firmName: this.manuAddForm.get('firmName').value,
          firmAddress: this.manuAddForm.get('firmNo').value,
          firmContact: this.manuAddForm.get('firmName').value,
          firmTelephone: this.manuAddForm.get('firmNo').value,
          firmEmail: this.manuAddForm.get('firmName').value,
        };
        this._message.create('success', '添加成功');
        this.isVisible_add = false;
      } else {
        this._message.create('warning', '填写数据有误');
      }
    }

  modManu(): void {       // 修改厂商
    if (this.manuModForm.valid) {
      this._message.create('success', '修改成功');
      this.isVisible_modify = false;
    } else {
      this._message.create('warning', '填写数据有误');
    }
  }

  findAll(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1;
    }
  }

  modManuSet(firm: Firm): void {
    this.manuModForm.setValue(firm);
  }


}
