import {Component, OnInit} from '@angular/core';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApplyStateEnum, DisuseStateEnum} from '../../../shared/domain/Enum';
import {BehaviorSubject} from 'rxjs';
import {Disuse} from '../../../shared/domain/Disuse';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {DisuseService} from '../../../shared/service/disuse.service';
import {ActivatedRoute} from '@angular/router';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-disuse-application-management',
  templateUrl: './disuse-application-management.component.html',
  styleUrls: ['./disuse-application-management.component.css']
})
export class DisuseApplicationManagementComponent implements OnInit {
  loading = false;    //  加载状态
  diuseForm: FormGroup;
  staffNumber = 100000; // TODO: REMEMBER TO DELETE THIS.
  isVisibleDetail = false;    // 修改隐藏
  isVisible = false;
  pageIndex = 1;
  pageSize = 20;
  temp: string;
  navigationSubscription;
  routerReload: Router;

  total = 0;    // 当前总数据，在服务器渲染时需要传入
  searchTerms = new BehaviorSubject<string>('');  // 查询
  disuses: Disuse[] = [];
  state = this.router.snapshot.queryParams[`state`];
  constructor(
    private modalService: NzModalService,
    private message: NzMessageService,
    private disuseService: DisuseService,
    private router: ActivatedRoute,
  ) {
    this.diuseForm = new FormGroup({
        disuseState: new FormControl(DisuseStateEnum, [Validators.required]),
    }
    );

  }
  disuseData = [];

  size = 'default';
  deviceDetailData = [
  ];
  ngOnInit() {
    console.log('this.state:');
    console.log(this.state);
    if ( this.state === '待审核' ) {  // TODO
      this.searchTerms.pipe(
        debounceTime(300),
        distinctUntilChanged()
      ).subscribe(() => {
          // this.findAll();
          console.log(this.state);
          this.findAllByState(this.state);
        }
      );
    }
    if ( this.state === '未通过') {  // TODO
      this.searchTerms.pipe(
        debounceTime(300),
        distinctUntilChanged()
      ).subscribe(() => {
          // this.findAll();
          console.log(this.state);
          this.findAllByState(this.state);
        }
      );
    }
    if ( this.state === '已报废') {  // TODO
      this.searchTerms.pipe(
        debounceTime(300),
        distinctUntilChanged()
      ).subscribe(() => {
          // this.findAll();
          console.log(this.state);
          this.findAllByState(this.state);
        }
      );
    }
  }


  searchDisuse(disuseNo: string): void {
    this.pageIndex = 1;
    this.disuseData = null;
    this.disuseService.findByNo(disuseNo, this.staffNumber)
      .subscribe(
        (data) => {
          if (!data[`0`]) {
            this.disuseData = [data];
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

   getDisuseDetail(disuseNo: string): void {
     this.pageIndex = 1;
     this.deviceDetailData = null;
     console.log(disuseNo);
     this.disuseService.findByNo(disuseNo, this.staffNumber)
       .subscribe(
         (data) => {
           if (!data[`0`]) {
             this.deviceDetailData = [data];
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



  findAllByState(state: DisuseStateEnum, reset: boolean = false) {
    console.log('state in findAllByState():');
    console.log();
    if (reset) {
      this.pageIndex = 1;
    }
    this.disuseService.total(this.staffNumber).subscribe(
      (data) => {
        this.total = data[`status`];
        console.log(this.total);
        this.disuseService.findAllByState(this.pageIndex, this.pageSize, this.staffNumber, state)
          .subscribe(
            (data1) => {
              if (data1[`length`] >=  0) {
                console.log(data1);
                this.loading = false;
                this.disuseData = data1;
                console.log('disuseData');
                console.log(this.disuseData);
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


  showConfirm(disuseNo: string): void {
    this.modalService.confirm({
      nzTitle: '你确认该报废通过吗?',
      nzContent: '<b style="color: red;">如果确认请点击确认</b>',
      nzOkText: '确认',
      nzOnOk: () => {
        console.log('确认');
        this.confirmDisuse(disuseNo);
      },
      nzCancelText: '取消',
      nzOnCancel: () => console.log('取消')
    });
  }

  showDeleteConfirm(disuseNo: string): void {
    this.modalService.confirm({
      nzTitle: '<i>你确认拒绝该报废通过吗?</i>',
      nzContent: '<b>如果确认请点击确认</b>',
      nzOkType: 'danger',
      nzOnOk: () => {
        console.log('确认');
        this.denyDisuse(disuseNo);
      },
      nzCancelText: '取消'
    });
  }
  confirmDisuse(disuseNo: string): void {
    if (this.diuseForm.valid) {
      this.loading = true;
      const disuse: Disuse = {
        disuseNo: this.temp,
        disuseState: DisuseStateEnum.DISUSE,
      };
      console.log(disuse);
      this.disuseService.update(disuse, this.staffNumber).subscribe(   // 修改库房信息
        u => {
          this.disuses.unshift(u);
          // this.isVisible = false;
          this.message.create('success', '修改成功');
          this.diuseForm.reset();
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
  denyDisuse(disuseNo: string): void {
    if (this.diuseForm.valid) {
      this.loading = true;
      const disuse: Disuse = {
        disuseNo: this.temp,
        disuseState: DisuseStateEnum.CANNOT,
      };
      console.log(disuse);
      this.disuseService.update(disuse, this.staffNumber).subscribe(   // 修改库房信息
        u => {
          this.disuses.unshift(u);
          // this.isVisible = false;
          this.message.create('success', '修改成功');
          this.diuseForm.reset();
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

  findAll(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1;
    }
    this.disuseService.total(this.staffNumber).subscribe(
      (data) => {
        this.total = data[`status`];
        console.log(this.total);
      }
    );
    this.loading = true;
    this.disuseService.findAll(this.pageIndex, this.pageSize, this.staffNumber)
      .subscribe(
        (data) => {
          if (data[`length`] >=  0) {
            console.log(data);
            this.loading = false;
            this.disuseData = data;
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

  modDisuseSet(data: any): void {

    this.diuseForm.patchValue(data);

  }

}
