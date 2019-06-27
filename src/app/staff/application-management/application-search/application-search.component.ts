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
import {ApplyService} from '../../../shared/service/apply.service';

@Component({
  selector: 'app-application-search',
  templateUrl: './application-search.component.html',
  styleUrls: ['./application-search.component.css']
})
export class ApplicationSearchComponent implements OnInit {
  applyModForm: FormGroup;
  isVisible_modify = false;    // 修改隐藏
  pageIndex = 1;
  pageSize = 10;
  applyNoTemp = '';
  loading = true;    //  加载状态
  total = 0;    // 当前总数据，在服务器渲染时需要传入
  searchValue = '';

  applys: Apply[] = [];

  constructor(private _message: NzMessageService,
              private applyService: ApplyService) {
    this.applyModForm = new FormGroup({
      applyType: new FormControl('', [Validators.required]),
      applyReason: new FormControl('', [Validators.required, Validators.maxLength(255)])
    });
  }

  ngOnInit() {
   /* this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(() => {
        this.findAll();
      }
    );*/
   this.findAll();
  }

  search(): void {
    this.pageIndex = 1;
    this.applys = null;
    this.applyService.findByNo(this.searchValue, 100000)
      .subscribe(
        (data) => {
          if (!data[`0`]) {
            this.applys = [data];
            console.log([data]);
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log('end');
        }
      );
  }

  modApply(): void {       // 修改申请单
    if (this.applyModForm.valid) {
      const apply: Apply = {
        applyNo: this.applyNoTemp,
        applyType: this.applyModForm.get('applyType').value,
        applyReason: this.applyModForm.get('applyReason').value
      };
      this.applyService.update(apply, 100004).subscribe(    //  staffno
        () => {
          this.isVisible_modify = false;
          this._message.create('success', '修改成功');
          this.applyModForm.reset();
          this.findAll();
        },
        () => {
          this._message.create('error', '修改失败');
        }
      );
    } else {
      this._message.create('warning', '填写数据有误');
    }
  }

  findAll(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1;
    }
    this.applyService.total(100000).subscribe(
      (data) => {
        this.total = data[`status`];
        console.log(this.total);
      }
    );
    this.loading = true;
    this.applyService.findAll(this.pageIndex, this.pageSize, 100000)   //  staffno
      .subscribe(
        (data) => {
          if (data[`length`] >=  0) {
            console.log(data);
            this.loading = false;
            this.applys = data;
          } else {
            this._message.create('error', '发生错误！');
          }
        },
        (error) => {
          this.loading = false;
          console.log(error);
        },
        () => {
          console.log('end');
        }
      );
  }

  modApplySet(data: any): void {
    this.applyModForm.patchValue(data);
  }

}
