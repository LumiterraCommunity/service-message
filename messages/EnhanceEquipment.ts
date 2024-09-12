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


// 强化提升-属性值变动
export interface EnhanceEquipmentItem {
    itemId: string;
    name: string;
    origin: number;
    value: number;
}


// 执行强化
export interface EnhanceEquipment2QueueInput {
    userId: string;
    totemId: string;
    totemNftId: string;
    avatarNftId: string;
    fromAvatarNftId: string;
    sceneAppId: string;
    useProtectiveStone: boolean;
}

export interface EnhanceEquipment2QueueOutput {
    success: boolean;
    failedReason: string;
}


// 领取装备
export interface ExtractEquipmentInput {
    userId: string;
    avatarNftId: string;
    enhanceEquipmentId: string;
}


export interface ExtractEquipmentOutput {
    success: boolean;
    failedReason: string;
}



// 强化日志队列
export interface EnhanceEquipmentPendingLogInput {
    userId: string;
    index: integer;
    limit: integer;
}

export interface EnhanceEquipmentLog {
    enhanceEquipmentNFTId: string;
    actionId: string;
    status: string;
    finishTime: number;
    avatarNftId: string;
    totemNftId: string;
    totemId: string;
    enhanceLevel: integer;
    originLevel: integer;
    useProtectiveStone: boolean;
    successProbability: number;
    // 装备的属性变动
    itemsDiff: EnhanceEquipmentItem[];
}

export interface EnhanceEquipmentPendingLogOutput {
    logs: EnhanceEquipmentLog[];
    total: integer;
    index: integer;
}

