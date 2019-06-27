import { Component, OnInit } from '@angular/core';
import {ApplyDetail} from '../../../shared/domain/ApplyDetail';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';
import {ApplyService} from '../../../shared/service/apply.service';
import {ApplyDetailService} from '../../../shared/service/apply-detail.service';
import {Apply} from '../../../shared/domain/Apply';
import {ModelService} from '../../../shared/service/model.service';
import {Router} from '@angular/router';


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
  newApplyData: ApplyDetail[] = [];
  modelNoTemp = '';
  modelList: string[] = [];   //  选择框modelNo
  i = 0;
  applyNoTemp = '';   //  返回申请表号

  addRow(): void {
    this.newApplyData = [
      ...this.newApplyData,
      {
        applyNo: '',
        modelNo: '',
        applyDetailQuantity: 0,
        applyDetailUnit: '',
      }
    ];
  }

  deleteRow(modelNo: string): void {
    this.newApplyData = this.newApplyData.filter(d => d.modelNo !== modelNo);
  }

  constructor(private _message: NzMessageService,
              private applyService: ApplyService,
              private  applydetailService: ApplyDetailService,
              private  modelService: ModelService,
              private  router: Router) {
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
    this.loadModelNo();
  }

  intValidator = (control: FormControl): { [s: string]: boolean } => {   // 整数判断
    if (!control.value) {
      return { required: true };
    } else if (control.value % 1 !== 0) {
      return { confirm: true, error: true };
    }
    return {};
  }

  loadModelNo(): void {    //  加载下拉框中ModelNo
    this.modelService.findAllNo().subscribe(
      (data) => {
        console.log(data);
        this.modelList = [...this.modelList, ...data];
      }
    );
  }

  detailApply(modelNo: string): void {       // 修改申请表项
    if (this.applyDetailForm.valid) {
      const temp: ApplyDetail = {
        applyNo: '',
        modelNo: this.applyDetailForm.get('modelNo').value,
        applyDetailQuantity: this.applyDetailForm.get('applyDetailQuantity').value,
        applyDetailUnit: this.applyDetailForm.get('applyDetailUnit').value,
      };
      const index = this.newApplyData.findIndex(item => item.modelNo === modelNo );
      //console.log(index);
      Object.assign(this.newApplyData[index], temp);
      this._message.create('success', '修改成功');
      this.isVisible_modify = false;
      this.applyDetailForm.reset();
    } else {
      this._message.create('warning', '填写数据有误');
    }
  }

  submitApply(): void {    //    提交申请表
    if (this.applyForm.valid) {
      const apply: Apply = {
        applyNo: '',
        applyStaffNo: 100004,    //  staffNo 需要修改
        applyType: this.applyForm.get('applyType').value,
        applyReason: this.applyForm.get('applyReason').value
      };
      this.applyService.save(apply).subscribe(
        (data) => {
          console.log(data);
          this.isVisible_confirm = false;
          this._message.create('success', '提交成功');
          this.applyForm.reset();
          this.applyNoTemp = data[`message`];
          console.log(this.applyNoTemp);
        },
        () => {
          this._message.create('error', '添加失败');
        }
      );
    } else {
      this._message.create('warning', '填写数据有误');
    }
  }

  submitApplyDetail(): void {   //    提交申请表项
    let check = true;
    if (this.applyNoTemp !== '') {
      for (this.i; this.i < this.newApplyData.length; this.i++) {
        if (this.newApplyData[this.i].modelNo !== '') {
          this.newApplyData[this.i].applyNo = this.applyNoTemp;
          this.applydetailService.save(this.newApplyData[this.i]).subscribe(
            () => {
              console.log(this.newApplyData[this.i]);
            },
            () => {
              this._message.create('error', '提交失败');
            }
          );
        } else {
          check = false;
          this._message.create('warning', '请填写完整数据');
          break;
        }
      }
      if (check) {
        this._message.create('success', '提交成功');
        this.router.navigate(['/ApplicationManage']);
      }
    } else {
      this._message.create('error', '提交失败');
    }
    this.i = 0;
  }

  modelNoSet(modelNo: string): string {   //  传递modelNo
    return modelNo;
  }

}
