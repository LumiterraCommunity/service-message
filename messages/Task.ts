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
    floatBonusPrecent: integer;
    // 分发奖励值时k值
    taskTicketMintKPrecent: integer;


    // 抽奖票奖励cid
    raffleTicketItemId: string;
    // 抽奖任务票cid
    raffleTaskTicketItemId: string;
    // 抽奖票总奖励数
    raffleTicketTotal: integer;
    // 抽奖票基数
    raffleTicketBase: integer;

    // luag mint price
    luag1BasicBonus: integer;
    luag1TokenTotal: integer;

    refreshNFTItemId: string;
    refreshNFTId: string;

    // 专精类型
    talent: integer;
    levelRangeIdx: integer;
    // 池子类型
    type: integer;

    ticketExpireTime: integer;
    poolExpireTime: integer;

    created: boolean;
}

export interface FetchTaskPoolsInput {
    timestamp: integer;
}

export interface FetchTaskPoolsOutput {
    taskPools: TaskPool[];
}

export interface MintTaskTicketInput {
    // 用户id
    userId: string;

    // 任务池id
    taskPoolId: string;

    // 任务票NFT Id
    itemIds: string[];

    /**
     * index和itemIds一一对应
     * 所有数量
     * @items.type integer
     * @items.minimum 0
     */
    amounts: integer[];

    // 防止重复提交
    mintId: string;
}

export interface MintTaskTicketOutput {
    success: boolean;
    reason: string;
    gameMessageId: string;
}

export interface DistributeLUAUSDInput {
    // 用户id
    userId: string;

    // 任务池id
    taskPoolId: string;

    amount: string;

    // 防止重复提交
    taskId: string;
}

export interface DistributeLUAUSDOutput {
    success: boolean;
    reason: string;

    gameMessageId: string;
}

export interface DistributeLUAG1Input {
    // 用户id
    userId: string;

    // 任务池id
    taskPoolId: string;

    amount: integer;

    // 防止重复提交
    taskId: string;
}

export interface DistributeLUAG1Output {
    success: boolean;
    reason: string;
    gameMessageId: string;
}

export interface NFTSupply {
    itemId: string;
    supply: integer;
}
export interface FetchTaskUseNFTSupplyListInput { }
export interface FetchTaskUseNFTSupplyListOutput {
    nftSupplyList: NFTSupply[];
}