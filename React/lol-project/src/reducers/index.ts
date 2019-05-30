import {combineReducers} from 'redux';
import summonerReducer from './summonerReducer';
import matchReducer from './matchReducer';
import { SummonerInfo } from '../models/SummonerInfo';

export interface RootState {
    summonerInfo: SummonerInfo,
    matches: object[]
}

export const rootReducer = combineReducers({
    summoner: summonerReducer,
    marches: matchReducer
})