/**
 * @TJS-type integer
 */
type Int32 = number;
type integer = Int32;

import { NFTTrait_Quality } from './NFTAttribute';

export interface CanBuildNFTInput {
    /**
     *  NFT Id
     */
    nftId: string;

    /**
     *  归属用户id
     */
    userId: string;

    /**
     * 实体存活时间，对第三方NFT有效, 单位(秒)
     */
    aliveTimeSec: integer;
}


export interface CanBuildNFTOutput {
    /**
     * NFT id
     */
    nftId: string;

    canBuild: boolean;
}

/**
 * NFTAttribute 为产品定义的每个NFT的属性.
 */
export interface NFTAttribute {
    display_type?: string;

    trait_type: string;

    value: string;
}

/**
 * 有一些配置表格的数据不希望显示在opensea中, 但是为了方便统一解析。
 * 生成到这个表格中.
 */
export interface LumiAttribute {
    trait_type: string;

    value: string;
}

/**
 * NFT metadata源信息
 * https://docs.opensea.io/docs/metadata-standards
 */
export interface NFTMetadata {
    /**
     * NFT name
     */
    name: string;

    /**
     * NFT description
     */
    description: string;


    /**
     * NFT image data.
     */
    image?: string;
    image_url?: string;
    image_data?: string;

    /**
     * NFT gif animation url
     */
    animation_url?: string;

    /**
     * Youtube video url
     */
    youtube_url?: string;

    /**
     * NFT 扩展url
     * 有扩展URL的NFT社区会实现规范用户点击进行跳转。
     */
    external_url?: string;

    background_color?: string;

    /**
     * NFT的额外属性.
     */
    attributes: NFTAttribute[];

    /**
     * NFT的原始数据. 只有Lumiterra的NFT才会携带
     * 基于策划的表格配置生成.
     */
    lumiAttributes?: LumiAttribute[];
}

// 用于存储NFT的基本信息
// 没有归属权信息
export interface SmapleNFT {
    tokenId: string;

    itemId: string;

    metadata: NFTMetadata;

    amount: integer;
}

export interface NFT {
    isGame: boolean;

    /**
     * 只有当isGame为true时, 才存在, 否则为空字符串
     */
    itemId: string;

    /**
     * 描述当前nft存储于那条链上
     */
    network: string;

    /**
     * NFT id
     */
    id: string;

    /**
     * NFT token id
     */
    tokenId: string;

    /**
     * NFT address
     */
    address: string;

    /**
     * product Id
     */
    productId: string;

    /**
     * NFT amount
     */
    amount: integer;

    /**
     * NFT 变化量
     * 默认值为0, 当某一个事件发出时, 若为n<0则表示此次事件导致的nft数量减少n, n>0则表示此次事件导致的nft数量增加n
     */
    amountOfChange: integer;

    /**
     * NFT metadata info
     * 如果非第三方则必须有metadata
     * 目前的实现是, 如果是第三方NFT, 则metadata为空, 直接将tokenURL返回给前端解析即可.
     * example: https://nftmetadata-service-release.lumiterra.net/placeable/80000031/1
     */
    metadata?: NFTMetadata;

    /**
     * NFT metadata url
     * https://nftmetadata-service-release.lumiterra.net/placeable/80000031/1
     */
    tokenURL: string;

    // 用户获得NFT的时间
    createdAt: integer
}

/**
 * NFT放置过期时间结构体
 */
export interface NFTPlaceableTimeout {
    /**
     *  NFT Id
     */
    nftId: string;

    /**
     * 名字（是否唯一） 
     * */
    timeoutSec: integer;
}

export interface GetUserNFTsInput {
    userId: string;
}

export interface GetUserNFTsOutput {
    /**
     * 消息版本号
     */
    etag: integer;

    /**
     * user all nfts
     */
    nfts: NFT[];

    /**
     * NFT放置过期时间表
     */
    placeableTimeouts: NFTPlaceableTimeout[];
}


/** 
 * 更新用户的NFT
 * 可能是添加或者数量变更.
 */
export interface UpdateUserNFT {
    /**
     * 消息版本号
     */
    etag: integer;

