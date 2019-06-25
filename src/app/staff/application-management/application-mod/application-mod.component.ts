import { Component, OnInit } from '@angular/core';
import {ApplyDetail} from '../../../shared/domain/ApplyDetail';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-application-mod',
  templateUrl: './application-mod.component.html',
  styleUrls: ['./application-mod.component.css']
})
export class ApplicationModComponent implements OnInit {
  applyDetailForm: FormGroup;
  applyForm: FormGroup;
  isVisible_modify = false;
  isVisible_confirm = false;
  newApplyData: any[] = [];
  modelNoTemp = '';
  addRow(): void {
    this.newApplyData = [
      ...this.newApplyData,
      {
        modelNo: '',
        applyDetailQuantity: 0,
        applyDetailUnit: '',
      }
    ];
  }

  deleteRow(modelNo: string): void {
    this.newApplyData = this.newApplyData.filter(d => d.modelNo !== modelNo);
  }

  constructor(private _message: NzMessageService) {
    this.applyDetailForm = new FormGroup({
      modelNo: new FormControl('', [Validators.required]),
      applyDetailQuantity: new FormControl('', [Validators.required, Validators.maxLength(11),
        Validators.min(1), this.intValidator]),
      applyDetailUnit: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    });
    this.applyForm = new FormGroup({
      applyType: new FormControl('', [Validators.required]),
      applyReason: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    });
  }

  ngOnInit() {
    this.addRow();
  }

  intValidator = (control: FormControl): { [s: string]: boolean } => {   // 整数判断
    if (!control.value) {
      return { required: true };
    } else if (control.value % 1 !== 0) {
      return { confirm: true, error: true };
    }
    return {};
  };

  detailApply(modelNo: string): void {       // 修改申请表项
    if (this.applyDetailForm.valid) {
      const temp: ApplyDetail = {
        applyNo: '',
        modelNo: this.applyDetailForm.get('modelNo').value,
        applyDetailQuantity: this.applyDetailForm.get('applyDetailQuantity').value,
        applyDetailUnit: this.applyDetailForm.get('applyDetailUnit').value,
      };
      const index = this.newApplyData.findIndex(item => item.modelNo === modelNo );
      Object.assign(this.newApplyData[index], temp);
      this._message.create('success', '修改成功');
      this.isVisible_modify = false;
      this.applyDetailForm.reset();
    } else {
      this._message.create('warning', '填写数据有误');
    }
  }

  submitApply(): void {
    if (this.applyForm.valid) {
      // service here
      this._message.create('success', '提交成功');
      this.isVisible_confirm = false;
    } else {
      this._message.create('warning', '填写数据有误');
    }
  }

  modelNoSet(modelNo: string): string {   //  传递modelNo
    return modelNo;
  }

}
