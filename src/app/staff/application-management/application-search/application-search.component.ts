import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';
import {Apply} from '../../../shared/domain/Apply';
import {BehaviorSubject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-application-search',
  templateUrl: './application-search.component.html',
  styleUrls: ['./application-search.component.css']
})
export class ApplicationSearchComponent implements OnInit {
  applyModForm: FormGroup;
  isVisible_modify = false;    // 修改隐藏
  pageIndex = 1;
  pageSize = 20;
  loading = true;    //  加载状态
  total = 0;    // 当前总数据，在服务器渲染时需要传入
  searchTerms = new BehaviorSubject<string>('');  // 查询

  applys: Apply[] = [];

  applyData = [
    {
      applyNo: '1001',
      applyType: '普通',
      applyReason: '要用',
      applyDate: '2018-1-1',
      applyState: '等待审查',
      applyUpdateDate: '2019-1-1',
      applyUpdateInfo: '好',
    },
    {
      applyNo: '1002',
      applyType: '普通',
      applyReason: '我要用',
      applyDate: '2018-2-1',
      applyState: '批准通过',
      applyUpdateDate: '2019-1-1',
      applyUpdateInfo: '好',
    },
    {
      applyNo: '1003',
      applyType: '急需',
      applyReason: '它要用',
      applyDate: '2018-1-29',
      applyState: '需要修改',
      applyUpdateDate: '2019-1-1',
      applyUpdateInfo: '好',
    }
  ];



  constructor(private _message: NzMessageService) {
    this.applyModForm = new FormGroup({
      applyType: new FormControl('', [Validators.required]),
      applyReason: new FormControl('', [Validators.required, Validators.maxLength(255)])
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
      this.applyModForm.reset();
    } else {
      this._message.create('warning', '填写数据有误');
    }
  }

  findAll(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1;
    }
    this.loading = false;     //  暂时使用 需要修改
    // service here
  }

  modApplySet(data: any): void {
    this.applyModForm.patchValue(data);
  }

}
