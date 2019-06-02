import React, { Component, Dispatch } from 'react'
import { RootState } from '../../reducers';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { getAllMatches } from '../../actions/matchAction';
import { Summoner } from '../../models/Summoner';
import { Match } from '../../models/Match';
import MatchI from './MatchI';

interface Props{
    summoner: Summoner;
    matches: Match[];
    getAllMatches: Function;
    region: string;
}
class MatchesInfo extends Component<Props> {
    
    render() {
        return (
            <div>
                {this.props.matches &&
                    this.props.matches.map((match:Match,index:number) =>
                        <MatchI match={match} user={this.props.summoner} key={index} />
                    )
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
function mapDispatchToProps(dispatch: Dispatch<Action>){
    return{
        getAllMatches: (matchList: number[], region:string) => dispatch(getAllMatches(matchList,region))
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(MatchesInfo);
