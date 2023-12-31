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
