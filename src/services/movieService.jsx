import axios from "axios";
import apiConfig from "../config/apiConfig";
// //    cara memanggil .env
// const api_key = import.meta.env.VITE_REACT_APP_APIKEY;
// const baseurl = import.meta.env.VITE_REACT_APP_BASEURL;
// const token = import.meta.env.VITE_REACT_APP_TOKEN;

export const getMovieList = async () => {
    // memanggil data yang ada pada api
    const movie = await axios.get(
        `${apiConfig.baseurl}/discover/movie?&page=1&${apiConfig.api_key}`,
        {
            headers: {
                Authorization: `Bearer ${apiConfig.token}`,
                Accept: "application/json",
            },
        }
    );
    return movie.data.results;
};

export const getTopRated = async () => {
    const movie = await axios.get(
        `${apiConfig.baseurl}/movie/top_rated?&page=1&api_key=${apiConfig.api_key}`,
        {
            headers: {
                Authorization: `Bearer ${apiConfig.token} `,
                Accept: `application/json`,
            },
        }
    );
    return movie.data.results;
};

export const getGenreMovies = async () => {
    const movie = await axios.get(
        `${apiConfig.baseurl}/genre/movie/list?api_key=${apiConfig.api_key}&language=en-US`
    );
    return movie.data.genres;
};
