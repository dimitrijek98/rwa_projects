import {combineReducers} from 'redux';
import summonerReducer from './summonerReducer';
import matchReducer from './matchReducer';
import { Summoner } from '../models/Summoner';
import { Match } from '../models/Match';

export interface RootState {
    Summoner: Summoner,
    matches: Match[]
}

export const rootReducer = combineReducers({
    Summoner: summonerReducer,
    matches: matchReducer
})