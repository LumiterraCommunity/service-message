/**
 * @TJS-type integer
 */
type Int32 = number;
type integer = Int32;
import { SmapleNFT } from './NFT'

export interface GetUserRecipesInput {
    userId: string;
}

export interface GetUserRecipesOutput {
    recipeIds: string[];
}

export interface LearnUserRecipesInput {
    userId: string;

    recipeIds: string[];
}

export interface LearnUserRecipesOutput {

}

export interface ForgetUserRecipesInput {
    userId: string;

    recipeIds: string[];
}

export interface ForgetUserRecipesOutput {
}

export interface MergeByRecipeInput {
    /**
     * 图鉴id
     */
    recipeId: string;

    /**
     * 合成数量
     */
    amount: integer;

    /**
     * 合成的用户
     */
    userId: string;
}

export interface MergeByRecipeOutput {
    
}