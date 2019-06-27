import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';
import {Firm} from '../../shared/domain/Firm';
import {BehaviorSubject} from 'rxjs';
import {debounceTime, distinctUntilChanged, isEmpty} from 'rxjs/operators';
import {FirmService} from '../../shared/service/firm.service';
import {StaffService} from '../../shared/service/staff.service';


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
  firmNoTemp = 0;  // 传递厂商编号
  pageIndex = 1;
  pageSize = 10;
  loading = true;    //  table加载状态
  okLoading = false;
  total = 0;    // 当前总数据，在服务器渲染时需要传入
  searchValue = '';

  firms: Firm[] = [];

    constructor(private _message: NzMessageService,
                private firmService: FirmService) {
      this.manuAddForm = new FormGroup({
        firmName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
        firmAddress: new FormControl('', [Validators.required, Validators.maxLength(50)]),
        firmContacter: new FormControl('', [Validators.required, Validators.maxLength(10)]),
        firmTelephone: new FormControl('', [Validators.required, Validators.maxLength(20)]),
        firmEmail: new FormControl('', [Validators.email, Validators.required, Validators.maxLength(50)])
      });
      this.manuModForm = new FormGroup({
        firmAddress: new FormControl('', [Validators.required, Validators.maxLength(50)]),
        firmContacter: new FormControl('', [Validators.required, Validators.maxLength(10)]),
        firmTelephone: new FormControl('', [Validators.required, Validators.maxLength(20)]),
        firmEmail: new FormControl('', [Validators.email, Validators.required, Validators.maxLength(50)])
      });
  }

  ngOnInit() {
    /*this.searchTerms.pipe(
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
    this.firms = null;
    this.firmService.findByNo(parseInt(this.searchValue, 10))
      .subscribe(
        (data) => {
          if (!data[`0`]) {
            this.firms = [data];
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


  addManu(): void {       // 增加厂商
      if (this.manuAddForm.valid) {
        this.okLoading = true;
        const firm: Firm = {
          firmNo: 0,
          firmName: this.manuAddForm.get('firmName').value,
          firmAddress: this.manuAddForm.get('firmAddress').value,
          firmContacter: this.manuAddForm.get('firmContacter').value,
          firmTelephone: this.manuAddForm.get('firmTelephone').value,
          firmEmail: this.manuAddForm.get('firmEmail').value,
        };
        this.firmService.save(firm).subscribe(
          () => {
            /*this.firms.unshift(u);
            this.firms = this.firms.slice();*/
            this.isVisible_add = false;
            this.okLoading = false;
            this._message.create('success', '添加成功');
            this.manuAddForm.reset();
            this.findAll();
          }, () => {
            this.okLoading = false;
            this._message.create('error', '添加失败');
          }
        );
      } else {
        this._message.create('warning', '填写数据有误');
      }
    }

  modManu(): void {       // 修改厂商
    if (this.manuModForm.valid) {
      const firm: Firm = {
        firmNo: this.firmNoTemp,
        firmAddress: this.manuModForm.get('firmAddress').value,
        firmContacter: this.manuModForm.get('firmContacter').value,
        firmTelephone: this.manuModForm.get('firmTelephone').value,
        firmEmail: this.manuModForm.get('firmEmail').value,
      };
      this.firmService.update(firm).subscribe(
        () => {
          this.isVisible_modify = false;
          this._message.create('success', '修改成功');
          this.manuModForm.reset();
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
    this.firmService.total().subscribe(
      (data) => {
        this.total = data[`status`];
        console.log(this.total);
      }
    )
    this.loading = true;
    this.firmService.findAll(this.pageIndex, this.pageSize)
      .subscribe(
        (data) => {
          if (data[`length`] >=  0) {
            this.loading = false;
            this.firms = data;
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

  modManuSet(data: any): void {    // 厂商修改表单预设
    this.manuModForm.patchValue(data);
  }

}
