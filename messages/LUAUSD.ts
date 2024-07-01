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
     * 消耗的金额
     * decimal 18
     */
    amount: string;

    /**
     * 每个用户的消耗备注
     */
    remark: string;
}