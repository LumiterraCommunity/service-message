/**
 * @TJS-type integer
 */
type Int32 = number;
type integer = Int32;


export enum TowerRafflePoolStatus {
    Open = "open",
    Close = "close",
    Pending = "pending", 
}

export enum TowerRafflePoolRecordType {
    Prize = "prize",
    Charge = "charge",
    Reset = "reset",
    Create = "create",
}

export enum TowerRafflePoolRecordStatus {
    Success = "success",
    Pending = "pending",
    Fail = "fail",
}

// 爬塔副本抽奖
export interface TowerRafflePoolData {
    id: string; // 奖池 id
    sceneAreaId: string; // 场景区域 id
    bonusTotal: string; // 奖池金额
    /** 
     * @items.type integer
     * @items.minimum 0
     */
    itemIds: integer[];
    /**
     * index和itemIds一一对应
     * 所有数量
     * @items.type integer
     * @items.minimum 0
     */
    itemAmounts: integer[];
    expireTime: integer; //奖池过期时间
}


// 获取奖池数据
export interface GetTowerRafflePoolsInput {
    timestamp: integer; // 秒级别时间戳
}

export interface GetTowerRafflePoolsOutput {
    pools: TowerRafflePoolData[];
}


// 发放奖励
export interface MintUserTowerRewardInput {
    poolId: string;
    userId: string;
    bonus: string;
    /** 
     * @items.type integer
     * @items.minimum 0
     */
    itemIds: integer[];
    /**
     * index和itemIds一一对应
     * 所有数量
     * @items.type integer
     * @items.minimum 0
     */
    itemAmounts: integer[];

    remark: string;
}

export interface MintUserTowerRewardOutput {
    gameMessageId: string;
    success: boolean;
    reason: string;
}


export interface UpdateTowerRafflePoolEvent {
    pools: TowerRafflePoolData[];
}