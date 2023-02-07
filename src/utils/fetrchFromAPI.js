import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    method: 'GET',
    params: {
      regionCode: 'US',
      maxResults: '50',
      order: 'date'
    },
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY_VIDEOS,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  

  export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data
  }