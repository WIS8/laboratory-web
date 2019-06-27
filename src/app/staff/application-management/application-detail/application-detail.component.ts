import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApplyDetail} from '../../../shared/domain/ApplyDetail';
import {NzMessageService} from 'ng-zorro-antd';
import {ApplyDetailService} from '../../../shared/service/apply-detail.service';
import {ModelService} from '../../../shared/service/model.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.css']
})
export class ApplicationDetailComponent implements OnInit {
  applyDetailForm: FormGroup;
  detailAddForm: FormGroup;
  isVisible_modify = false;
  isVisible_add = false;    // 添加隐藏
  pageIndex = 1;
  pageSize = 20;
  loading = true;    //  加载状态
  total = 0;    // 当前总数据，在服务器渲染时需要传入
  modelList: string[] = [];   //  选择框modelNo
  modelNoTemp = '';
  applyNoTemp = '';  //  路由传递applyNo
  applyDetails: ApplyDetail[] = [];

  constructor(private _message: NzMessageService,
              private  applydetailService: ApplyDetailService,
              private  modelService: ModelService,
              private routerInfo: ActivatedRoute) {
    this.applyDetailForm = new FormGroup({
      applyDetailQuantity: new FormControl('', [Validators.required, Validators.maxLength(11),
      Validators.min(1), this.intValidator]),
      applyDetailUnit: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    });
    this.detailAddForm = new FormGroup({
      modelNo: new FormControl('', [Validators.required]),
      applyDetailQuantity: new FormControl('', [Validators.required, Validators.maxLength(11),
        Validators.min(1), this.intValidator]),
      applyDetailUnit: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    });
  }

  ngOnInit() {
    this.applyNoTemp = this.routerInfo.snapshot.queryParams[`id`];
    this.findAll();
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
        this.modelList = [...this.modelList, ...data];
      }
    );
  }

  /*addRow(): void {
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
  }*/

  addRow(): void {
    if (this.detailAddForm.valid) {
      const applyDetail: ApplyDetail = {
        applyNo: this.applyNoTemp,
        modelNo: this.detailAddForm.get('modelNo').value,
        applyDetailQuantity: this.detailAddForm.get('applyDetailQuantity').value,
        applyDetailUnit: this.detailAddForm.get('applyDetailUnit').value,
      };
      console.log(applyDetail);
      this.applydetailService.save(applyDetail).subscribe(
        () => {
          this.isVisible_add = false;
          this._message.create('success', '添加成功');
          this.detailAddForm.reset();
          this.findAll();
        },
        () => {
          this._message.create('error', '添加失败');
        }
      );
    } else {
      this._message.create('warning', '填写数据有误');
    }
  }

  deleteRow(modelNo: string): void {   //  删除申请表项
    this.applydetailService.delete(this.applyNoTemp, modelNo).subscribe();
    this.applyDetails = this.applyDetails.filter(d => d.modelNo !== modelNo);
  }

  detailApply(): void {       // 修改申请表项
    if (this.applyDetailForm.valid) {
      const temp: ApplyDetail = {
        applyNo: this.applyNoTemp,
        modelNo: this.modelNoTemp,
        applyDetailQuantity: this.applyDetailForm.get('applyDetailQuantity').value,
        applyDetailUnit: this.applyDetailForm.get('applyDetailUnit').value,
      };
      console.log(temp);
      this.applydetailService.update(temp).subscribe(
        () => {
          this.isVisible_modify = false;
          this._message.create('success', '修改成功');
          this.applyDetailForm.reset();
          this.findAll();
        },
        (error) => {
          this._message.create('error', '修改失败');
          console.log(error);
        }
      );
      /*const index = this.applyDetails.findIndex(item => item.modelNo === modelNo );
      Object.assign(this.applyDetails[index], temp);*/
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
    this.loading = true;
    console.log(this.applyNoTemp);
    this.applydetailService.total(this.applyNoTemp).subscribe(
      (data) => {
        this.total = data[`status`];
      }
    );
    this.applydetailService.findByApplyNo(this.pageIndex, this.pageSize, this.applyNoTemp).subscribe(
      (data) => {
          if (data[`length`] >=  0) {
            this.loading = false;
            this.applyDetails = data;
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

  /*submitApply(): void {
    if (true) {    //  需要修改
      // service here
      this._message.create('success', '提交成功');
      this.findAll();
    } else {
      this._message.create('warning', '提交失败');
    }
  }*/

}
