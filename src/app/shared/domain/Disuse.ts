import {DisuseStateEnum} from './Enum';

export interface Disuse {

  disuseNo: string;

  deviceNo?: string;

  disuseStaffNo?: number;

  checkStaffNo?: number;

  disuseDate?: string;

  disuseState?: DisuseStateEnum;

  disuseUpdateDate?: string;

  disuseWay?: string;

}
