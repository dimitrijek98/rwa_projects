
import { GET_SUMMONER, GetSummoner, GET_ALL_MATCHES, GetAllMatches } from '../actions/types';
import { setSummoner} from '../actions/summonerAction';
import {fetchSummoner, fetchSummonerRank, fetchSummonersMatches, fetchMatch} from '../services/summoner.service'
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Match } from '../models/Match';
import { addMatches } from '../actions/matchAction';



function* getSummoner(action :GetSummoner) {
  
  const summoner = yield call(fetchSummoner, action.summonerName, action.region);
  const rank = yield call(fetchSummonerRank, summoner.id, action.region);
  const matches = yield call(fetchSummonersMatches, summoner.accountId, action.region);  
  
  let matchesList: number[] = matches.matches.map((match: { gameId: number; }) => match.gameId);
  summoner.rank = rank[0]?rank[0].tier:"Unranked";
  summoner.matchList = matchesList;

  yield put(setSummoner(summoner));
    

  
}

function* getAllMatches(action: GetAllMatches){
  const allMatches = yield all(action.matchList.map((match:number) =>call(fetchMatch,match,action.region)));
  yield all(allMatches.map((match:Match) => put(addMatches(match))));
}


export function* rootSaga() {
  yield all([
    takeLatest(GET_SUMMONER,getSummoner),
    takeLatest(GET_ALL_MATCHES, getAllMatches),
  ]);
}