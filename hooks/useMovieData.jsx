import { useState, useEffect } from "react";
import { getMovieList, getTopRated } from "../src/services/movieService";

export function useMovieData() {
    const [movies, setMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                const [popularMovies, topRated] = await Promise.all([
                    getMovieList(),
                    getTopRated(),
                ]);
                setMovies(popularMovies);
                setTopRatedMovies(topRated);
            } catch (err) {
                console.error("failed to fetch movies", err);
            } finally {
                setLoading(false);
            }
        };
        fetchMovies();
    }, []);
    return { movies, topRatedMovies, loading };
}
