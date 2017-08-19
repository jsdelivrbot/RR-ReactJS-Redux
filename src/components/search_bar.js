/**
 * @Author: Raghu Reddy <raghureddy>
 * @Date:   8/12/17
 * @Email:  sanikommu@gmail.com
 * @Filename: search_bar.js
 * @Last modified by:   Raghu Reddy <raghureddy>
 * @Last modified time: 8/12/17
 */

import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { searchTerm: ''}
    }
    render () {
        return (
            <div className="search-bar">
                <input
                    value={this.state.searchTerm}
                    onChange={ (event) => this.onInputChange(event.target.value)}/>
            </div>
        )
    }

    onInputChange(searchTerm) {
        this.setState({searchTerm});
        this.props.onSearchTermChange(searchTerm);
    }
}

export default SearchBar;