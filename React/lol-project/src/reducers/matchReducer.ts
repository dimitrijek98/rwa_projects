import {ADD_MATCH, AddMatch, Actions} from '../actions/types'


const initialState: object[] = []

export default function matchReducer(state: object[] = initialState, action: Actions){
    switch(action.type){
        case ADD_MATCH: {
            const {match} = action as AddMatch;
            return [...state, match]
        }
        default:
            return state;
    }
}