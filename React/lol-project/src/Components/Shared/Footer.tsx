import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="bg-primary">
                <div className="container p-4">
                    <div className="row">
                        <div className="col-md-4 mr-4 text-left text-white">
                            <h4><u><strong>About</strong></u></h4>
                            <p>This app provides League of Legends players statistic about their last ten matches. It contains individual statistic for each match, as well as overall statistic.</p>
                        </div>
                        <div className="col-md-2 ml-4 text-left text-white">
                            <h6>
                                <u><strong>Contact</strong></u>
                            </h6>
                            
                            <i className="fas fa-envelope">dimitrije.kostic@elfak.rs</i>
                               
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
