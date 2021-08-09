import React, {useState, useRef,useEffect} from "react";
// const KEY = "AIzaSyCjHr3SHOE3VhaUcdNBV2JvBxEjHEr23pQ";
// const url = "https://www.googleapis.com/youtube/v3/search";

// const hit = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY] HTTP/1.1";

const VideoSearch = (props) => {

    const [searchTerm, setSearchTerm] = useState('');

    const inputEl = useRef(null);

    const onSearchSubmit =  (event) => {
        event.preventDefault();
        props.onSearch(searchTerm);
    }

    useEffect(() => {
        inputEl.current.focus();
    }, []);

    return (
        <div>
            <form className="ui form" onSubmit={onSearchSubmit}>
                <div className="field">
                    <input ref={inputEl} type="text" placeholder="Search" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
                </div>
                    
            </form>
            
        </div>
   );
}



export default VideoSearch;