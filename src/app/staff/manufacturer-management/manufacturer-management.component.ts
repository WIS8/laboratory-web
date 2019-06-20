import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-manufacturer-management',
  templateUrl: './manufacturer-management.component.html',
  styles  : []
})
export class ManufacturerManagementComponent implements OnInit {
  manuForm: FormGroup;
  isVisible = false;
    constructor(private _message: NzMessageService) {
      this.manuForm = new FormGroup({
        firmNo: new FormControl('', [Validators.required]),
        firmName: new FormControl('', [Validators.required]),
        firmAddress: new FormControl('', [Validators.required]),
        firmContact: new FormControl('', [Validators.required]),
        firmTelephone: new FormControl('', [Validators.required]),
        firmEmail: new FormControl('', [Validators.email])
      });
  }

  ngOnInit() {
  }

  addManu(): void {
    this._message.create('success', '添加成功');
    }

  getFormControl(name) {
    return this.manuForm.controls[ name ];
  }

}
