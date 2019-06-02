
import { API_KEY } from '../Config';

export function fetchSummoner(summonerName: string, region: string){
    console.log('summoner');
    const url = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`
    return fetch(encodeURI(url))
    .then(response => response.json());
}

export function fetchSummonerRank(summonerId: string, region: string){
    
    let url = `https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${API_KEY}`;
    console.log(url);
    return fetch(encodeURI(url))
    .then(response => response.json());
}

export function fetchSummonersMatches(summonerAccId: string, region: string){
    console.log('matcehs');
    let url = `https://${region}.api.riotgames.com/lol/match/v4/matchlists/by-account/${summonerAccId}?endIndex=10&api_key=${API_KEY}`;
    return fetch(encodeURI(url))
    .then(response => response.json());
}

export function fetchMatch(matchId: number, region: string){
    console.log(`Match ${matchId}`);
    let url = `https://${region}.api.riotgames.com/lol/match/v4/matches/${matchId}?api_key=${API_KEY}`;
    return fetch(encodeURI(url))
    .then(response => response.json());
}
