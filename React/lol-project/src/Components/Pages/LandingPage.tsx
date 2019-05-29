import React, { Component } from 'react'

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron text-white text-left d-flex align-items-start mb-0">
                    <div className="container pt-3"> 
                        <h1 className="display-4">Welcome Summoners</h1>
                        <p className="lead">This site is here to help you see your statistic in order to improve your skills.</p>
                        <p>It's easy! Only thing you need is your Summoner name.</p>
                        <a className="btn btn-primary btn-lg mt-4" href="/search" role="button">See your statistic</a>
                    </div>
                </div>
            </div>
                
        )
    }
}
