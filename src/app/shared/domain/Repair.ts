import {RepairResultEnum} from './Enum';

export interface Repair {

  repairNo: string;

  firmNo?: number;

  deviceNo?: string;

  staffNo?: number;

  repairDate?: string;

  repairFinishDate?: string;

  repairPrice?: number;

  repairResult?: RepairResultEnum;

}
