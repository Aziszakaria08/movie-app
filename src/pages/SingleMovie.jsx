import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useMovieData } from "../../hooks/useMovieData";
import MovieInfo from "../components/Single/MovieInfo";
import MovieCasts from "../components/Single/MovieCasts";
import MovieRates from "../components/Single/MovieRates";

function SingleMovie() {
    const { id } = useParams();
    const { movies } = useMovieData();
    const movie = movies.find((movie) => movie.title === id);
    return (
        <Layout>
            <MovieInfo movie={movie} />
            <MovieCasts />
            <MovieRates />
        </Layout>
    );
}

export default SingleMovie;
