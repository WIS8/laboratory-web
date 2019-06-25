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
  pageIndex = 1;
  pageSize = 20;
  loading = true;    //  加载状态
  total = 0;    // 当前总数据，在服务器渲染时需要传入
  searchTerms = new BehaviorSubject<string>('');  // 查询

  models: Model[] = [];

  modData = [
    {
      modelNo: '1001',
      modelName: '型号1',
      modelType: '商用型',
      modelNorm: '小',
      modelPrice: '560',
    },
    {
      modelNo: '1002',
      modelName: '型号2',
      modelType: '商用型',
      modelNorm: '中',
      modelPrice: '8888',
    },
    {
      modelNo: '1003',
      modelName: '型号3',
      modelType: '实验型',
      modelNorm: '大',
      modelPrice: '56108',
    }
  ];

  constructor(private _message: NzMessageService) {
    this.modAddForm = new FormGroup({
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
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(() => {
        this.findAll();
      }
    );
  }

  addMod(): void {       // 增加型号
    if (this.modAddForm.valid) {
      const model: Model = {
        modelNo: '',
        modelName: this.modAddForm.get('modelName').value,
        modelType: this.modAddForm.get('modelType').value,
        modelNorm: this.modAddForm.get('modelNorm').value,
        modelPrice: this.modAddForm.get('modelPrice').value,
      };
      // service here
      this._message.create('success', '添加成功');
      this.isVisible_add = false;
      this.modAddForm.reset();
    } else {
      this._message.create('warning', '填写数据有误');
    }
  }

  modMod(): void {       // 修改型号
    if (this.modModForm.valid) {
      // service here
      this._message.create('success', '修改成功');
      this.isVisible_modify = false;
      this.modModForm.reset();
    } else {
      this._message.create('warning', '填写数据有误');
    }
  }

  findAll(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1;
    }
    this.loading = false;     //  暂时使用 需要修改
    // service here
  }

  modModSet(data: any): void {
    this.modModForm.patchValue(data);
  }


}
