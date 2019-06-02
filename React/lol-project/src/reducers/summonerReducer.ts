import {Actions, SET_SUMMONER, SetSummoner, SET_RANK, SetRank, SET_SUMMONERS_MATCHES, SetSummonersMatches} from '../actions/types'

import { Summoner } from '../models/Summoner';

const initialState: Summoner = {
    
        profileIconId: 0,
        name: '',
        summonerLevel: 0,
        accountId: '',
        id: '',
        rank: '',
        matchList: [],
        
    
    
}

export default function reducer(state: Summoner = initialState, action: Actions){
    switch(action.type){
        case SET_RANK:{
            const {rank} = action as SetRank
            return{
                ...state,
                rank
            }
        }
        case SET_SUMMONER:{
            const {summoner} = action as SetSummoner;
            return {
                ...summoner 
            }
        }
        case SET_SUMMONERS_MATCHES:{
            const { matchList } = action as SetSummonersMatches;
            return {
                ...state,
                matchList
            }
        }
        default:
            return state;
    }
}