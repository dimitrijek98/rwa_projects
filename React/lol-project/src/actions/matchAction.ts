import { GET_MATCH, GetMatch, ADD_MATCH, AddMatch} from "./types";

export function getMatch(matchId: string): GetMatch {
    return {
        type: GET_MATCH,
        matchId
    }
}  

export function addMatches(match: object): AddMatch {
    return {
        type: ADD_MATCH,
        match
    }
}  