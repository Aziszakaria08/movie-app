import axios from "axios";

//    cara memanggil .env
const api_key = import.meta.env.VITE_REACT_APP_APIKEY;
const baseurl = import.meta.env.VITE_REACT_APP_BASEURL;
const token = import.meta.env.VITE_REACT_APP_TOKEN;

export const getMovieList = async () => {
    // memanggil data yang ada pada api
    const movie = await axios.get(
        `${baseurl}/discover/movie?&page=1&${api_key}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
            },
        }
    );
    return movie.data.results;
};

