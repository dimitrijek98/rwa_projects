import {GET_SUMMONER, GET_RANK, GetSummoner, GetRank, SET_SUMMONER, SetSummoner, SetRank, SET_RANK, GetSummonersMatches, GET_SUMMONERS_MATCHES, SetSummonersMatches, SET_SUMMONERS_MATCHES} from './types';
import { Summoner } from '../models/Summoner';

export function getSummoner(summonerName: string, region: string): GetSummoner{
    return {
        type: GET_SUMMONER,
        summonerName,
        region
    };
}

export function setSummoner(summoner : Summoner):SetSummoner{
    return{
        type: SET_SUMMONER,
        summoner
    }
}

export function getSummonersMatches(summonerId: string, region: string): GetSummonersMatches{
    return{
        type: GET_SUMMONERS_MATCHES,
        summonerAccId: summonerId,
        region
    }
}


export function setSummonersMatches(matchList: number[]): SetSummonersMatches{
    return{
        type: SET_SUMMONERS_MATCHES,
        matchList
    }
}

export function getRank(summonerId: string, region: string): GetRank{
    return {
        type: GET_RANK,
        summonerId,
        region
    }
}

export function setRank(rank:string): SetRank{
    return{
        type: SET_RANK,
        rank
    }
}