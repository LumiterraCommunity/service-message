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


// 查看 GameToken 的价格
export interface GetGameTokenPriceInput {}

export interface GetGameTokenPriceOutput {
    price: string;      // eth wei
    expireTime: integer; // 价格有效期(秒级别)
}


// 根据 U 的数量和 GameToken 的汇率扣除 GameToken
// GameToken根据业务来指定具体的 token
export interface UseGameTokenByUSDAmountInput {
    gameTokenPrice: string; // GameToken 当前价格(eth wei)
    usdAmount: string; // 需要扣除的 USD 数量(eth wei)
    remark: string; // 扣除备注
    userId: string; // 用户ID
}

export interface UseGameTokenByUSDAmountOutput {
    success: boolean;
    failedReason: string;
    gameMessageId: string; // 扣除 GameToken 的 messageId
    deductedGameTokenAmount: string; // 实际扣除的 GameToken 数量
}

