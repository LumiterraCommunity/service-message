import { NFT } from './NFT';

/**
 * @TJS-type integer
 */
type Int32 = number;
type integer = Int32;

export interface MarketplaceTrade {
    tokenType: string;

    tokenAmount: string;

    nft: NFT;

    txn: string;

    chainName: string;

    sellerBlockchainAddress: string;
    buyerBlockchainAddress: string;

    /**
     * 消息版本号
     */
    etag: integer;


}