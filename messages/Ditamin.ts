/**
 * @TJS-type integer
 */
 type Int32 = number;
 type integer = Int32;

export interface BurnDitaminInput {
    /**
     * 需要燃烧的用户id
     */
    userId: string;

    /**
     * 需要燃烧的ditamin数量
     */
    amount: string;

    /**
     * 燃烧的原因
     */
    source: DitaminBurnSource;

    /**
     * 燃烧的hash id
     * 用来防止重复燃烧, 每次燃烧调用方需要生成一个txHash. 如果txHash重复, 则不会重复燃烧
     */
    txHash: string;
}

export interface BurnDitaminOutput {
    /**
     * 是否燃烧成功
     */
    burnSuccess: boolean;

    /**
     * 如果燃烧失败, 则返回失败原因, 否则返回空字符串
     */
    failedReason: string;
}

export enum DitaminProduceSource {
    harvest = 'harvest',

    deposit = 'deposit',

    attackFinlish = 'attackFinlish',
}

export interface DitaminProduce {
    /**
     * ditamin数量
     */
    ditaminAmount: string;

    /**
     * 生产源
     */
    source: DitaminProduceSource;

    // 消耗的用户
    userId: string;

    /**
     * 消息版本号
     */
    etag: integer;
}

export enum DitaminBurnSource {
    exchange = 'exchange',
    buyEnergy = 'buyEnergy',
    buildNFT = 'buildNFT',
    build3drNFT = 'build3drNFT',
    craft = 'craft',
}

export interface DitaminBurn {
    /**
     * ditamin数量
     */
    ditaminAmount: string;

    /**
     * 生产源
     */
    source: DitaminBurnSource;

    // 消耗的用户
    userId: string;

    /**
     * 消息版本号
     */
    etag: integer;
}