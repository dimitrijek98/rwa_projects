import React, { Component } from 'react'
import { Player } from '../../models/Player';
interface Props{
    participant: Player
}
export default class RightParticipant extends Component<Props> {
    
    render() {
        return (
          <div className="text-right">
            <a> {this.props.participant.summonerName} </a><img  className="rounded" src={`http://ddragon.leagueoflegends.com/cdn/9.9.1/img/profileicon/${this.props.participant.profileIcon}.png`} height="20" width="20"></img>
          </div>
        )
      }
}
