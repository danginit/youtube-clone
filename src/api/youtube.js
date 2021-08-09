import axios from "axios";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
    params: {
        part: 'snippet',
        maxResults: 25,
        key: 'AIzaSyCjHr3SHOE3VhaUcdNBV2JvBxEjHEr23pQ'
      }
  });