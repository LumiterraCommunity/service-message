export enum AppId {
    "graphql-service" = 'graphql-service',
    "web3-service" = 'web3-service',
    "pvp-service" = 'pvp-service',
    "land-service" = 'web3-service',
    "game-service-main" = 'game-service-main',
    "scene-dynamic-service" = 'scene-dynamic-service',
}

export enum GraphqlServiceAction {
    CanBuildNFT = 'CanBuildNFT',
    GetUserNFTs = 'GetUserNFTs',
    GetUserWeb3Profile = 'GetUserWeb3Profile',
    GetUserIdByAddress = 'GetUserIdByAddress',

    // 获取对用户特殊资产的跟踪
    GetUserTrack = 'GetUserTrack',

    // 获取指定类型的题目
    GetQuestionsByTypesRandom = 'GetQuestionsByTypesRandom',

    // 检查题目是否回答正确
    CheckQuestionAnswer = 'CheckQuestionAnswer',

    GetQuestionResourcesByTypes = 'GetQuestionResourcesByTypes',
}

export enum PVPServiceAction {
    CreatePVPRoom = 'CreatePVPRoom',
    PVPRoomReady = 'PVPRoomReady',
    PVPRoomPreLeave = 'PVPRoomPreLeave',
    PkSessionUITick = 'PkSessionUITick',
    PkSessionDoQuestion = 'PkSessionDoQuestion',
    PkSessionLoadSuccess = 'PkSessionLoadSuccess',
    PkSessionAgain = 'PkSessionAgain',
    GetCurrentPkSessionId = 'GetCurrentPkSessionId',
    PVPMatchEnter = 'PVPMatchEnter',
    PVPMatchLeave = 'PVPMatchLeave',
    GetPlayerPvpProfile = 'GetPlayerPvpProfile',
    GetPlayerPvpRank = 'GetPlayerPvpRank',
    GetPvpHistory = 'GetPvpHistory',
    PvpSurrender = 'PvpSurrender',
}

export enum GameDataServiceAction {
    LandUsingSkill = 'LandUsingSkill',
    DeductUserExp = 'DeductUserExp',
    MultiGetPlayerInfoByUserId = 'MultiGetPlayerInfoByUserId',
    GetPlayerUsingNftsByUserId = 'GetPlayerUsingNftsByUserId',
    MultiGetPlayerUsingNftsByUserId = 'MultiGetPlayerUsingNftsByUserId',
    GetPlayerItemSlots = 'GetPlayerItemSlots',
    UpgradePlayerItemSlots = 'UpgradePlayerItemSlots',
}

export enum Web3ServiceAction {
    // 基于图鉴合并NFT
    MergeByRecipe = 'MergeByRecipe',

    // 获取用户已经解锁的图鉴
    GetUserRecipes = 'GetUserRecipes',

    // 学习用户图鉴
    LearnUserRecipes = 'LearnUserRecipes',

    // 遗忘用户图鉴
    ForgetUserRecipes = 'ForgetUserRecipes',

    // 根据用户的id跟钱包地址获取用户所有的NFTs
    GetUserNFTsByUserIdAndAddress = 'GetUserNFTsByUserIdAndAddress',

    // 批量检测用户是否可以消耗指定的NFT
    CheckMultiBatchBurnNFT = 'CheckMultiBatchBurnNFT',

    // 批量检测用户是否可以消耗指定的LUAUSD
    CheckMultiUseLUAUSD = 'CheckMultiUseLUAUSD',

    // 
    GetGameMessageStatusById = 'GetGameMessageStatusById',

    // 
    ExecGameMessage = 'ExecGameMessage',
}

export enum SceneDynamicServiceAction {
    StartServer = "StartServer"
}

/**
 * 所有订阅事件.
 * 返回发送和接收的结构体同名
 */
export enum SubscriptionEvent {
    // 批量更新地格信息事件
    MultiLandDataUpdateEvent = 'MultiLandDataUpdateEvent',
    // 拆除建筑物事件
    MultiRecyclingEvent = 'MultiRecyclingEvent',
    // 更新建造物信息事件
    MultiBuildUpdateEvent = 'MultiBuildUpdateEvent',

    // 用户NFT变更
    // 删除
    // 增加都是这个协议
    UpdateUserNFT = 'UpdateUserNFT',

    // 批量用户NFT变更
    MultiUpdateUserNFT = 'MultiUpdateUserNFT',

    // 穿装备
    UseEquipment = 'UseEquipment',

    // 卸下装备
    UnloadEquipment = 'UnloadEquipment',

    // MarketplaceTrade = 'MarketplaceTrade',

    // 角色死亡
    PlayerDeath = 'PlayerDeath',

    // 角色复活
    PlayerReborn = 'PlayerReborn',

    // 角色击杀
    PlayerKilled = 'PlayerKilled',

    // 完成问题
    // FinishQuestion = 'FinishQuestion',

    // Scene Dynamic
    UpdateUpcomingUses = 'UpdateUpcomingUses',

    CloseServer = 'CloseServer',

    // BatchBurnNFT
    BatchBurnNFT = 'BatchBurnNFT',

    // CheckMultiUseLUAUSD
    UseLUAUSD = 'UseLUAUSD',

    // 批量mint nft
    // 以节省网络开销
    BatchMintNFT = 'BatchMintNFT',

    BatchTransferNFT = 'BatchTransferNFT',
}

export enum PVPSubscriptionEvent {
    // PVP 匹配开始
    PVPMatchBegin = 'PVPMatchBegin',
}


export enum LandServiceAction {
    // 请求所有地格数据
    GetAllLandData = 'GetAllLandData',
    // 请求所有建造物数据
    GetAllBuildData = 'GetAllBuildData',
    // 使用放置nft建造
    Build = 'Build',
    // 拆除nft建造物
    Recycling = 'Recycling',
    // 充电charged
    Charged = 'Charged',
    // 收获(harvest)自己建造物的产出(有电量的build) 
    Harvest = 'Harvest',
    // 采集/偷取(collection) 他人的或者自己的没电量的建造物产出 
    Collection = 'Collection',
    // 
    MintBattery = 'MintBattery'
}