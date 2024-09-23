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

export enum EnhanceEquipmentTotemRaffleStatus {
    Open = "open",
    Pending = "pending", // 初始化
    Close = "close",
}

export enum EnhanceEquipmentTotemRaffleLogType {
    Create = "create",
    Withdraw = "withdraw",
    Contribute = "contribute",
    Prize = "prize",
}

export enum EnhanceEquipmentRaffleStatus {
    Success = "success",
    Pending = "pending"
}


// 执行强化
export interface EnhanceEquipmentInput {
    userId: string;
    totemOwner: string;
    totemNftId: string;
    avatarNftId: string;
    fromAvatarNftId: string;
    useProtectiveStone: boolean;
    sceneAppId: string;
}

export interface EnhanceEquipmentOutput {
    success: boolean;
    failedReason: string;
    attributeList: AttributeChangeData[];
    enhanceLevel: integer;
    originLevel: integer;
}

// dapr 强化装备事件
export interface EnhanceEquipmentEvent {
    data: EnhanceEquipmentLog;
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
    beginTime: integer;
    finishTime: integer;

    totem: WorldTotemData;
    totemOwnerExpense: string; // 图腾主人拿走的手续费(price*0.7)（ethWei）
    totemPoolAmount: string;   // 进入奖金池的金额(price*0.3)（ethWei）

    raffleTxHash: string; // 抽奖的txHash

    userId: string;
    userName: string;
    enhanceEquipmentQuality: string; // 强化的装备品质
    enhanceEquipmentNFTId: string; // 强化的装备
    enhanceEquipmentItemId: integer;// 强化的装备cid
    fromAvatarNftId: string;//继承的装备nftId
    fromAvatarItemId: integer;//继承的装备cid
    enhanceLevel: integer;
    originLevel: integer;
    price: string; // 强化单价(ethWei)

    useProtectiveStone: boolean;
    awardAmount: string; // 中奖金额（ethWei）
    awardStatus: string; // 中奖状态 pending || success 
    // 装备的属性变动
    AttributeList: AttributeChangeData[];
}

// 强化日志队列
export interface EnhanceEquipmentLogInput {
    userId: string;
    totemNftId: string;
    index: integer;
    num: integer;
    filterExtract: boolean;
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
    priceRatio: integer;   // 强化单价系数(千分比)
    sceneAppId: string;
    successProbability: number;
    quality: string;
}


// 查询游戏中世界图腾数据(web3->main)
export interface GetWorldTotemDataInput {
    totemOwner: string;
    totemNftId: string;
}
export interface GetWorldTotemDataOutput {
    exist: boolean;
    totem: WorldTotemData;
}

// 世界图腾奖金池数据
export interface WorldTotemPool {
    totemOwner: string;
    totemNftId: string;
    total: string;          //奖金池总金额（ethWei）
    principal: string;      //本金（ethWei）
    enhanceIncome: string;  //强化收益
}

// dapr invoke get 某个图腾  奖金池数据 & 强化收益统计(cli->web3)
export interface MultiGetWorldTotemPoolInput {
    /**
     * userId[] 和 totemNftId[] 下标一一匹配
    */
    totemOwnerIds: string[];
    totemNftIds: string[]; 
}
export interface MultiGetWorldTotemPoolOutput {
    success: boolean;
    failedReason: string;
    poolList: WorldTotemPool[];
}

// dapr 更新世界图腾奖金池和强化收益事件
export interface WorldTotemPoolUpdateEvent {
    pool: WorldTotemPool;
}


// dapr invoke 某个图腾 存放本金(cli->web3)
export interface WorldTotemPoolDepositInput {
    totemOwnerId: string;
    totemNftId: string;
    depositAmount: string; //存放本金（ethWei）
}
export interface WorldTotemPoolDepositOutput {
    success: boolean;
    failedReason: string;
    poolData: WorldTotemPool;
}

// dapr invoke 某个图腾 赎回本金(cli->web3)
export interface WorldTotemPoolRedemptionInput {
    totemOwnerId: string;
    totemNftId: string;
    redemptionAll: boolean; // 赎回全部
    redemptionAmount: string;  // 赎回多少本金（ethWei）
}
export interface WorldTotemPoolRedemptionOutput {
    success: boolean;
    failedReason: string;
}

//  玩家回收世界图腾
export interface RecycleWorldTotemEvent {
    totemOwnerId: string;
    totemNftId: string;
}
