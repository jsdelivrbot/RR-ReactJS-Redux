/**
 * @Author: Raghu Reddy <raghureddy>
 * @Date:   8/12/17
 * @Email:  sanikommu@gmail.com
 * @Filename: index.js
 * @Last modified by:   Raghu Reddy <raghureddy>
 * @Last modified time: 8/12/17
 */

import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyCBR-4Zmy5Bd0dkPVhif3vHt5yeCgBxt_4';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('Telugu old movies')
    }
    videoSearch(searchTerm) {
        YTSearch ({key: API_KEY, term: searchTerm}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
    render() {
        const videoSearch = _.debounce((searchTerm) => { this.videoSearch(searchTerm) }, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    }
}


ReactDOM.render(<App/>, document.querySelector('.container'));