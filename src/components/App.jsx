import React, {useState, useEffect} from "react";
import VideoSearch from "./VideoSearch";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";
import youtube from "../api/youtube";


const App = (props) => {

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [term, setTerm] = useState('videos');

    const handleOnVideoSelect = (video) => {
        // console.log("selected video",video);
        setSelectedVideo(video);
    }

    const handleSearch = async (term) => {
        const response = await youtube.get('/search', { params: { q: term } });
        // console.log(response);
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);

    }

    useEffect(() => {
        handleSearch(term);
    },[]);

    useEffect(() => {
        handleSearch(term);
    },[term]);

    return(
        <div className="ui grid container">
            <div className="sixteen wide column" >
                <VideoSearch onSearch={(term) => setTerm(term)} />
            </div>
            <div className="row" >
                <div className="ten wide column" >
                    <VideoPlayer selectedVideo={selectedVideo}/>
                </div>
                <div className="six wide column" >
                    <VideoList videos={videos} onVideoSelect={handleOnVideoSelect} />
                </div>
            </div>
            
        </div>
    );
}




export default App;