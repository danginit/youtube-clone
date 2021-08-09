import React from "react";
import VideoItems from "./VideoItems";

const VideoList = (props) => {
    const videos = props.videos;
    console.log(props.videos);

    return(
        <div className="ui relaxed divided list" >
            {videos.map((video) => {
                return(
                    <div className="item" key={video.etag} onClick={() => props.onVideoSelect(video)} ><VideoItems key={video.etag} imgUrl={video.snippet.thumbnails.default.url} title={video.snippet.title} description={video.desc} /></div>
                );
            })}
            
        </div>
    );
}

export default VideoList;