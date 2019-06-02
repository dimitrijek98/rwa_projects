import React, { Component } from 'react'
interface Props{
    champStat:{
        champ:{id:string},
        count: number,
        win: number,
        lose: number
    }
}
export default class ChampStat extends Component<Props> {
     render() {
    return (
      <div className="m-1">
        <div className="row">
            <div className="col-4">
                <img 
                    className="rounded" 
                    title={this.props.champStat.champ.id} 
                    src={`http://ddragon.leagueoflegends.com/cdn/9.9.1/img/champion/${this.props.champStat.champ.id}.png`} 
                    height="60" width="60"
                />
            </div>
            <div className="col-8">
                <h5 className="mb-0">{this.props.champStat.champ.id}</h5>
                <p className = "mb-0 small text-secondary">{this.props.champStat.count>1?this.props.champStat.count +" times":this.props.champStat.count + " time"}</p>
                <p className="mb-0" >{((this.props.champStat.win/this.props.champStat.count)*100).toFixed(2)}% ({this.props.champStat.win}W/{this.props.champStat.lose}L)</p>
            </div>
        </div>
        <hr/>
      </div>
    )
  }
}
