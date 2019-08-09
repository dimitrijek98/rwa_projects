import axios from 'axios';
import { baseURL } from '../Config';

export function fetchSummoner(summonerName: string, region: string){
   return axios.get(`${baseURL}/summoner`,{
            params:{
                name: summonerName,
                region: region
            }}
        )
    .then(response => response.data);
}

export function fetchSummonerRank(summonerId: string, region: string){
    
   return axios.get(`${baseURL}/summonerRank`,{
        params:{
            summonerId: summonerId,
            region: region
        }}
    )
        .then(response => response.data);
}

export function fetchSummonersMatches(summonerAccId: string, region: string){
    return axios.get(`${baseURL}/summonerMatches`,{
        params:{
            accountId: summonerAccId,
            region: region
        }}
    )
        .then(response => response.data);

}

export function fetchMatch(matchId: number, region: string){
    return axios.get(`${baseURL}/match`,{
        params:{
            matchId: matchId,
            region: region
        }}
    )
        .then(response => response.data);
}
