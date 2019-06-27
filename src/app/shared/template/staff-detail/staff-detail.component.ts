import {
  Component,
  OnInit
} from '@angular/core';
import {Staff} from '../../domain/Staff';
import {
  SexEnum,
  StaffDutyEnum
} from '../../domain/Enum';
import {Router} from '@angular/router';
import {
  FormBuilder,
  FormGroup, Validators
} from '@angular/forms';
import {StaffService} from '../../service/staff.service';

@Component({
  selector: 'app-staff-detail',
  templateUrl: './staff-detail.component.html',
  styleUrls: ['./staff-detail.component.css']
})
export class StaffDetailComponent implements OnInit {

  private staff: Staff;

  private mineInfo: FormGroup;

  constructor(private router: Router,
              private builder: FormBuilder,
              private staffService: StaffService) {
  }

  ngOnInit() {
    this.staff = {
      staffNo: 100000,
      staffName: '郑庆文',
      staffEmail: 'quinceyzheng@126.com',
      staffRegisterTime: '2019-06-17',
      staffSex: SexEnum.FEMALE,
      staffTelephone: '13340185180',
      staffDuty: StaffDutyEnum.ADMIN
    };
    this.mineInfo = this.builder.group({
      staffEmail: [this.staff.staffEmail, [Validators.required]],
      staffTelephone: [this.staff.staffTelephone, [Validators.required]]
    });
  }

  public exit(): void {
    this.router.navigate(['/visitor/login']);
  }

  protected _submit(): void {
    this.staffService.findAll(1, 5).subscribe(
      (data1) => {
        console.log(data1);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
