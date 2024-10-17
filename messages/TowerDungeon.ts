/**
 * @TJS-type integer
 */
type Int32 = number;
type integer = Int32;

export interface TowerRafflePoolData {
    id: string; // 奖池 id
    sceneAreaId: string; // 场景区域 id
    bonusTotal: string; // 奖池金额
    itemIds: integer[];
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
    itemIds: integer[];
    itemAmounts: integer[];
}

export interface MintUserTowerRewardOutput {
    gameMessageId: string;
    success: boolean;
    reason: string;
}


export interface UpdateTowerRafflePoolEvent {
    pools: TowerRafflePoolData[];
}