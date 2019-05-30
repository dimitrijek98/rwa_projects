import {all, call, put, takeEvery} from 'redux-saga/effects';
import { GET_SUMMONER, GetSummoner, GET_MATCH, GetMatch, GET_RANK, GetRank } from '../actions/types';
import { setSummoner } from '../actions/summonerAction';
import {fetchSummoner} from '../services/summoner.service'



function* getSummoner(summonerName: string) {
  const response = yield call(fetchSummoner, summonerName);
  console.log(response.status);
  yield put(setSummoner(response.data));
}

export function* rootSaga() {
  yield all([
    //takeEvery(GET_SUMMONER, getSummoner),
    //takeEvery(GET_MATCH, getMatch),
    //takeEvery(GET_SUMMONERS_MATCHES, getSummonersMatcehs)
  ]);
}