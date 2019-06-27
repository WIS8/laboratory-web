
export enum SexEnum {

  MALE = '男',

  FEMALE = '女',

}

export enum StaffDutyEnum {

  ADMIN = '管理员',

  WORKER = '普通员工',

  LEADER = '上级领导',

}

export enum RoomTypeEnum {

  LABORATORY = '实验室',

  REPOSITORY = '存储室',

  UNDIFINED  = '未定义',

}

export enum RoomStateEnum {

  USING = '可用',

  NOUSE = '禁用',

  TOUSE = '暂用',

}

export enum ApplyTypeEnum {

  URGENT = '急需',

  COMMON = '普通',

}

export enum ApplyStateEnum {

  COMMIT = '待审查',

  MODIFY = '需修改',

  FINISH = '已通过',

}

export enum DeviceStateEnum {

  USING = '使用中',

  REPAIR = '维修中',

  NOUSE = '报废中',

  DISUSE = '已报废',

}

export enum DisuseStateEnum {

  COMMIT = '待审核',

  CANNOT = '未通过',

  DISUSE = '已报废',

}

export enum RepairResultEnum {

  FINISH = '修理完成',

  CANNOT = '无法修理',

}