    /**
     *  归属用户id
     */
    userId: string;

    /**
     * 来源坐标
     * 当捡取时携带且不为0
     */
    fromLandId: integer;

    /**
     * 区块链交易hash
     */
    txn?: string;

    /**
     * 接收NFT的用户钱包地址
     */
    recipientBlockchainAddress?: string;

    /**
     * 发送NFT的用户钱包地址
     */
    senderBlockchainAddress?: string;

    /**
     * NFT信息
     */
    nft: NFT;
}

export interface RecipeInfo {
    /**
     * 图鉴id
     */
    id: string;

    /**
     * 图鉴名称
     */
    name: string;
}

export interface MultiUpdateUserNFT {
    /**
     * 消息版本号
     */
    etag: integer;

    /**
     *  归属用户id
     */
    userId: string;

    /**
     * 来源坐标
     * 当捡取时携带且不为0
     */
    fromLandId: integer;

    /**
     * 来源合成图鉴
     */
    fromRecipeInfo?: RecipeInfo;

    /**
     * 区块链交易hash
     */
    txn?: string;

    /**
     * 接收NFT的用户钱包地址
     */
    recipientBlockchainAddress?: string;

    /**
     * 发送NFT的用户钱包地址
     */
    senderBlockchainAddress?: string;

    /**
     * NFT信息
     */
    nfts: NFT[];
}

export interface BatchMintNFT {
    // mint to user id
    userId: string

    /**
     * 需要mint的所有的itemId
     */
    itemIds: string[];

    /**
     * index和itemIds一一对应
     * 所有数量
     * @items.type integer
     * @items.minimum 0
     */
    amounts: integer[];

    /**
     * 所有的品质
     * index和itemIds一一对应
     */
    qualityVals?: string[];

    /**
     * 所有的品质
     * index和itemIds一一对应
     */
    qualitys?: NFTTrait_Quality[];

    remark: string;
}

export interface BatchBurnNFTInput {
    userId: string

    nftIds?: string[]

    itemIds?: string[]

    /**
     * index和itemIds一一对应
     * 所有数量
     * @items.type integer
     * @items.minimum 0
     */
    amounts: integer[]

    /**
     * 每个用户的消耗备注
     */
    remarks: string;
}

export interface CheckMultiBatchBurnNFTInput {
    inputs: BatchBurnNFTInput[]
}

export interface CheckMultiBatchBurnNFTOutput {
    results: boolean[]
}

export interface MultiBatchBurnNFT {
    input: BatchBurnNFTInput[]
}

export interface GetUserNFTsByUserIdAndAddressInput {
    /**
     * 用户id
     */
    userId: string;

    /**
     * 用户钱包地址
     */
    blockchainAddress: string;
}

export interface GetUserNFTsByUserIdAndAddressOutput {
    nfts: NFT[];
}

export interface UseEquipment {
    nftId: string;

    /**
     * 用户id
    */
    userId: string;

    /**
     * 游戏角色id
    */
    playerId: string;

    cid: integer;

    /**
      * 装备位置 对时装和装备有效
    */
    avatarPos: integer;
}

export interface UnloadEquipment {
    nftId: string;

    /**
     * 用户id
    */
    userId: string;

    /**
     * 游戏角色id
    */
    playerId: string;
}

export interface UsingNFT {
    nftId: string;

    /**
     * 用户id
    */
    userId: string;

    /**
     * 游戏角色id
    */
    playerId: string;

    cid: integer;

    /**
      * 装备位置 对时装和装备有效
    */
    avatarPos: integer;
}
export interface UserUsingNft {
    userId: string;
    usingNfts: UsingNFT[];
}
export interface GetPlayerUsingNftsByUserIdInput {
    userId: string;
}
// TODO ...  use struct UserUsingNft by pvp next version
export interface GetPlayerUsingNftsByUserIdOutput {
    userId: string;

    usingNfts: UsingNFT[];
}
export interface MultiGetPlayerUsingNftsByUserIdInput {
    userIds: string[];
}
export interface MultiGetPlayerUsingNftsByUserIdOutput {
    UserUsingNfts: UserUsingNft[];
}
