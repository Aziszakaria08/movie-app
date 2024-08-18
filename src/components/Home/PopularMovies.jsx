import React from "react";
import Titles from "../Titles";
import { BsCollectionFill } from "react-icons/bs";
import { useMovieData } from "../../../hooks/useMovieData";
import ListPopularMovies from "../ListPopularMovies";

function PopularMovies() {
    const { movies } = useMovieData();
    return (
        <div className="my-16">
            <Titles title="Popular Movies" Icon={BsCollectionFill} />
            <div className="grid mt-6 sm:mt-12 grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
                {movies.slice(0, 8).map((movie, index) => (
                    <ListPopularMovies movie={movie} key={index} />
                ))}
            </div>
        </div>
    );
}

export default PopularMovies;
