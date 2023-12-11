/**
 * @TJS-type integer
 */
type Int32 = number;
type integer = Int32;

export interface MELDFutureMint {
    mfId: string;

    /**
     * 期货价值余额
     */
    futureAmount: string;

    /**
     * 花费多少ditamin
     */
    ditaminAmount: string;

    /**
     * 获得的用户钱包地址
     */
    userBlockchainAddress: string;
}

// 汇率变化
export interface MELDFutureExchangeRateChange {
    exchangeRate: string;

    /**
     * 消息版本号
     */
    etag: integer;
}

// 
export interface MELDFutureRelease {
    userBlockchainAddress: string;
    amountOfMELD: string;

    mfId: string;

    /**
     * 消息版本号
     */
    etag: integer;
}

// 
export interface MELDExchange2Ditamin {
    depositId: string;

    amountOfMELD: string;


    ditaminAmount: string;


    userBlockchainAddress: string;

    /**
     * 消息版本号
     */
    etag: integer;
}