/**
 * @TJS-type integer
 */
type Int32 = number;
type integer = Int32;

export interface DungeonExtraDropPool {
    id: string;

    // 奖票数量
    raffleTicketTotal: integer;
    raffleTicketNFTId: string;
    raffleTicketNFTItemId: string;

    // 专精类型
    talent: integer;
    levelRangeIdx: integer;

    created: boolean;
}

export interface FetchDungeonExtraDropPoolsInput {
    timestamp: integer;
}

export interface FetchDungeonExtraDropPoolsOutput {
    pools: DungeonExtraDropPool[];
}

export interface RaffleDrawLog {
    userId: string;
    raffleTicketNFTId: string;
    raffleTicketNFTItemId: string;
    amount: integer;

    blockTime: integer;

    resultItemIds: string[];
    /**
     * index和itemIds一一对应
     * 所有数量
     * @items.type integer
     * @items.minimum 0
     */
    resultAmounts: integer[];
}

export interface RaffleDrawEvent {
    log: RaffleDrawLog
}

export interface FindRaffleRrawLogsInput {
    userId?: string;
    beginIdx: integer; // 从多少条开始获取
    num: integer;      // 一次拿多少条记录
}

export interface FindRaffleRrawLogsOutput {
    logs: RaffleDrawLog[];
    logsCount: integer;
}

export interface RaffleDrawInput {
    userId: string;
    raffleTicketNFTId: string;
    amount: integer;
}

export interface RaffleDrawOutput {

}