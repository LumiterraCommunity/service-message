export interface GetGameMessageStatusByIdInput {
    messageId: string;
}

export interface GetGameMessageStatusByIdOutput {
    executed: boolean;
    success: boolean;
    reason: string;
}

export interface ExecGameMessageInput {
    eventId: string;

    userId: string;

    target: string;

    data: string;

    remark: string;

    gasFee: string;
}

export interface ExecGameMessageOutput {
    messageId: string;
}

export interface HandleGameMessageCallback {
    messageId: string;

    // 是否执行
    executed: boolean;

    // 是否成功
    success: boolean;

    // 失败原因
    reason: string;
}

export interface DispatchGameMessage {
    messageId: string;
    isLarge: boolean;
}