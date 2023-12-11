/**
 * @TJS-type integer
 */
type Int32 = number;
type integer = Int32;


/**
 * 地格数据结构
 */
export interface LandData {
    /**
    * 地格id地图唯一
    */
    id: integer;

    /**
     * 地图id 为多地图准备
     */
    mapId: integer;

    /**
    * 地格坐标
    */
    x: number;
    y: number;
    z: number;

    /**
    * owner userId
    */
    ownerId: string;

    /**
     * 占领时间 单位秒
     */
    occupyAt: integer;

    /**
    * 占领过期时间 单位秒
    * 当地块上存在有电量建筑物时，
    * 该时间戳无效 || 在充电时更新该时间戳
    */
    timeoutAt: integer;
}

// 获取全量地格数据
export interface GetAllLandDataInput {
    /**
     * 地图id 为多地图准备
     */
    mapId: integer;
}
export interface GetAllLandDataOutput {
    /**
     * 是否成功
     */
    success: boolean;
    /**
     * 失败, 则返回失败原因, 否则返回空字符串
     */
    failedReason: string;

    /**
     * 全量地格数据
     */
    allLandData?: LandData[]
}

// 建造物详细数据
export interface BuildData {
    /**
     * 玩家id
     */
    userId: string;

    /**
     * nftId
     */
    nftId: string;

    /**
     * 建造id
     */
    buildId: integer;

    /**
     * 地图id 为多地图准备
     */
    mapId: integer;

    /**
     * @items.type integer
     * @items.minimum 0
     */
    landIds: integer[];

    /**
     * 电量过期时间 单位秒
     */
    electricEnd: integer

    /**
     * 可收获的物品数量统计(没电时转移到采集) 单位秒
     */
    harvestItemCount: integer;

    /**
     * 可采集(偷取)物品数量统计
     */
    collectionItemCount: integer;

    /**
     * 下次可采集(偷取)的时间戳 单位秒
     */
    collectionAt: integer;

    /**
     * 采集开始时间点
     */
    collectionStartAt: integer;

    /**
     * 可以收集的时间
     */
    harvestAt: integer;

    /**
    * 产出开始时间点.
    */
    harvestStartAt: integer;

    // 电量不足时建造保护期开始时间
    landPlacementPowerZeroCooldownStartAt: integer;

    // 电量不足时建造保护期
    landPlacementPowerZeroCooldownAt: integer;
}


// 请求所有建造物数据
export interface GetAllBuildDataInput {
    /**
     * 地图id 为多地图准备
     */
    mapId: integer;
}
export interface GetAllBuildDataOutput {
    /**
     * 是否成功
     */
    success: boolean;
    /**
     * 失败, 则返回失败原因, 否则返回空字符串
     */
    failedReason: string;
    /**
     * 全量建造物数据
     */
    allBuild?: BuildData[];
}

// 使用放置nft建造
export interface BuildInput {
    /**
     * 玩家id
     */
    userId: string;

    /**
     * nftId
     */
    nftId: string;

    /**
     * 地图id 为多地图准备
     */
    mapId: integer;

    /**
     * @items.type integer
     * @items.minimum 0
     */
    landIds: integer[];
}
export interface BuildOutput {
    /**
     * 是否成功
     */
    success: boolean;

    /**
     * 失败, 则返回失败原因, 否则返回空字符串
     */
    failedReason: string;

    /**
     * 建造物信息
     */
    buildData?: BuildData;
}


// 拆除nft建造物
export interface RecyclingInput {
    /**
     * 玩家id
     */
    userId: string;

    /**
     * 建造Id
     */
    buildId: integer;

    /**
     * 地图id 为多地图准备
     */
    mapId: integer;
}
export interface RecyclingOutput {
    /**
     * 是否成功
     */
    success: boolean;

    /**
     * 失败, 则返回失败原因, 否则返回空字符串
     */
    failedReason: string;
}

// 给建造物充电
export interface ChargedInput {
    /**
     * 玩家id
     */
    userId: string;

    /**
     * 建造id
     */
    buildId: integer;

    /**
     * 地图id 为多地图准备
     */
    mapId: integer;

    /**
     * 电池数量
     */
    num: integer;
}

export interface ChargedOutput {
    /**
     * 是否成功
     */
    success: boolean;

    /**
     * 失败, 则返回失败原因, 否则返回空字符串
     */
    failedReason: string;
}

export interface MintBatteryInput {
    /**
     * 用户数量
     */
    userId: string;

    /**
     * mint 数量
     */
    num: integer;

    /**
     * 赠送数量, 由前端传过来, 防止后端配表跟前端不一致时, 出现问题
     */
    giftNum: integer;
}

export interface MintBatteryOutput {
    /**
    * 是否成功
    */
    success: boolean;

    /**
     * 失败, 则返回失败原因, 否则返回空字符串
     */
    failedReason: string;
}

// 收获(harvest)自己建造物的产出(有电量的建造物)
export interface HarvestInput {
    /**
     * 玩家id
     */
    userId: string;

    /**
     * 建造id
     */
    buildId: integer;

    /**
     * 地图id 为多地图准备
     */
    mapId: integer;
}
export interface HarvestOutput {
    /**
     * 是否成功
     */
    success: boolean;

    /**
     * 失败, 则返回失败原因, 否则返回空字符串
     */
    failedReason: string;
}


// 采集/偷取(collection) 他人的或者自己的没电量的建造物产出 
export interface CollectionInput {
    /**
     * 玩家id
     */
    userId: string;

    /**
     * 建造Id
     */
    buildId: integer;

    /**
     * 地图id 为多地图准备
     */
    mapId: integer;
}
export interface CollectionOutput {
    /**
     * 是否成功
     */
    success: boolean;

    /**
     * 失败, 则返回失败原因, 否则返回空字符串
     */
    failedReason: string;
}


// 更新建筑物信息事件
export interface MultiBuildUpdateEvent {
    /**
     * 消息版本号
     */
    etag: integer;

    /**
     * 建造物信息
     */
    buildDatas: BuildData[];
}

// 批量更新地格信息事件
export interface MultiLandDataUpdateEvent {
    /**
     * 消息版本号
     */
    etag: integer;

    lands: LandData[];
}

export interface RecyclingInfo {
    buildId: integer;

    mapId: integer;
}

// 拆除建筑物事件
export interface MultiRecyclingEvent {
    /**
     * 消息版本号
     */
    etag: integer,

    recyclingInfos: RecyclingInfo[];
}