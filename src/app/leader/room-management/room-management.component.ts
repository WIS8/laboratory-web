import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';
import {Room} from '../../shared/domain/Room';
import {BehaviorSubject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-room-management',
  templateUrl: './room-management.component.html',
  styles  : []
})
export class RoomManagementComponent implements OnInit {
  roomAddForm: FormGroup;  // 表格
  roomModForm: FormGroup;
  isVisibleAdd = false;    // 添加隐藏
  isVisibleModify = false;    // 修改隐藏
  pageIndex = 1;
  pageSize = 20;
  loading = true;    //  加载状态
  total = 0;    // 当前总数据，在服务器渲染时需要传入
  searchTerms = new BehaviorSubject<string>('');  // 查询

  rooms: Room[] = [];

  roomData = [
    {
      roomNo: '1001',
      roomName: '华东理工大学',
      roomType: '',
      roomState: '',
      roomAddress: '海思路999号',
      roomAddDate: '2018/1/11',
    },
    {
      roomNo: '1002',
      roomName: '华东理工大学',
      roomType: '',
      roomState: '',
      roomAddress: '海思路999号',
      roomAddDate: '2018/2/22',
    },
    {
      roomNo: '1003',
      roomName: '华东理工大学',
      roomType: '',
      roomState: '',
      roomAddress: '海思路999号',
      roomAddDate: '2018/3/30',
    }
  ];

  constructor(private message: NzMessageService) {
    this.roomAddForm = new FormGroup({
      roomNo: new FormControl('', [Validators.required]),
      roomName: new FormControl('', [Validators.required]),
      roomType: new FormControl('', [Validators.required]),
      roomState: new FormControl('', [Validators.required]),
      roomAddress: new FormControl('', [Validators.required]),
      roomAddDate: new FormControl('', [Validators.required]),
    });
    this.roomModForm = new FormGroup({
      roomNo: new FormControl('', [Validators.required]),
      roomName: new FormControl('', [Validators.required]),
      roomType: new FormControl('', [Validators.required]),
      roomState: new FormControl('', [Validators.required]),
      roomAddress: new FormControl('', [Validators.required]),
      roomAddDate: new FormControl('', [Validators.required]),
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

  // getFormControl(name) {
  //   return this.roomAddForm.controls[ name ];
  //   return this.roomModForm.controls[ name ];
  // }

  addRoom(): void {       // 增加库房
    if (this.roomAddForm.valid) {
      const room: Room = {
        roomNo: this.roomAddForm.get('roomNo').value,
        roomName: this.roomAddForm.get('roomName').value,
        roomType: this.roomAddForm.get('roomType').value,
        roomState: this.roomAddForm.get('roomState').value,
        roomAddress: this.roomAddForm.get('roomAddress').value,
        roomAddDate: this.roomAddForm.get('roomAddDate').value,
      };
      // service here
      this.message.create('success', '添加成功');
      this.isVisibleAdd = false;
    } else {
      this.message.create('warning', '填写数据有误');
    }
  }

  modRoom(): void {       // 修改库房
    if (this.roomModForm.valid) {
      // service here
      this.message.create('success', '修改成功');
      this.isVisibleModify = false;
    } else {
      this.message.create('warning', '填写数据有误');
    }
  }

  findAll(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1;
    }
    this.loading = false;     //  暂时使用 需要修改
    // service here
  }

  modRoomSet(room: Room): void {    // 库房修改表单预设
    this.roomModForm.setValue(room);
  }


}
