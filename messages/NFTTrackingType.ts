

// 用于标识产出-消耗的场景来源
export enum NFTTrackingType {
    // 默认类型（一些公用的mint和 burn 是不好去区分场景的，都归类为 default）
    // 具体业务具体分析
    Default = 'Default',
    // 装备强化
    EnhanceEquipment = 'EnhanceEquipment',
    // 合成
    Merge = 'Merge',
    // 副本 (门票、章节奖励、通过奖励)
    Dungeon = 'Dungeon',
    // 实体掉落(怪物、采集物、收割农作物)
    EntityDrop = 'EntityDrop',
    // 任务
    Task = 'Task',
    // 玩家主动使用的场景(这里面应该只有 burn 的行为)
    UserAction = 'UserAction',
}
