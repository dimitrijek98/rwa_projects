import React, { Component } from 'react'
interface Props{
    champData : {
        id:string;
        url:string
    }
    spell1:{
        url:string
    }
    spell2:{
        url:string
    }
}
export default class ChampAndSpells extends Component<Props> {
    render() {
        return (
          <div className="row pt-4">
            <div className="col-6 pr-1 text-right">
                <img className="rounded-circle" title={this.props.champData.id} src={this.props.champData.url} height="50" width="50"/>
                <p>{this.props.champData.id}</p>
            </div>
            <div className="col-6 pl-1 text-left">
                <img  className="rounded mb-1" src={this.props.spell1.url} height="32" width="32"/>
                <br/>
                <img  className="rounded" src={this.props.spell2.url} height="32" width="32"/>
            </div>
          </div>
        )
      }
}
