import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApplyDetail} from '../../../shared/domain/ApplyDetail';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.css']
})
export class ApplicationDetailComponent implements OnInit {
  applyDetailForm: FormGroup;
  isVisible_modify = false;
  pageIndex = 1;
  pageSize = 20;
  loading = true;    //  加载状态
  total = 0;    // 当前总数据，在服务器渲染时需要传入
  modelNoTemp = '';
  addTemp = [
    {
    modelNo: '',
    applyDetailQuantity: 0,
    applyDetailUnit: '',
    }
  ];

  detailApplyData = [
    {
      modelNo: '1001',
      applyDetailQuantity: 10,
      applyDetailUnit: '台',
    },
    {
      modelNo: '1002',
      applyDetailQuantity: 5,
      applyDetailUnit: '架',
    },
    {
      modelNo: '1003',
      applyDetailQuantity: 6,
      applyDetailUnit: '套',
    }
  ];


  constructor(private _message: NzMessageService) {
    this.applyDetailForm = new FormGroup({
      modelNo: new FormControl('', [Validators.required]),
      applyDetailQuantity: new FormControl('', [Validators.required, Validators.maxLength(11),
      Validators.min(1), this.intValidator]),
      applyDetailUnit: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    });
  }

  ngOnInit() {
    this.findAll();
  }

  intValidator = (control: FormControl): { [s: string]: boolean } => {   // 整数判断
    if (!control.value) {
      return { required: true };
    } else if (control.value % 1 !== 0) {
      return { confirm: true, error: true };
    }
    return {};
  };

  addRow(): void {
    this.addTemp = [
      {
        modelNo: '',
        applyDetailQuantity: 0,
        applyDetailUnit: '',
      }
    ];
    this.detailApplyData.push(
      ...this.addTemp
    );
  }

  deleteRow(modelNo: string): void {   //  删除申请表项
                                       // service here
    this.detailApplyData = this.detailApplyData.filter(d => d.modelNo !== modelNo);
  }

  detailApply(modelNo: string): void {       // 修改申请表项
    if (this.applyDetailForm.valid) {
      const temp: ApplyDetail = {
        applyNo: '',
        modelNo: this.applyDetailForm.get('modelNo').value,
        applyDetailQuantity: this.applyDetailForm.get('applyDetailQuantity').value,
        applyDetailUnit: this.applyDetailForm.get('applyDetailUnit').value,
      };
      const index = this.detailApplyData.findIndex(item => item.modelNo === modelNo );
      Object.assign(this.detailApplyData[index], temp);
      this._message.create('success', '修改成功');
      this.isVisible_modify = false;
      this.applyDetailForm.reset();
    } else {
      this._message.create('warning', '填写数据有误');
    }
  }

  modelNoSet(modelNo: string): string {   //  传递modelNo
    return modelNo;
  }

  modApplySet(data: any): void {   // 修改预设
    this.applyDetailForm.patchValue(data);
  }

  findAll(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1;
    }
    this.loading = false;     // 需要修改
    // service here
  }

  submitApply(): void {
    if (true) {    //  需要修改
      // service here
      this._message.create('success', '提交成功');
      this.findAll();
    } else {
      this._message.create('warning', '提交失败');
    }
  }

}
