/// 动态开服协议
/**
 * @TJS-type integer
 */
type Int32 = number;
type integer = Int32;

// 更新预开服范围人数
export interface UpdateUpcomingUses {
    number: integer
}

export interface CloseServer {
    serverAppId: string;
}

export interface StartServerInput {
    args: string;
    envs: string;
}

export interface StartServerOutput {
    serverAppId: string;
}