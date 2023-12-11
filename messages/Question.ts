/**
 * @TJS-type integer
 */
type Int32 = number;
type integer = Int32;

// 当用户完成一个quiz时触发
export interface FinishQuestion {
    // 答题的用户
    userId: string;

    // 题目类型
    type: string,

    // 题目id
    questionId: string;

    // 题目难度
    level: string;

    // 完成情况
    // 回答正确和失败
    result: string;

    // 答题结果对当前题型难度的影响，降难度、难度不变、提高难度分别为-1,0,1
    diffcultyChange: number;

    /**
     * 消息版本号
     */
    etag: integer;
}

export interface Question {
    // 题目id
    id: string;

    // 题目结构的json字符串
    // 由于题目结构协议比较复杂
    // 且大部分微服务场景只需要传递即可
    // 所以使用json直接传递
    structJSON: string;
}

export enum QuestionType {
    // 单选
    SingleChoice = 'SingleChoice',

    // 匹配鼹鼠
    MatchingMouse = 'MatchingMouse',

    // 快闪记忆
    QuickFlashMemory = 'QuickFlashMemory',

    // 顺序气球
    SequenceBalloon = 'SequenceBalloon',

    // 裁剪艺术
    CuttingArt = 'CuttingArt',

    // 旋转剪影
    RotatingSilhouette = 'RotatingSilhouette',

    // 积木计算
    BlockCompute = 'BlockCompute',

    // 调整时钟
    AdjustClock = 'AdjustClock',

    // 敲砖块
    HitBrick = 'HitBrick',

    // 鸟笼棋牌
    CageShuffle = 'CageShuffle',

    // 反转记忆
    ReverseMemory = 'ReverseMemory',

    // 卡片记忆
    CardMemory = 'CardMemory',
}

export interface GetQuestionsByTypesRandomInput {
    // 题目类型
    types: string[];

    // 获取的数量
    limit: integer;
}

export interface GetQuestionsByTypesRandomOutput {
    questions: Question[];
}

export interface GetQuestionResourcesByTypesInput {
    // 题目类型
    types: string[];
}

// type QuestionPrefetch struct {
// 	QuestionId   string       `json:"questionId"`
// 	QuestionType QuestionType `json:"questionType"`
// 	Resources    []string     `json:"resources"`
// }
export interface Prefetch {
    questionId: string;
    questionType: QuestionType;
    resources: string[];
}

export interface GetQuestionResourcesByTypesOutput {
    prefetchs: Prefetch[];
}

export interface CheckQuestionAnswerInput {
    // 题目id
    questionId: string;

    // 答案json
    answerJSON: string;
}

export interface CheckQuestionAnswerOutput {
    // 是否正确
    isCorrect: boolean;
}
