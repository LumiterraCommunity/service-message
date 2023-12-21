/**
 * @TJS-type integer
 */
type Int32 = number;
type integer = Int32;

export interface CheckMultiUseLUAUSDInput {
    userIds: string[];

    /**
     * 和userId一一对应
     * 所有数量
     * @items.type integer
     * @items.minimum 0
     */
    amounts: integer[];
}

export interface CheckMultiUseLUAUSDOutput {
    result: boolean;
}

export interface MultiUseLUAUSD {
    userIds: string[];

    /**
     * 和userId一一对应
     * 所有数量
     * @items.type integer
     * @items.minimum 0
     */
    amounts: integer[];

    /**
     * 每个用户的消耗备注
     */
    remarks: string[];
}