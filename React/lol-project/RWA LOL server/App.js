const express = require('express');
const app = express();
const axios = require('axios');
const config = require('./Config');
const cors = require('cors');


app.use(cors());

app.listen(3200, function () {
  console.log('App listening on 3200')
})

app.use(express.static('./profileIcons'))


app.get('/summoner',async function (req,res) {
  let playerName = req.query.name;
  let playerRegion = req.query.region;
  let response = {
    summoner: {},
    error: ''
  };

  axios.get(encodeURI(`https://${playerRegion}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${playerName}?api_key=${config.api_key}`))
    .then(player =>{
      if (!player) {
        response.error = 'Summoner not found';
        res.json(response);
      } else {
        response.summoner= player.data;
        res.json(response);
      }
    } )
    .catch(err => {})

})


app.get('/summonerRank',async function (req,res) {
  let summonerId = req.query.summonerId;
  let playerRegion = req.query.region;
  let response = {
    summoner: {},
    error: ''
  };
  axios.get(encodeURI(`https://${playerRegion}.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${config.api_key}`))
    .then(ranking => {
      response.rank = ranking.data[0] ? ranking.data[0].tier + ' ' + ranking.data[0].rank : 'Unranked';
      res.json(response);
    })
    .catch(err => {})
})

app.get('/summonerMatches',async function (req,res) {
  let accountId = req.query.accountId;
  let playerRegion = req.query.region;
  let response = {
    matches: [],
    error: ''
  };
  axios.get(encodeURI(`https://${playerRegion}.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?endIndex=10&api_key=${config.api_key}`))
    .then(matches => {
      response.matches = matches.data;
      res.json(response);
    })
    .catch(err => {})
})

app.get('/match',async function (req,res) {
  let matchId = req.query.matchId;
  let playerRegion = req.query.region;
  let response = {
    match: {},
    error: ''
  };
  axios.get(encodeURI(`https://${playerRegion}.api.riotgames.com/lol/match/v4/matches/${matchId}?api_key=${config.api_key}`))
    .then( match => {
      response.match = match.data;
      res.json(response);
    })
    .catch(err => {})

})


// app.get('/', async function (req, res) {
//   let playerName = req.query.name;
//   let playerRegion = req.query.reg;
//   let returnData = {
//     player: null,
//     matches: [],
//     error: ''
//   };
//
//   let playerDataResponse = await getPlayerData(playerName, playerRegion);
//   if (!playerDataResponse) {
//     returnData.error = 'Player not found';
//     await res.json(returnData);
//   } else {
//     let playerData = playerDataResponse.data;
//     let playerDivisionResponse = await getPlayerDivision(playerData, playerRegion);
//     playerData.rank = playerDivisionResponse.data[0] ? playerDivisionResponse.data[0].tier + ' ' + playerDivisionResponse.data[0].rank : 'Unranked';
//     returnData.player = playerData;
//
//     let matchesResponse = await getMatchesByAccId(playerData.accountId, playerRegion);
//     let matchesByAccId = matchesResponse.data;
//     for (let i = 0; i < 10; i++) {
//       let findMatchResponse = await getMatchById(matchesByAccId.matches[i].gameId, playerRegion);
//       let matchData = findMatchResponse.data;
//       returnData.matches.push(matchData);
//     }
//     await res.json(returnData);
//   }
// })

async function getPlayerData (param, paramReg) {
  let url = `https://${paramReg}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${param}?api_key=${config.api_key}`;
  return axios.get();
}

async function getPlayerDivision (playerId, paramReg) {
  let url = `https://${paramReg}.api.riotgames.com/lol/league/v4/entries/by-summoner/${playerId}?api_key=${config.api_key}`;
  return axios.get(encodeURI(url));
}

async function getMatchesByAccId (accId, paramReg) {
  return axios.get(`https://${paramReg}.api.riotgames.com/lol/match/v4/matchlists/by-account/${accId}?endIndex=10&api_key=${config.api_key}`);
}

async function getMatchById (gameId, paramReg) {
  return axios.get(`https://${paramReg}.api.riotgames.com/lol/match/v4/matches/${gameId}?api_key=${config.api_key}`);
}







