/**
 * @TJS-type integer
 */
type Int32 = number;
type integer = Int32;

export interface GetUserRecipesInput {
    userId: string;
}

export interface GetUserRecipesOutput {
    recipeIds: string[];
}

export interface CheckUserRecipeInput {
    userId: string;

    recipeId: string;
}

export interface CheckUserRecipeOutput {
    hasRecipe: boolean;
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