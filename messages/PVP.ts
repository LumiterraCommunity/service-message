/**
 * @TJS-type integer
 */
 type Int32 = number;
 type integer = Int32;


import { PlayerInfo, PlayerItemSlot } from "./Player";


export enum PVPType{
    // 匹配模式
    pvpTypeMatch = 'pvpTypeMatch',
    // pk 模式
    pvpTypePk = 'pvpTypePk',
}

export enum PVPPKSessionStatus {
    // 玩家资源加载中
    preloading = 'preloading',

    // 已开始对决
    started = 'started',

    // 对决结束
    ended = 'ended',
}

export enum PVPUserType {
    // guest
    guest = 'guest',

    // 注册玩家
    user = 'user',
}


export enum PVPEndType{
    // 胜负局
    endTypeWin = 'endTypeWin',
    // 平局
    endTypeTie = 'endTypeTie',
}


export interface PVPPlayer {
    id: string;
    type: PVPUserType;
}

export interface PkSessionUITickInput {
    pkSessionId: string;
    player: PVPPlayer;
    data: string;
}

export interface PkSessionUITickOutput {

}

export interface PkSessionDoQuestionInput {
    pkSessionId: string;

    player: PVPPlayer;
  
    questionId: string;

    answerSequentialMatch?: string[];
}

export interface PkSessionDoQuestionOutput {
    // 是否正确
    isCorrect: boolean;
}

export interface PkSessionLoadSuccessInput {
    pkSessionId: string;

    player: PVPPlayer;
}

export interface PkSessionLoadSuccessOutput {

}

export interface PkSessionAgainInput {
    pkSessionId: string;
}
export interface PkSessionAgainOutput {
    pkRoomId: string;
}

export interface GetCurrentPkSessionIdInput {
    player: PVPPlayer;
}

export interface GetCurrentPkSessionIdOutput {
    pkSessionId: string;
}


export interface PlayerAvatar{
    nftId: string;
    cid: integer;
    pos: integer;
    nftJson: string;
}

export interface PvpPlayerProfile{
    playerId: string;
    score: integer;
    baseInfo: PlayerInfo;
    avatars: PlayerAvatar[];
    itemSlots: PlayerItemSlot[];
}

export interface GetPlayerPvpProfileInput {
    playerId: string;
}

export interface GetPlayerPvpProfileOutput {
    profile: PvpPlayerProfile;
}


export interface PvpPlayerRank{
    playerId: string;
    rank: integer;
    score: integer;
    baseInfo: PlayerInfo;
    avatars: PlayerAvatar[];
}

export interface GetPlayerPvpRankInput {
    playerId: string;
}

export interface GetPlayerPvpRankOutput {
    rankList: PvpPlayerRank[];
    selfRank: PvpPlayerRank;
}


export interface PvpHistory{
    pvpType: string;
    winner: string;
    winnerName: string;
    winnerScore: integer;
    loser: string;
    loserName: string;
    loserScore: integer;
    scoreOffset: integer;
    endType: string;
    timeSec: integer;
}

export interface GetPvpHistoryInput {
    playerId: string;
}

export interface GetPvpHistoryOutput {
    historyList: PvpHistory[];
}

export interface PvpSurrenderInput {
    pkSessionId: string;
    playerId: string;
}
export interface PvpSurrenderOutput{
    success: boolean; 
}
