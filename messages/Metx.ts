export interface SendMetaTxInput {
    from: string;

    to: string;

    value: string;

    gas: number;

    nonce: string;

    data: string;

    signature: string;
}

export interface SendMetaTxOutput {
    txId: string;
}

export interface SendTxInput {
    to: string;

    value: string;

    gas: number;

    data: string;
}

export interface SendTxOutput {
    txId: string;
}