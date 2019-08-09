
import { GET_SUMMONER, GetSummoner, GET_ALL_MATCHES, GetAllMatches } from '../actions/types';
import { setSummoner} from '../actions/summonerAction';
import {fetchSummoner, fetchSummonerRank, fetchSummonersMatches, fetchMatch} from '../services/summoner.service'
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Match } from '../models/Match';
import { addMatches } from '../actions/matchAction';



function* getSummoner(action :GetSummoner) {
  
  const summonerResponse = yield call(fetchSummoner, action.summonerName, action.region);
  const rankResponse = yield call(fetchSummonerRank, summonerResponse.summoner.id, action.region);
  const matchesResponse = yield call(fetchSummonersMatches, summonerResponse.summoner.accountId, action.region);
  console.log(matchesResponse);
  let matchesList: number[] = matchesResponse.matches.matches.map((match: { gameId: number; }) => match.gameId);

  summonerResponse.summoner.rank = rankResponse.rank;
  summonerResponse.summoner.matchList = matchesList;
  yield put(setSummoner(summonerResponse.summoner));
  
}

function* getAllMatches(action: GetAllMatches){
  const allMatches = yield all(action.matchList.map((match:number) =>call(fetchMatch,match,action.region)));
  console.log(allMatches);
  yield all(allMatches.map((match:{error:string,match:Match}) => put(addMatches(match.match))));
}


export function* rootSaga() {
  yield all([
    takeLatest(GET_SUMMONER,getSummoner),
    takeLatest(GET_ALL_MATCHES, getAllMatches),
  ]);
}