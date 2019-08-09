import React, { Component, Dispatch } from 'react';
import {connect} from 'react-redux';
import {getSummoner, getRank, getSummonersMatches} from '../../actions/summonerAction';
import {getAllMatches} from '../../actions/matchAction';
import { RootState } from '../../reducers';
import { Action } from 'redux';
import { Summoner } from '../../models/Summoner';
import SearchBar from '../Control/SearchBar';
import SummonerInfo from '../DataDisplay/SummonerInfo';
import MatchesInfo from '../DataDisplay/MatchesInfo';
import SummonerStats from '../DataDisplay/SummonerStats';
import { Match } from '../../models/Match';

interface State{
}

interface Props{
    getSummoner: Function;
    getRank: Function;
    getSummonersMatches: Function;
    summoner: Summoner;
    matches: Match[];
}

class SearchPage extends Component<Props,State> {
   state={
       loading: false,
       region: ''
   }
    
    setRegion = (region:string) => {
       this.setState({region: region});
    }
    
    render() {
        return (
            <div className="container" style={{minHeight: '70vh'}}>
                <SearchBar region={this.setRegion}/> 
                <div className="row my-2">
                    <div className="col-md-4">
                        <SummonerInfo region={this.state.region}/>
                        {this.props.matches.length>0 && <SummonerStats /> }
                    </div>
                    <div className="col-md-8 pt-2">
                        {this.props.summoner.matchList &&
                        <div>
                            <MatchesInfo region={this.state.region} />
                            
                        </div>
                        }
                    </div>
                </div>
                
            </div>
        )
    }
}
const mapStateToProps = (state: RootState) => {
    return{
        summoner: state.Summoner,
        matches: state.matches
    }
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
    return{
        getSummoner: (summonerName: string, region: string) => dispatch(getSummoner(summonerName,region)),
        getRank: (summonerId: string, region: string) => dispatch(getRank(summonerId,region)),
        getSummonersMatches: (summonerAccId: string, region: string) => dispatch(getSummonersMatches(summonerAccId,region)),
        getAllMatches: (matchList: number[], region:string) => dispatch(getAllMatches(matchList,region))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);