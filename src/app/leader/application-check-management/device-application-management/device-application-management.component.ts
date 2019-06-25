import { Component, OnInit } from '@angular/core';
import { NzModalService , NzDescriptionsModule} from 'ng-zorro-antd';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {Apply} from '../../../shared/domain/Apply';
import {ApplyDetail} from '../../../shared/domain/ApplyDetail';
import {ApplyStateEnum, ApplyTypeEnum} from '../../../shared/domain/Enum';
import {BehaviorSubject} from 'rxjs';

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

  total = 0;    // 当前总数据，在服务器渲染时需要传入
  searchTerms = new BehaviorSubject<string>('');  // 查询
  applys: Apply[] = [];
  applydetails: ApplyDetail[] = [];

  constructor(private modalService: NzModalService,
              private message: NzMessageService) {
    this.applyUpdateInfoForm = new FormGroup({
      applyUpdateInfo: new FormControl('', [Validators.maxLength(255)]),
    });
  }
  applyDetailData = [
    [
      {
      modelNo: 9901,
      applyDetailQuantity: 100,
      },
      {
      modelNo: 9902,
      applyDetailQuantity: 200,
      },
    ],
    [
      {
        modelNo: 9903,
        applyDetailQuantity: 300,
      },
      {
        modelNo: 9904,
        applyDetailQuantity: 1004,
      },
    ],
    [
      {
        modelNo: 9901,
        applyDetailQuantity: 100,
      },
      {
        modelNo: 9902,
        applyDetailQuantity: 200,
      },
    ],
    [
      {
        modelNo: 9903,
        applyDetailQuantity: 300,
      },
      {
        modelNo: 9904,
        applyDetailQuantity: 1004,
      },
    ],
    [
      {
        modelNo: 9903,
        applyDetailQuantity: 300,
      },
      {
        modelNo: 9904,
        applyDetailQuantity: 1004,
      },
    ]
  ];
  applyData = [
    {
      applyNo: '1001',
      applyType: ApplyTypeEnum.URGENT,
      applyDetail: {
        modelNo: 9901,
        applyDetailQuantity: 100,
      } ,
      applyReason: '要用',
      applyDate: '2018-1-1',
      applyState: ApplyStateEnum.COMMIT,
      applyUpdateDate: '2019-1-1',
      applyUpdateInfo: '好',
    },
    {
      applyNo: '1002',
      applyType: ApplyTypeEnum.URGENT,
      applyDetail: this.applyDetailData[2],
      applyReason: '我要用',
      applyDate: '2018-1-12',
      applyState: ApplyStateEnum.COMMIT,
      applyUpdateDate: '2019-1-1',
      applyUpdateInfo: '好',
    },
    {
      applyNo: '1003',
      applyType: ApplyTypeEnum.URGENT,
      applyDetail: this.applyDetailData[3],
      applyReason: '它要用',
      applyDate: '2018-1-29',
      applyState: ApplyStateEnum.COMMIT,
      applyUpdateDate: '2019-1-1',
      applyUpdateInfo: '好',
    },
    {
      applyNo: '1004',
      applyType: ApplyTypeEnum.URGENT,
      applyDetail: this.applyDetailData[4],
      applyReason: '要用',
      applyDate: '9102-1-14',
      applyState: ApplyStateEnum.COMMIT,
      applyUpdateDate: '2019-1-4',
      applyUpdateInfo: '好',
    },
    {
      applyNo: '1005',
      applyType: ApplyTypeEnum.URGENT,
      applyDetail: this.applyDetailData[5],
      applyReason: '我要用',
      applyDate: '2018-1-15',
      applyState: ApplyStateEnum.COMMIT,
      applyUpdateDate: '2019-1-5',
      applyUpdateInfo: '好',
    },
    {
      applyNo: '1006',
      applyType: ApplyTypeEnum.URGENT,
      applyDetail: this.applyDetailData[6],
      applyReason: '它要用',
      applyDate: '2018-1-16',
      applyState: ApplyStateEnum.COMMIT,
      applyUpdateDate: '2019-1-6',
      applyUpdateInfo: '好',
    },
    {
      applyNo: '1007',
      applyType: ApplyTypeEnum.URGENT,
      applyDetail: this.applyDetailData[7],
      applyReason: '要用',
      applyDate: '2018-1-1',
      applyState: ApplyStateEnum.COMMIT,
      applyUpdateDate: '2019-1-7',
      applyUpdateInfo: '好',
    },
    {
      applyNo: '1008',
      applyType: ApplyTypeEnum.URGENT,
      applyDetail: this.applyDetailData[8],
      applyReason: '我要用',
      applyDate: '2018-1-18',
      applyState: ApplyStateEnum.COMMIT,
      applyUpdateDate: '2019-1-8',
      applyUpdateInfo: '好',
    },
    {
      applyNo: '1009',
      applyType: ApplyTypeEnum.URGENT,
      applyDetail: this.applyDetailData[9],
      applyReason: '它要用',
      applyDate: '2018-1-9',
      applyState: ApplyStateEnum.COMMIT,
      applyUpdateDate: '2019-1-9',
      applyUpdateInfo: '好',
    },
  ];


  size = 'default';
  deviceDetailData = [
    {
      modelNo: '1111',
      modelName: '实验室专用挖掘机',
      applyDetailQuantity: 10,
    },
    {
      modelNo: '2222',
      modelName: '实验室专用吊车',
      applyDetailQuantity: 20,
    },
    {
      modelNo: '3333',
      modelName: '实验室专用搅拌机',
      applyDetailQuantity: 30,
    },
    {
      modelNo: '4444',
      modelName: '实验室专用搅拌机',
      applyDetailQuantity: 30,
    },
    {
      modelNo: '4444',
      modelName: '实验室专用搅拌机',
      applyDetailQuantity: 30,
    }, {
      modelNo: '4444',
      modelName: '实验室专用搅拌机',
      applyDetailQuantity: 30,
    },
    {
      modelNo: '4444',
      modelName: '实验室专用搅拌机',
      applyDetailQuantity: 30,
    },
    {
      modelNo: '4444',
      modelName: '实验室专用搅拌机',
      applyDetailQuantity: 30,
    },
    {
      modelNo: '4444',
      modelName: '实验室专用搅拌机',
      applyDetailQuantity: 30,
    },
    {
      modelNo: '4444',
      modelName: '实验室专用搅拌机',
      applyDetailQuantity: 30,
    },

  ];

  panels = [
    {
      active: true,
      disabled: false,
      name: '设备申请 1',
    },
    {
      active: false,
      disabled: true,
      name: '设备申请 2'
    },
    {
      active: false,
      disabled: false,
      name: '设备申请 3'
    },
    {
      active: false,
      disabled: false,
      name: '设备申请 4'
    }
  ];

  openMap: { [name: string]: boolean } = {
    sub1: true,
    sub2: false,
    sub3: false
  };

  ngOnInit() {
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
      nzOnOk: () => console.log('确认'),
      nzCancelText: '取消'
    });
  }
  addUpdateInfo(): void {       // 增加审核说明
    if (this.applyUpdateInfoForm.valid) {
      const apply: Apply = {
        applyNo: this.applyUpdateInfoForm.get('applyUpdateInfo').value, // service TODO
        applyUpdateInfo: this.applyUpdateInfoForm.get('applyUpdateInfo').value,
      };
      // service here
      this.message.create('success', '添加成功');
      this.isVisible = false;
    } else {
      this.message.create('warning', '填写数据有误');
    }
  }

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
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

    this.applyUpdateInfoForm.patchValue(data);

  }

}
