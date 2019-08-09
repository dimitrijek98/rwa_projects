import React, { Component } from 'react'
import { Match } from '../../models/Match';
import { Summoner } from '../../models/Summoner';
import Participants from './Participants';
import ChampAndSpells from './ChampAndSpells';

interface Props{
    match: Match;
    user: Summoner;
}
export default class MatchI extends Component<Props> {

    state = {
        partId : 0,
        champData: { id:'', url:''},
        spell1 :{url:'', image:{full:''}},
        spell2 :{url: '', image:{full:''}}
      }
    
      componentDidMount(){
      console.log(this.props.match.participantIdentities);
        if(this.props.match.participantIdentities && this.props.user){
          this.props.match.participantIdentities.map(participant =>{
            if(participant.player.accountId === this.props.user.accountId)
              this.setState({partId: participant.participantId-1});
          })
          this.spells();
          this.championPicture();
        }
      }
    
      async spells(){
        if(this.props){
          let url = `http://ddragon.leagueoflegends.com/cdn/9.9.1/data/en_US/summoner.json`;
          
          let response = await fetch(url);
          let spell = await response.json();
            console.log(spell);
          
          
          let getSpell = (spellId: number) => {
            let key = Object.keys(spell.data).filter(key => spell.data[key].key == spellId);
            return spell.data[key[0]];
          }
    

          let spell1: {url:string, image:{full:string}} = getSpell(this.props.match.participants[this.state.partId].spell1Id);
          let spell2 :{url:string, image:{full:string}}= getSpell(this.props.match.participants[this.state.partId].spell2Id);
    
          let spell1PictureUrl = `http://ddragon.leagueoflegends.com/cdn/9.9.1/img/spell/${spell1.image.full}`;
          let spell2PictureUrl = `http://ddragon.leagueoflegends.com/cdn/9.9.1/img/spell/${spell2.image.full}`;
          
          spell1.url=spell1PictureUrl;
          spell2.url=spell2PictureUrl;
          
          this.setState({spell1:spell1});
          this.setState({spell2:spell2});
        }
      }
    
      async championPicture(){
        if(this.props){
          let url = `http://ddragon.leagueoflegends.com/cdn/9.9.1/data/en_US/champion.json`;
          
          let response = await fetch(url);
          let champions = await response.json();
        
          
          let champId: number = this.props.match.participants[this.state.partId].championId;
          
          let getChampById= (champId: number) => {
            let key = Object.keys(champions.data).filter(key => champions.data[key].key == champId);
            
            return champions.data[key[0]];
          }
    
          let champData = { id:'', url:'', image:{full:''}};
          champData = getChampById(champId);
          let pictureUrl = `http://ddragon.leagueoflegends.com/cdn/9.9.1/img/champion/${champData.image.full}`;
          champData.url = pictureUrl;
          this.setState({champData:champData});
        }
    
      }
    
      render() {
        return (
          <div>
            { (this.props.match) && (this.state.partId) &&
              <div className={this.props.match.participants[this.state.partId].stats.win?"bg-primary row border rounded mb-1 p-2 text-white":"bg-danger row border rounded mb-1 p-2 text-white"}>
             
                <div className="col-12 border-bottom mb-1">
                  <h3 className="text-white text-cener">{this.props.match.participants[this.state.partId].stats.win?"Victory":"Defeat"}</h3>
                </div>
    
                <div className="col-md-3">
                  <ChampAndSpells champData={this.state.champData} spell1={this.state.spell1} spell2={this.state.spell2}/>
              
                </div>
    
                <div className="col-md-2">
                  <div className="row pt-4">
                    <div className="col-12">
                      <h3>
                        {this.props.match.participants[this.state.partId].stats.kills}/
                        {this.props.match.participants[this.state.partId].stats.deaths}/
                        {this.props.match.participants[this.state.partId].stats.assists}
                      </h3>
                      <p>K/D/A</p>
                    </div>
                  </div>
                </div>
    
                <div className="col-md-7">
                  <Participants match = {this.props.match}/>
                </div>
              
              
            </div>
            } 
          </div>
          
        )
      }
}
