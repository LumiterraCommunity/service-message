/**
 * @TJS-type integer
 */
type Int32 = number;
type integer = Int32;

export interface UserStakeAdd {
    stakeLevel: string;

    amountOfMELD: string;

    userBlockchainAddress: string;

    /**
     * 消息版本号
     */
    etag: integer;
}

export interface UserStakeExpire {
    stakeLevel: string;

    amountOfMELD: string;

    userBlockchainAddress: string;

    /**
     * 消息版本号
     */
    etag: integer;
}

export interface UserStakeClaim {
    stakeLevel: string;

    amountOfMELD: string;

    userBlockchainAddress: string;

    /**
     * 消息版本号
     */
    etag: integer;
}

export interface UserStakeHarvest {
    harvestAmountOfMELD: string;
    userBlockchainAddress: string;

    /**
     * 消息版本号
     */
    etag: integer;
}