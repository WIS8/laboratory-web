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
import {RoomTypeEnum, RoomStateEnum} from '../../shared/domain/Enum';
import {RoomService} from '../../shared/service/room.service';

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
  pageSize = 7;
  loading = true;    //  加载状态
  total = 0;    // 当前总数据，在服务器渲染时需要传入
  searchTerms = new BehaviorSubject<string>('');  // 查询
  staffNumber = 100000 ; // TODO: 加入了当前用户编号后删掉这里
  okLoading = true;
  temp: number;
  rooms: Room[] = [];

  roomDatas: Room[] = [];

  constructor(private message: NzMessageService,
              private  roomService: RoomService,
  ) {
    this.roomAddForm = new FormGroup({
      roomName: new FormControl('', [Validators.maxLength(20), Validators.required]),
      roomType: new FormControl(RoomTypeEnum, [Validators.required]),
      roomState: new FormControl(RoomStateEnum, [Validators.required]),
      roomAddress: new FormControl('', [Validators.maxLength(50), Validators.required]),
      // roomAddDate: new FormControl('', [Validators.required]),
    });
    this.roomModForm = new FormGroup({
      roomName: new FormControl('', [Validators.maxLength(20), Validators.required]),
      roomType: new FormControl(RoomTypeEnum, [Validators.required]),
      roomState: new FormControl(RoomStateEnum, [Validators.required]),
      roomAddress: new FormControl('', [Validators.maxLength(50), Validators.required]),
      // roomAddDate: new FormControl('', [Validators.required]),
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

  searchByRoomNo(searchValue: number): void {
    this.pageIndex = 1;
    this.roomDatas = null;
    this.roomService.findByNo(searchValue, this.staffNumber)
      .subscribe(
        (data) => {
          if (!data[`0`]) {
            this.roomDatas = [data];
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
  addRoom(): void {       // 增加库房
    if (this.roomAddForm.valid) {
      this.okLoading = true;
      const room: Room = {
        roomNo: 9999,
        roomName: this.roomAddForm.get('roomName').value,
        roomType: this.roomAddForm.get('roomType').value,
        roomState: this.roomAddForm.get('roomState').value,
        roomAddress: this.roomAddForm.get('roomAddress').value,
        // roomAddDate: this.roomAddForm.get('roomAddDate').value,
      };
      console.log(room);
      this.roomService.saveRoom(room).subscribe(
        u => {
          this.rooms.unshift(u);
          this.isVisibleAdd = false;
          this.message.create('success', '添加成功');
          this.roomAddForm.reset();
          this.findAll();
        }, () => {
          this.okLoading = false;
          this.message.create('error', '添加失败');
        }
      );
    } else {
      this.message.create('warning', '请正确填写全部数据');
    }
  }

  modRoom(): void {       // 修改库房
    if (this.roomModForm.valid) {
      this.okLoading = true;
      const room: Room = {
        roomNo: this.temp,
        roomName: this.roomModForm.get('roomName').value,
        roomType: this.roomModForm.get('roomType').value,
        roomState: this.roomModForm.get('roomState').value,
        roomAddress: this.roomModForm.get('roomAddress').value,
        // roomAddDate: this.roomAddForm.get('roomAddDate').value,
      };
      console.log(room);
      this.roomService.update(room).subscribe(   // 修改库房信息
        u => {
          this.rooms.unshift(u);
          this.isVisibleModify = false;
          this.message.create('success', '修改成功');
          this.roomModForm.reset();
          this.findAll();
        }, () => {
          this.okLoading = false;
          this.message.create('error', '修改失败');
        }
      );
    } else {
      this.message.create('warning', '请正确填写全部数据');
    }
  }

  findAll(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1;
    }
    this.roomService.total(this.staffNumber).subscribe(
      (data) => {
        this.total = data[`status`];
        console.log(this.total);
      }
    );
    this.loading = true;
    this.roomService.findAll(this.pageIndex, this.pageSize, this.staffNumber)
      .subscribe(
        (data) => {
          if (data[`length`] >=  0) {
            console.log(data);
            this.loading = false;
            this.roomDatas = data;
          } else {
            this.message.create('error', '发生错误！');
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

  modRoomSet(room: Room): void {    // 库房修改表单预设
    this.roomModForm.patchValue(room);
  }
}
