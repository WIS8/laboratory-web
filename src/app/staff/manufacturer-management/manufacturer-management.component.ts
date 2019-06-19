import { Component, OnInit } from '@angular/core';
import {Firm} from '../../shared/domain/Firm';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nz-demo-table-basic',
  template: './manufacturer-management-component.html',
  styles  : []
})
export class ManufacturerManagementComponent implements OnInit {

  firms: Firm[] = [
    {firmNo : 100000, firmName : '华东理工大学', firmAddress : '浙江省奉贤市海湾区海思路999号', firmTelephone : '021-6783429'},
    {firmNo : 100001, firmName : '华南理工大学', firmAddress : '福建省奉贤市海湾区海思路999号', firmTelephone : '011-6033423'},
    {firmNo : 100002, firmName : '华北理工大学', firmAddress : '浙江省奉贤市海湾区海思路999号', firmTelephone : '041-6743425'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
