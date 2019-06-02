import React, { Component } from 'react'
import { Match } from '../../models/Match';
import { Participant } from '../../models/Participant';
import LeftParticipant from './LeftParticipant';
import RightParticipant from './RightParticipant';
interface Props{
    match: Match
}
export default class Participants extends Component<Props> {
    state = {
        red : [],
        blue: [],
    }
    componentDidMount(){
        let blueTeam = this.props.match.participants.filter(participant => participant.teamId === 100);
        let redTeam = this.props.match.participants.filter(participant => participant.teamId === 200);
        this.setState({blue:blueTeam});
        this.setState({red:redTeam});
    }
  render() {

    return (
        
      <div>
        { this.props.match &&
        <div className="row"> 
            <div className="col-6">
            {
                this.state.blue.map((participant: Participant,index:number) =>
                    <LeftParticipant key = {index} participant={this.props.match.participantIdentities[participant.participantId-1].player}/>)
                
            }
            </div>
            <div className="col-6">
            {
                this.state.red.map((participant: Participant,index:number) =>
                    <RightParticipant key = {index} participant={this.props.match.participantIdentities[participant.participantId-1].player}/>)
            }
            </div>
        </div>
        }
      </div>
    )
  }
}
