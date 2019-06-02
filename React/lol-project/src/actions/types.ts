import {Action} from 'redux';
import { Summoner } from '../models/Summoner';
import { Match } from '../models/Match';

export const GET_SUMMONER = 'GET_SUMMONER';
export const SET_SUMMONER = 'SET_SUMMONER';

export const GET_RANK = 'GET_RANK';
export const SET_RANK = 'SET_RANK';

export const GET_SUMMONERS_MATCHES = 'GET_SUMMONERS_MATCHES';
export const SET_SUMMONERS_MATCHES = 'SET_SUMMONERS_MATCHES';

export const GET_MATCH = 'GET_MATCH';
export const ADD_MATCH = 'ADD_MATCH';

export const GET_ALL_MATCHES = "GET_ALL_MATCHES"; 
export const DELETE_ALL_MATCHES = "DELETE_ALL_MATCHES";


export interface GetSummoner extends Action<string> {
    summonerName: string,
    region: string
}

export interface SetSummoner extends Action<string> {
    summoner: Summoner
}

export interface GetRank extends Action<string> {
    summonerId: string,
    region: string
}

export interface SetRank extends Action<string>{
    rank: string
}

export interface GetSummonersMatches extends Action<string>{
    summonerAccId: string,
    region: string
}

export interface SetSummonersMatches extends Action<string>{
    matchList: number[]
}

export interface GetMatch extends Action<string> {
    matchId: number,
    region: string
}

export interface AddMatch extends Action<string>{
    match: Match
}

export interface GetAllMatches extends Action<string>{
    matchList: number[],
    region:string
}

export interface DeleteAllMatches extends Action<string>{
   
}




export type Actions = GetMatch | GetRank | GetSummoner | AddMatch | SetSummoner | SetRank | SetSummonersMatches | GetSummonersMatches | GetAllMatches | DeleteAllMatches;