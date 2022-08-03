import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3/";
const { REACT_APP_TMDB_API_KEY } = "f438e857a5e3b2d69c84dda35d9cd7e7";

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: REACT_APP_TMDB_API_KEY,
  },
});

export default tmdb;
