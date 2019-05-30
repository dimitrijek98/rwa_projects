import axios from 'axios'

export function fetchSummoner(summonerName: string){
    return axios.get('/');
}

export function getSummonersMatches(summonerId: string){
    return axios.get('/');
}
