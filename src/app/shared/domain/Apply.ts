import {ApplyStateEnum, ApplyTypeEnum} from "./Enum";

export interface Apply {

  applyNo: string;

  applyStaffNo?: number;

  checkStaffNo?: number;

  applyDate?: string;

  applyReason?: string;

  applyType?: ApplyTypeEnum;

  applyState?: ApplyStateEnum;

  applyUpdateDate?: string;

  applyUpdateInfo?: string;

}
