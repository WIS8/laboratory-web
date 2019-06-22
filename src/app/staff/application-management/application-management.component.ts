import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';
import {Apply} from "../../shared/domain/Apply";
import {BehaviorSubject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-application-management',
  templateUrl: './application-management.component.html',
  styleUrls: ['./application-management.component.css']
})
export class ApplicationManagementComponent implements OnInit {
  applyModForm: FormGroup;
  isVisible_add = false;    // 添加隐藏
  isVisible_modify = false;    // 修改隐藏
  pageIndex = 1;
  pageSize = 20;
  searchTerms = new BehaviorSubject<string>('');  // 查询

  applys: Apply[] = [];

  applyData = [
    {
      applyNo: '1001',
      applyDate: '2018-1-1',
      applyReason: '要用',
      applyType: '普通',
      applyState: '等待审查',
      applyUpdateDate: '2019-1-1',
      applyUpdateInfo: '好',
    },
    {
      applyNo: '1002',
      applyDate: '2018-1-1',
      applyReason: '要用',
      applyType: '普通',
      applyState: '批准通过',
      applyUpdateDate: '2019-1-1',
      applyUpdateInfo: '好',
    },
    {
      applyNo: '1003',
      applyDate: '2018-1-1',
      applyReason: '要用',
      applyType: '普通',
      applyState: '需要修改',
      applyUpdateDate: '2019-1-1',
      applyUpdateInfo: '好',
    }
  ];

  constructor(private _message: NzMessageService) {
    this.applyModForm = new FormGroup({
      applyNo: new FormControl('', [Validators.required]),
      applyType: new FormControl('', [Validators.required]),
      applyReason: new FormControl('', [Validators.required]),
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


  modApply(): void {       // 修改申请单
    if (this.applyModForm.valid) {
      // service here
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
    // service here
  }

  modApplySet(apply: Apply): void {
    this.applyModForm.setValue(apply);
  }

}
