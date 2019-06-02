import React, { Component } from 'react'
import { Player } from '../../models/Player';
interface Props{
    participant: Player
}
export default class LeftParticipant extends Component<Props> {
   
    render() {
        return (
          <div className="text-left">
            <img  className="rounded" src={`http://ddragon.leagueoflegends.com/cdn/9.9.1/img/profileicon/${this.props.participant.profileIcon}.png`} height="20" width="20"></img><a>  {this.props.participant.summonerName}</a>
          </div>
        )
      }
}
