import React, { Component, Dispatch } from 'react'
import { connect } from 'react-redux';
import { Summoner } from '../../models/Summoner';
import { RootState } from '../../reducers';
import { getAllMatches } from '../../actions/matchAction';
import { Action } from 'redux';

interface Props{
    summoner: Summoner;
    getAllMatches: Function;
    region: string;
}

class SummonerInfo extends Component<Props> {
    state={
        disabled: false
    }
    componentDidMount = () => {
        this.setState({enabled: true});
    }

    findMatches = () =>{
        this.setState({disabled: false});
        this.props.getAllMatches(this.props.summoner.matchList,this.props.region);

    }

    render() {
        
        return (
            <div className ="p-2">
            {this.props.summoner.name && 
            <div className="row border rounded bg-light">
                <div className="col-md-4 text-center pt-2" >
                    <img  className="rounded m-2" src={`http://ddragon.leagueoflegends.com/cdn/9.9.1/img/profileicon/${this.props.summoner.profileIconId}.png`} height="100" width="100"></img>
                    <p className="text-secondary">Level: {this.props.summoner.summonerLevel}</p>
                </div>
                <div className="col-md-8 text-center pt-3">
                    <h3>{this.props.summoner.name}</h3>
                    <h6>{this.props.summoner.rank}</h6>
                    <button className="btn btn-outline-primary" disabled={this.state.disabled} onClick={this.findMatches}>Get Summoners Matches</button>
                </div>
                
            </div>
            
          }
      </div>
        )
    }
}
function mapStateToProps(state: RootState){
    return{
        summoner : state.Summoner
    };
}
function mapDispatchToProps(dispatch: Dispatch<Action>) {
    return{
        getAllMatches: (matchList: number[], region:string) => dispatch(getAllMatches(matchList,region))
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SummonerInfo);