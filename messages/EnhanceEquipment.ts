/**
 * @TJS-type integer
 */
type Int32 = number;
type integer = Int32;

export enum EnhanceEquipmentStatus {
    Pending = "pending",
    Success = "success",
    Failed = "failed",
    Extracted = "extracted",
}

export enum EnhanceEquipmentDeductionStatus {
    Pending = "pending",
    Success = "success",
    Failed = "failed",
}


// 执行强化
export interface EnhanceEquipmentInput {
    userId: string;
    totemId: string;
    totemNftId: string;
    avatarNftId: string;
    fromAvatarNftId: string;
    useProtectiveStone: boolean;
    sceneAppId: string;
}

export interface EnhanceEquipmentOutput {
    success: boolean;
    failedReason: string;
}


// 领取强化完成装备
export interface ExtractEquipmentInput {
    userId: string;
    actionId: string;
}
export interface ExtractEquipmentOutput {
    success: boolean;
    failedReason: string;
    actionId: string;
}


// 强化提升-属性值变动
export interface AttributeChangeData {
    type: string;
    before: integer;
    after: integer;
}

export interface EnhanceEquipmentLog {
    actionId: string;
    status: string;
    finishTime: integer;

    totem: WorldTotemData;
    userId: string;
    userName: string;
    enhanceEquipmentNFTId: string; // 强化的装备
    enhanceEquipmentItemId: integer;// 强化的装备cid
    fromAvatarNftId: string;//继承的装备nftId
    fromAvatarItemId: integer;//继承的装备cid
    enhanceLevel: integer;
    originLevel: integer;
    useProtectiveStone: boolean;
    awardAmount: string; // 中奖金额（ethWei）
    // 装备的属性变动
    AttributeList: AttributeChangeData[];
}

// 强化日志队列
export interface EnhanceEquipmentLogInput {
    userId: string;
    totemNftId: string;
    index: integer;
    num: integer;
}

export interface EnhanceEquipmentLogOutput {
    logs: EnhanceEquipmentLog[];
    logsCount: integer;
}


export interface WorldTotemData {
    owner: string;
    ownerName: string;
    nftId: string;
    itemId: integer;
    energy: integer; // 当前能量 >0 可使用
    price: string;   // 强化单价ethWei
    sceneAppId: string;
    successProbability: number;
}


// 查询游戏中世界图腾数据
export interface GetWorldTotemDataInput {
    totemNftId: string;
}
export interface GetWorldTotemDataOutput {
    exist: boolean;
    totem: WorldTotemData;
}