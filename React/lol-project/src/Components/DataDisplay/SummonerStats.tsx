import React, { Component } from 'react'
import { Summoner } from '../../models/Summoner';
import { Match } from '../../models/Match';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import ChampStat from './ChampStat';


interface Props{
    summoner: Summoner
    matches: Match[];
}
class SummonerStats extends Component<Props> {
    state = {
        champions:[],
        matches:[],
        version :'',
        win : 0,
        lose : 0
      }
     
      componentDidUpdate(){
        if(this.state.matches !== this.props.matches){
          this.setState({matches : this.props.matches});
          this.makeStat();
        }
      }
    
      async makeStat(){
        let url = `http://ddragon.leagueoflegends.com/cdn/9.9.1/data/en_US/champion.json`;
        let response = await fetch(url);
        let champions = await response.json();
        let win = 0;
        let lose = 0;
        let champs : {champ:string,count:number,win:number, lose:number}[] = [];
        
        this.props.matches.map(match => {
          let partId= 0;
          match.participantIdentities.map(participant =>{
            if(participant.player.accountId === this.props.summoner.accountId)
              partId = participant.participantId-1;
          });
          match.participants[partId].stats.win?win++:lose++;
    
          let champId = match.participants[partId].championId;
    
          let getChampById = (champId:number) => {
            let key = Object.keys(champions.data).filter(key => champions.data[key].key == champId);
            return champions.data[key[0]];
          }
    
          let champData = getChampById(champId);
          
          if(champs[champData.id]){
            champs[champData.id].count++;
            match.participants[partId].stats.win?champs[champData.id].win++:champs[champData.id].lose++;
          }
          else
            champs[champData.id] = {
              champ: champData,
              count: 1,
              win: match.participants[partId].stats.win?1:0,
              lose: match.participants[partId].stats.win?0:1,
            };
        })
        
        champs = Object.values(champs).sort((a,b)=>b.count-a.count);
        console.log(champs);
        this.setState({champions : champs});
        this.setState({win : win});
        this.setState({lose : lose});
      }
    
      render() {
        
        return (
          <div className ="px-2 mb-1">
            {this.props.summoner.matchList &&
            <div className="row border rounded bg-light">
                <div className="col-12">
                  <h3 className="border-bottom pb-2">Win Rate</h3>
                </div>
              
                <div className="col-12 pt-5">
                  <h5>W:{this.state.win} / L:{this.state.lose}</h5>
                  <p>{((this.state.win/10)*100).toFixed(2)}%</p>
                </div>
                
              <div className="col-12">
                <h3 className="border-bottom pb-2">Most Used Champions</h3>
              </div>
              <div className="col-12">
              {this.props.matches && 
                this.state.champions.slice(0,3).map((value,index) => 
                  <div className="mt-3">
                    <ChampStat key={index} champStat = {value} />
                  </div>
                )}
              </div>
            </div>
            }
          </div>
          
        )
      }
}
function mapStateToProps(state : RootState){
    return{
        summoner: state.Summoner,
        matches: state.matches
    }
}
export default connect(mapStateToProps)(SummonerStats);