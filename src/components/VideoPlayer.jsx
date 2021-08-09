import React from "react";

const VideoPlayer = (props) => {

    
    if(!props.selectedVideo){
        return <div>Loading...</div>
    }

    console.log("selectd", props);
    const videoId = props.selectedVideo.id.videoId;
    const videoSource = `https://www.youtube.com/embed/${videoId}`;

    return(
        <div>
            <div className="ui embed" >
                <iframe src={videoSource} frameBorder="0" autoPlay></iframe>
            </div>
            <div className="content"  >
                <div className="ui mideum header" style={{padding: '5px 0px'}} >
                    {props.selectedVideo.snippet.title}
                </div>
                <div className="description">
                    {props.selectedVideo.snippet.description}
                </div>
                
            </div>
        </div>
    );
}

export default VideoPlayer;