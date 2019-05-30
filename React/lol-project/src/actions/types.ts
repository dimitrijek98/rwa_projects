import {Action} from 'redux';
export const GET_SUMMONER = 'GET_SUMMONER';
export const GET_MATCH = 'GET_MATCH';
export const GET_RANK = 'GET_RANK';
export const SET_SUMMONER = 'SET_SUMMONER';
export const ADD_MATCH = 'ADD_MATCH';
export const SET_RANK = 'SET_RANK';


export interface GetSummoner extends Action<string> {
    summonerName: string
}

export interface GetMatch extends Action<string> {
    matchId: string
}

export interface GetRank extends Action<string> {
    summonerId: string
}

export interface SetSummoner extends Action<string> {
    summoner: object
}

export interface AddMatch extends Action<string>{
    match: object
}

export interface SetRank extends Action<string>{
    rank: string
}

export type Actions = GetMatch | GetRank | GetSummoner | AddMatch | SetSummoner | SetRank;