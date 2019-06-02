import { GET_MATCH, GetMatch, ADD_MATCH, AddMatch, GET_ALL_MATCHES, DELETE_ALL_MATCHES} from "./types";
import { Match } from "../models/Match";

export function getMatch(matchId: number, region:string): GetMatch {
    return {
        type: GET_MATCH,
        matchId,
        region
    }
}  

export function addMatches(match: Match): AddMatch {
    return {
        type: ADD_MATCH,
        match
    }
}  

export function getAllMatches(matchList: number[], region:string){
    return {
        type: GET_ALL_MATCHES,
        matchList,
        region,
    }
}
export function deleteAllMatches(){
    return{
        type: DELETE_ALL_MATCHES
    }
}