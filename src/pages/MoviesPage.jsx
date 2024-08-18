import React from "react";
import Layout from "../Layout/Layout";
import { useMovieData } from "../../hooks/useMovieData";
import ListPopularMovie from "../components/ListPopularMovies";
import Titles from "../components/Titles";
// import { BsCollectionFill } from "react-icons/bs";

function MoviesPage() {
    const { movies } = useMovieData();
    // console.log(movies);

    return (
        <Layout>
            <div className="container px-2 mx-auto min-h-screen mb-6">
                <h2 className="text-xl font-bold text-center">
                    Total{" "}
                    <span className="text-subMain"> {movies.length} </span>items
                    found
                </h2>
                <div className="grid mt-8 sm:mt-4 grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
                    {movies.map((movie, index) => (
                        <ListPopularMovie movie={movie} key={index} />
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default MoviesPage;
