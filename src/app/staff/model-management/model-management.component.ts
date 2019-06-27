import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';
import {Model} from '../../shared/domain/Model';
import {BehaviorSubject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {ModelService} from "../../shared/service/model.service";
import {FirmService} from "../../shared/service/firm.service";


@Component({
  selector: 'app-model-management',
  templateUrl: './model-management.component.html',
  styleUrls: ['./model-management.component.css']
})
export class ModelManagementComponent implements OnInit {
  modAddForm: FormGroup;  // 表格
  modModForm: FormGroup;
  isVisible_add = false;    // 添加隐藏
  isVisible_modify = false;    // 修改隐藏
  modelNoTemp = '';
  pageIndex = 1;
  pageSize = 20;
  loading = true;    //  加载状态
  total = 0;    // 当前总数据，在服务器渲染时需要传入
  searchValue = '';

  models: Model[] = [];

  constructor(private _message: NzMessageService,
              private modelService: ModelService) {
    this.modAddForm = new FormGroup({
      modelNo: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      modelName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      modelType: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      modelNorm: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      modelPrice: new FormControl('', [Validators.required, Validators.max(99999999),
        Validators.min(0)])
    });
    this.modModForm = new FormGroup({
      modelType: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      modelNorm: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      modelPrice: new FormControl('', [Validators.required, Validators.max(99999999),
        Validators.min(0)])
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
    this.models = null;
    this.modelService.findByNo(this.searchValue)
      .subscribe(
        (data) => {
          if (!data[`0`]) {
            this.models = [data];
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

  addMod(): void {       // 增加型号
    if (this.modAddForm.valid) {
      const model: Model = {
        modelNo: this.modAddForm.get('modelNo').value,
        modelName: this.modAddForm.get('modelName').value,
        modelType: this.modAddForm.get('modelType').value,
        modelNorm: this.modAddForm.get('modelNorm').value,
        modelPrice: this.modAddForm.get('modelPrice').value,
      };
      this.modelService.save(model).subscribe(
        () => {
          console.log(model);
          this.isVisible_add = false;
          this._message.create('success', '添加成功');
          this.modAddForm.reset();
          this.findAll();
        }, () => {
          this._message.create('error', '添加失败');
        }
      );
    } else {
      this._message.create('warning', '填写数据有误');
    }
  }

  modMod(): void {       // 修改型号
    if (this.modModForm.valid) {
      const model: Model = {
        modelNo: this.modelNoTemp,
        modelType: this.modModForm.get('modelType').value,
        modelNorm: this.modModForm.get('modelNorm').value,
        modelPrice: this.modModForm.get('modelPrice').value,
      };
      this.modelService.update(model).subscribe(
        () => {
          console.log(model);
          this.isVisible_modify = false;
          this._message.create('success', '修改成功');
          this.modModForm.reset();
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
    this.loading = true;     //  暂时使用 需要修改
    this.modelService.findAll(this.pageIndex, this.pageSize)
      .subscribe(
        (data) => {
          if (data[`length`] >=  0) {
            this.loading = false;
            this.models = data;
            this.total = data[`length`];
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

  modModSet(data: any): void {
    this.modModForm.patchValue(data);
  }


}
