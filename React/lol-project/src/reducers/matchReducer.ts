import {ADD_MATCH, AddMatch, Actions, DELETE_ALL_MATCHES} from '../actions/types'
import { Match } from '../models/Match';


const initialState: Match[] = [];

export default function reducer(state: Match[] = initialState, action: Actions){
    switch(action.type){
        case ADD_MATCH: {
            const {match} = action as AddMatch;
            return [...state, match]
        }
        case DELETE_ALL_MATCHES: {
            return []
        }
        default:
            return state;
    }
}