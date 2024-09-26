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

// 转移lua 支持同步支持系统回收(fromUserId -> toUserId )
export interface TransferLUAInput {
    fromUserId: string;
    amount: string;
    toUserId: string;
    /**
     * 转移备注
     */
    remark: string;
}
export interface TransferLUAOutput {
    success: boolean;
    failedReason: string;
}