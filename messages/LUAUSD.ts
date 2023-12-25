/**
 * @TJS-type integer
 */
type Int32 = number;
type integer = Int32;

export interface CheckMultiUseLUAUSDInput {
    inputs: UseLUAUSD[];
}

export interface CheckMultiUseLUAUSDOutput {
    results: boolean[];
}

export interface UseLUAUSD {
    userId: string;

    /**
     * 和userId一一对应
     * 所有数量
     * @items.type integer
     * @items.minimum 0
     */
    amounts: integer;

    /**
     * 每个用户的消耗备注
     */
    remark: string;
}