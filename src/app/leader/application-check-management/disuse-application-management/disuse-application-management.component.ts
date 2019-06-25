import { Component, OnInit } from '@angular/core';
import { NzModalService , NzDescriptionsModule} from 'ng-zorro-antd';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {Apply} from '../../../shared/domain/Apply';
import {ApplyDetail} from '../../../shared/domain/ApplyDetail';  // TODO: 添加申请详情
import {DisuseStateEnum} from '../../../shared/domain/Enum';
import {BehaviorSubject} from 'rxjs';
import {Disuse} from '../../../shared/domain/Disuse';

@Component({
  selector: 'app-disuse-application-management',
  templateUrl: './disuse-application-management.component.html',
  styleUrls: ['./disuse-application-management.component.css']
})
export class DisuseApplicationManagementComponent implements OnInit {
  loading = false;    //  加载状态
  diuseForm: FormGroup;

  isVisibleDetail = false;    // 修改隐藏
  isVisible = false;
  pageIndex = 1;
  pageSize = 20;

  total = 0;    // 当前总数据，在服务器渲染时需要传入
  searchTerms = new BehaviorSubject<string>('');  // 查询
  disuses: Disuse[] = [];


  constructor(
    private modalService: NzModalService,
    private message: NzMessageService
  ) {
    // this.applyUpdateInfoForm = new FormGroup({
    //   applyUpdateInfo: new FormControl('', [Validators.maxLength(255)]),
    // }
    // );
  }
  disuseData = [
    {
      disuseNo: '1001',
      disuseDetail: {
        modelNo: 9901,
        disuseDetailQuantity: 100,
      } ,
      disuseStaffNo: '10161832',
      checkStaffNo: '10161833',
      disuseWay: '妥善烧掉',
      disuseDate: '2018-1-1',
      disuseState: DisuseStateEnum.COMMIT,
      disuseUpdateDate: '2019-1-1',
    },
    {
      disuseNo: '1002',
      disuseDetail: {
        modelNo: 9901,
        disuseDetailQuantity: 100,
      } ,
      disuseStaffNo: '10161833',
      checkStaffNo: '10161834',
      disuseWay: '妥善烧掉',
      disuseDate: '2018-1-12',
      disuseState:  DisuseStateEnum.COMMIT,
      disuseUpdateDate: '2019-1-1',
    },
    {
      disuseNo: '1003',
      disuseDetail: {
        modelNo: 9901,
        disuseDetailQuantity: 100,
      } ,
      disuseStaffNo: '10161834',
      checkStaffNo: '10161835',
      disuseWay: '妥善踩烂',
      disuseDate: '2018-1-29',
      disuseState:   DisuseStateEnum.COMMIT,
      disuseUpdateDate: '2019-1-1',
    },
  ];


  size = 'default';
  deviceDetailData = [
    {
      deviceNo: '1111',
      modelName: '实验室专用挖掘机',
      disuseDetailQuantity: 10,
    },
    {
      deviceNo: '2222',
      modelName: '实验室专用吊车',
      disuseDetailQuantity: 20,
    },
    {
      deviceNo: '3333',
      modelName: '实验室专用搅拌机',
      disuseDetailQuantity: 30,
    },

  ];



  ngOnInit() {
  }

  showConfirm(): void {
    this.modalService.confirm({
      nzTitle: '你确认该报废通过吗?',
      nzContent: '<b style="color: red;">如果确认请点击确认</b>',
      nzOkText: '确认',
      nzOnOk: () => console.log('确认'),
      nzCancelText: '取消',
      nzOnCancel: () => console.log('取消')
    });
  }

  showDeleteConfirm(): void {
    this.modalService.confirm({
      nzTitle: '<i>你确认拒绝该报废通过吗?</i>',
      nzContent: '<b>如果确认请点击确认</b>',
      nzOkType: 'danger',
      nzOnOk: () => console.log('确认'),
      nzCancelText: '取消'
    });
  }




  findAll(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1;
    }
    this.loading = false;     //  暂时使用 需要修改
    // service here
  }


}
