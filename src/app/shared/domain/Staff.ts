import {SexEnum, StaffDutyEnum} from './Enum';

export interface Staff {

  staffNo: number;

  staffName?: string;

  staffSex?: SexEnum;

  staffEmail?: string;

  staffPassword?: string;

  staffTelephone?: string;

  staffDuty?: StaffDutyEnum;

  staffRegisterTime?: string;

}
