/**
 * @Author: Raghu Reddy <raghureddy>
 * @Date:   8/12/17
 * @Email:  sanikommu@gmail.com
 * @Filename: video_list.js
 * @Last modified by:   Raghu Reddy <raghureddy>
 * @Last modified time: 8/12/17
 */


import React from 'react';
import VideoListItem from "./video_list_item";

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
            return (
                <VideoListItem
                    onVideoSelect={props.onVideoSelect}
                    key={video.etag}
                    video={video}/>
            )
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );

};

export default VideoList;