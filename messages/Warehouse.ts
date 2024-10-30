// 设置仓库价格
export interface SetWarehouseInput {
    price: string;
}

export interface SetWarehouseOutput {
    success: boolean;
    reason: string;
}