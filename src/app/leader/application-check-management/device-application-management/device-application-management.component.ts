import { Component, OnInit } from '@angular/core';
import { NzModalService , NzDescriptionsModule} from 'ng-zorro-antd';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {Apply} from '../../../shared/domain/Apply';
import {ApplyDetail} from '../../../shared/domain/ApplyDetail';
import {ApplyStateEnum, ApplyTypeEnum} from '../../../shared/domain/Enum';
import {BehaviorSubject} from 'rxjs';
import {DeviceService} from '../../../shared/service/device.service';
import {ApplyService} from '../../../shared/service/apply.service';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-device-application-management',
  templateUrl: './device-application-management.component.html',
  styleUrls: ['./device-application-management.component.css']
})
export class DeviceApplicationManagementComponent implements OnInit {
  loading = false;    //  加载状态
  applicationForm: FormGroup;
  applyUpdateInfoForm: FormGroup;
  isVisibleDetail = false;    // 修改隐藏
  isVisible = false;
  pageIndex = 1;
  pageSize = 20;
  staffNumber = 100001;
  navigationSubscription;

  state = this.router.snapshot.queryParams[`state`];
  type = this.router.snapshot.queryParams[`type`];

  data = [
    // {
    //   applyNo: 111111,
    //   applyStaffNo: '100000',
    //   checkStaffNo: '111111',
    //   applyDate: '2019-1-11',
    //   applyReason: '非常急用',
    //   applyType: ApplyTypeEnum.URGENT,
    //   applyState: ApplyStateEnum.COMMIT,
    //   applyUpdateInfo: '',
    //   applyUpdateDate: '2019-1-11',
    // },
  ];
  temp: string;
  total = 0;    // 当前总数据，在服务器渲染时需要传入
  searchTerms = new BehaviorSubject<string>('');  // 查询
  applys: Apply[] = [];
  applydetails: ApplyDetail[] = [];


  constructor(private modalService: NzModalService,
              private message: NzMessageService,
              private applyService: ApplyService,
              private router: ActivatedRoute,
              private routerReload: Router,
  ) {
    this.applyUpdateInfoForm = new FormGroup({
      applyUpdateInfo: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      applyState: new FormControl(ApplyStateEnum, [Validators.required]),
    });
  }


  ngOnInit() {
    if ( this.type === '普通' || this.type === '急需'  ) {
      this.searchTerms.pipe(
        debounceTime(300),
        distinctUntilChanged()
      ).subscribe(() => {
          // this.findAll();
          console.log(this.type);
          this.findAllByType(this.type);
        }
      );
    }
    if ( this.state === '需修改' ) {  // TODO
      this.searchTerms.pipe(
        debounceTime(300),
        distinctUntilChanged()
      ).subscribe(() => {
          // this.findAll();
          console.log(this.type);
          this.findAllByState(this.type);
        }
      );
    }
    if ( this.state === '已通过') {  // TODO
      this.searchTerms.pipe(
        debounceTime(300),
        distinctUntilChanged()
      ).subscribe(() => {
          // this.findAll();
          console.log(this.type);
          this.findAllByState(this.type);
        }
      );
    }
  }
  showConfirm(): void {
    this.modalService.confirm({
      nzTitle: '你确认该项申请通过吗?',
      nzContent: '<b style="color: red;">如果确认请点击确认</b>',
      nzOkText: '确认',
      nzOnOk: () => console.log('确认'),
      nzCancelText: '取消',
      nzOnCancel: () => console.log('取消')
    });
  }

  showDeleteConfirm(): void {
    this.modalService.confirm({
      nzTitle: '<i>你确认拒绝该项申请通过吗?</i>',
      nzContent: '<b>如果确认请点击确认</b>',
      nzOkType: 'danger',
      nzOnOk: () => {
        console.log('确认');
        },
      nzCancelText: '取消'
    });
  }
  addUpdateInfo(): void {       // 增加审核说明以及审核是否通过判断
    if (this.applyUpdateInfoForm.valid) {
      this.loading = true;
      const apply: Apply = {
        applyNo: this.temp,
        applyUpdateInfo: this.applyUpdateInfoForm.get('applyUpdateInfo').value,
        applyState: this.applyUpdateInfoForm.get('applyState').value,
      };
      console.log(apply);
      this.applyService.update(apply, this.staffNumber).subscribe(   // 修改库房信息
        u => {
          this.applys.unshift(u);
          this.isVisible = false;
          this.message.create('success', '修改成功');
          this.applyUpdateInfoForm.reset();
          this.findAll();
        }, () => {
          this.loading = false;
          this.message.create('error', '修改失败');
        }
      );
    } else {
      this.message.create('warning', '请正确填写全部数据');
    }
  }
  searchByApplyNo(searchValue: string): void {
    this.pageIndex = 1;
    this.applys = null;
    this.applyService.findByNo(searchValue, this.staffNumber)
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


  findAllByType(type: ApplyTypeEnum, reset: boolean = false) {
    if (reset) {
      this.pageIndex = 1;
    }
    this.applyService.total(this.staffNumber).subscribe(
      (data) => {
        this.total = data[`status`];
        console.log(this.total);
        this.applyService.findAllByType(this.pageIndex, this.pageSize, this.staffNumber, this.type)
          .subscribe(
            (data1) => {
              if (data1[`length`] >=  0) {
                console.log(data1);
                this.loading = false;
                this.applys = data1;
              } else {
                this.message.create('error', '发生错误！');
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
    );
  }
  reload(): void {

  }


  findAllByState(type: ApplyStateEnum, reset: boolean = false) {
    if (reset) {
      this.pageIndex = 1;
    }
    this.applyService.total(this.staffNumber).subscribe(
      (data) => {
        this.total = data[`status`];
        console.log(this.total);
        this.applyService.findAllByState(this.pageIndex, this.pageSize, this.staffNumber, this.state)
          .subscribe(
            (data1) => {
              if (data1[`length`] >=  0) {
                console.log(data1);
                this.loading = false;
                this.applys = data1;
              } else {
                this.message.create('error', '发生错误！');
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
    );
  }


  findAll(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1;
    }
    this.applyService.total(this.staffNumber).subscribe(
      (data) => {
        this.total = data[`status`];
        console.log(this.total);
      }
    );
    this.loading = true;
    this.applyService.findAll(this.pageIndex, this.pageSize, this.staffNumber)
      .subscribe(
        (data) => {
          if (data[`length`] >=  0) {
            console.log(data);
            this.loading = false;
            this.data = data;
          } else {
            this.message.create('error', '发生错误！');
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
    this.applyUpdateInfoForm.patchValue(data);
  }

  Destroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

}
