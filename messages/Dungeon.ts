/**
 * @TJS-type integer
 */
type Int32 = number;
type integer = Int32;

export interface DungeonExtraDropPool {
    id: string;

    // 奖票数量
    raffleTicketTotal: integer;
    ticketNFTId: string;
    ticketNFTItemId: string;

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