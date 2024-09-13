import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useMovieData } from "../../hooks/useMovieData";
import MovieInfo from "../components/Single/MovieInfo";
import MovieCasts from "../components/Single/MovieCasts";
import UseSearchMovies from "../../hooks/UseSearchMovies";
import SearchMovies from "../components/SearchMovies";

function SingleMovie() {
    const { id } = useParams();
    const { movies, loading } = useMovieData();
    const movie = movies.find((movie) => movie?.id == id);
    const { searchResults, handleSearch } = UseSearchMovies(movie);

    return (
        <Layout onSearch={handleSearch}>
            {searchResults.length > 0 ? (
                <SearchMovies searchResults={searchResults} />
            ) : (
                <>
                    <MovieInfo movie={movie} />
                    <MovieCasts />
                </>
            )}
        </Layout>
    );
}

export default SingleMovie;
