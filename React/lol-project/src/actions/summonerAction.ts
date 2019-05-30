import {GET_SUMMONER, GET_RANK, GetSummoner, GetRank, SET_SUMMONER, SetSummoner, SetRank, SET_RANK} from './types';

export function getSummoner(summonerName: string): GetSummoner{
    return {
        type: GET_SUMMONER,
        summonerName
    };
}

export function setSummoner(summoner : object):SetSummoner{
    return{
        type: SET_SUMMONER,
        summoner
    }
}

export function getRank(summonerId: string): GetRank{
    return {
        type: GET_RANK,
        summonerId
    }
}

export function setRank(rank:string): SetRank{
    return{
        type: SET_RANK,
        rank
    }
}