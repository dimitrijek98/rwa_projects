import {Actions, SET_SUMMONER, SetSummoner, SET_RANK, SetRank} from '../actions/types'
import { SummonerInfo } from '../models/SummonerInfo';

const initialState: SummonerInfo = {
    summoner: {},
    rank: ''
}

export default function summonerReducer(state: SummonerInfo = initialState, action: Actions){
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
                ...state,
                summoner
            }
        }
        default:
            return state;
    }
}