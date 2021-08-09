import React from "react";
import "./VideoItems.css";

const VideoItems = (props) => {
    return (
        <div className="video-item " >
            <img  src={props.imgUrl} alt="" className="ui small image" />
            <div className="content">
                <div className="header" >
                    {props.title}
                </div>
                <div className="description">{props.description}</div>
            </div>
        </div>
    );
}

export default VideoItems;