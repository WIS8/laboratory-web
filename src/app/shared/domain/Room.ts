import {RoomStateEnum, RoomTypeEnum} from './Enum';

export interface Room {

  roomNo: number;

  roomName?: string;

  roomType?: RoomTypeEnum;

  roomState?: RoomStateEnum;

  roomAddress?: string;

  roomAddDate?: string;

}
