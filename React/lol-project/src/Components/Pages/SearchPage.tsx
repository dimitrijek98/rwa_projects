import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getSummoner} from '../../actions/summonerAction';


class SearchPage extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center">This is search page</h1>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    summoner: state.summoner
})

export default connect(mapStateToProps, {getSummoner})(SearchPage)