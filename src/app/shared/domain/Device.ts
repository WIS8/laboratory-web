import {DeviceStateEnum} from './Enum';

export interface Device {

  deviceNo: string;

  staffNo?: number;

  firmNo?: number;

  modelNo?: string;

  roomNo?: number;

  deviceAddDate?: string;

  deviceState?: DeviceStateEnum;

}
