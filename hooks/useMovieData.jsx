import { useState, useEffect } from "react";
import { getMovieList, getTopRated } from "../src/services/movieService";

export function useMovieData() {
    const [movies, setMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const [popularMovies, topRated] = await Promise.all([
                getMovieList(),
                getTopRated(),
            ]);
            setMovies(popularMovies);
            setTopRatedMovies(topRated);
        };
        fetchMovies();

        // getMovieList().then((response) => {
        //     console.log("poppular movies: ", response);

        //     setMovies(response);
        // });
        // getTopRated().then((response) => {
        //     setTopRatedMovies(response);
        // });
    }, []);
    return { movies, topRatedMovies };
}
