import React, { Component, Dispatch } from 'react'
import { connect } from 'react-redux';
import { Summoner } from '../../models/Summoner';
import { RootState } from '../../reducers';
import { Action } from 'redux';
import { getSummoner, getRank, getSummonersMatches } from '../../actions/summonerAction';
import { deleteAllMatches } from '../../actions/matchAction';

interface Props{
    getSummoner: Function;
    getRank: Function;
    getSummonersMatches: Function;
    summoner: Summoner;
    region: Function;
    deleteAllMatches: Function;
}
interface State{}
class SearchBar extends Component<Props,State> {
    state= {
        user:'',
        region: '',
      }
     
      onClick = () => {
        this.props.region(this.state.region);
        this.props.deleteAllMatches();
        this.props.getSummoner(this.state.user, this.state.region);
        this.setState({user:''});
      }
      onChange = (e: React.FormEvent<HTMLInputElement>) =>{
        this.setState({[e.currentTarget.name]:e.currentTarget.value});
        
      }
    
      onChangeRegion = (ev: React.FormEvent<HTMLSelectElement>) => {
        this.setState({region: ev.currentTarget.value.toLowerCase()});
        
      }
      render() {
        return (
          <React.Fragment>
            <div className="row"style={{marginTop: '10px'}}>
              <div className="col-md-12" >
                <h2 className="text-primary">Enter Summoner name to get stats</h2>
              </div> 
            </div>
           
              <div className="row">
                <input 
                  className="form-control"
                  type="text" 
                  name="user" 
                  style={{ margin: '0 15px'}}
                  placeholder="Summoner name"
                  value={this.state.user}
                  onChange={this.onChange}
                />
              </div>
              
              <div className="row pt-3">
                <div className="col-md-6 offset-md-3">
                <div className="input-group">
                <select className = "form-control" onChange ={this.onChangeRegion}>
                    <option value="RU">Russia</option>
                    <option value="KR">Korea</option>
                    <option value="BR1">Brazil</option>
                    <option value="OC1">Oceania</option>
                    <option value="JP1">Japan</option>
                    <option value="NA1">North America</option>
                    <option value="EUN1">Europe Nordic and East</option>
                    <option value="EUW1">Europe West</option>
                    <option value="TR1">Turkey</option>
                    <option value="LA1">LAS</option>
                    <option value="LA2">LAN</option>
                  </select>
                  <div className="input-group-append">
                  <button
                    onClick={this.onClick}
                    className="btn btn-primary"   
                  ><span className="px-3">Search</span></button>     
                  </div>
                    
                </div>
                  
                </div>
               
              
              </div>
              
        
          </React.Fragment>
          
            
      
          
        );
      }
}

const mapStateToProps = (state: RootState) => {
    return{
        summoner: state.Summoner

    }
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
    return{
        getSummoner: (summonerName: string, region: string) => dispatch(getSummoner(summonerName,region)),
        getRank: (summonerId: string, region: string) => dispatch(getRank(summonerId,region)),
        getSummonersMatches: (summonerAccId: string, region: string) => dispatch(getSummonersMatches(summonerAccId,region)),
        deleteAllMatches: () => dispatch(deleteAllMatches())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);