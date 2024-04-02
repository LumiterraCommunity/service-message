/**
 * @TJS-type integer
 */
type Int32 = number;
type integer = Int32;

export interface DungeonPVEPStart {
    appId: string;

    dungeonId: integer;

    userIds: string[];
}

export interface DungeonStartPVEPCallback {
    appId: string;

    dungeonId: integer;

    challengeBonus: string;

    success: boolean;

    failedUserIds: string[];
}

export interface DistributeDungeonBonus {
    appId: string;
    // 结算id
    bonusId: string;
    userId: string;
    // 领取金额
    amount: string;
}

export interface DungeonInvestData {
    // 总投资
    totalInvest: string;

    // 当前剩余投资
    curInvest: string;

    // 单次副本开启最大奖励金额
    maxChallenageBonus: string;

    // 副本id
    dungeonId: integer;

    // LP情况
    totalBaseLP: string;
    totalRewardLP: string;

    // 各个图腾的投资数量比例
    totemARadio: integer;
    totemBRadio: integer;
    totemCRadio: integer;
    totemDRadio: integer;
    totemERadio: integer;

    // 各个图腾投资奖励系数
    totemARewardBoostPrecent: integer;
    totemBRewardBoostPrecent: integer;
    totemCRewardBoostPrecent: integer;
    totemDRewardBoostPrecent: integer;
    totemERewardBoostPrecent: integer;
}

export interface GetAllDungeonInvestDataInput {

}

export interface GetAllDungeonInvestDataOutput {
    investDatas: DungeonInvestData[];
}

export interface TotemInvestData {
    totemNFTId: string;
    dungeonId: integer;

    baseLP: string;
    rewardLP: string;

    baseLPRadio: integer;
    rewardLPRadio: integer;

    claimableReward: string;
}

export interface UpdateTotemInvestData {
    data: TotemInvestData;
}

export interface GetUserAllTotemInvestDataInput {
    dungeonId?: integer;
    userId: string;
}

export interface GetUserAllTotemInvestDataOutput {
    investDatas: TotemInvestData[];
}

export interface EstimateInvestDungeonInput {
    // 副本id
    dungeonId: integer;
    // 图腾id
    totemNFTId: string;

    userId: string;

    // 投资金额
    amount: string;
}

export interface EstimateInvestDungeonOutput {
    // 投资后的LP
    newBaseLP: string;
    newRewardLP: string;

    // 投资后的LP比例
    newBaseLPRadio: integer;
    newRewardLPRadio: integer;
}

export interface InvestDungeonInput {
    // 副本id
    dungeonId: integer;
    // 图腾id
    totemNFTId: string;

    // 
    userId: string;

    // 投资金额
    amount: string;

    // 用户预期的base LP
    minBaseLP: string;
}

export interface InvestDungeonOutput {
    success: boolean;
    reason: string;
}

export interface EstimateDivestDungeonInput {
    // 副本id
    dungeonId: integer;
    // 图腾id
    totemNFTId: string;

    userId: string;

    // 投资金额
    removeBaseLP: string;
}

export interface EstimateDivestDungeonOutput {
    // 投资后的LP
    newBaseLP: string;
    newRewardLP: string;
    // 投资后的LP比例
    newBaseLPRadio: integer;
    newRewardLPRadio: integer;

    // 预计获得的金额
    outAmount: string;
}

export interface DivestDungeonInput {
    // 副本id
    dungeonId: integer;
    // 图腾id
    totemNFTId: string;

    userId: string;

    // 移除的base LP
    removeBaseLP: string;

    // 用户预期获得的金额
    minOutAmount: string;
}

export interface DivestDungeonOutput {
    success: boolean;
    reason: string;
}

export interface HavestDungeonInvestRewardInput {
    totemNFTId: string;
    ownerUserId: string;
    toUserId: string;
    amount: string;
    havestType: integer;
}

export interface HavestDungeonInvestRewardOutput {
    success: boolean;
    reason: string;
}

export interface GetInvestHavestLogsInput {
    userId: string;
}

export interface InvestHavestLog {
    totemNFTId: string;
    amount: string;
    timestamp: string;
    havestType: integer;
}

export interface GetInvestHavestLogsOutput {
    logs: InvestHavestLog[];
}