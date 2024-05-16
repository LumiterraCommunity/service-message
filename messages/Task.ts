/**
 * @TJS-type integer
 */
type Int32 = number;
type integer = Int32;

export interface TaskPool {
    id: string;

    // 最大总奖励值
    topTotalBonus: string;

    // 总奖励
    basicTotalBonus: string;

    // 剩余奖励
    remainBonus: string;

    // 基础奖励值
    basicBonus: string;

    // 浮动奖励值比例
    floatBonusPrecent: string;

    // luag mint price
    luag1MintPrice: string;
    luag1TokenTotal: integer;

    refreshNFTId: string;

    // 是否是免费池
    isFreePool: boolean;

    ticketExpireTime: integer;
    poolExpireTime: integer;
}

export interface MintTaskTicketInput {
    // 用户id
    userId: string;

    // 任务池id
    taskPoolId: string;

    // 票数
    amount: integer;
}

export interface MintTaskTicketOutput {
    gameMessageId: string;
    success: boolean;
    reason: string;
}

export interface DistributeLUAUSDInput {
    // 用户id
    userId: string;

    // 任务池id
    taskPoolId: string;

    amount: string;
}

export interface DistributeLUAUSDOutput {
    gameMessageId: string;
    success: boolean;
    reason: string;
}

export interface DistributeLUAG1Input {
    // 用户id
    userId: string;

    // 任务池id
    taskPoolId: string;

    amount: integer;
}

export interface DistributeLUAG1Output {
    gameMessageId: string;
    success: boolean;
    reason: string;
}

export interface NFTSupply {
    itemId: string;
    tokenId: string;
    supply: integer;
}
export interface FetchTaskUseNFTSupplyListInput { }
export interface FetchTaskUseNFTSupplyListOutput {
    nftSupplyList: NFTSupply[];
}