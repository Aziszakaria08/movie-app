import React from "react";
import { useState, useEffect } from "react";
import { getGenreMovies } from "../services/movieService";
import { MdDateRange } from "react-icons/md";
import Rated from "./Rated";

function FlexMovieItems({ movie }) {
    const [genres, setGenres] = useState([]);

    const genreNames = movie.genre_ids.map((id) => {
        const genre = genres.find((genre) => genre.id === id);
        return genre ? genre.name : "";
    });
    useEffect(() => {
        getGenreMovies().then((result) => {
            setGenres(result);
        });
    }, []);

    return (
        <>
            <div className="flex items-center gap-2 mr-4">
                <span className="text-sm font-medium">
                    {genreNames.join(", ")}
                </span>
            </div>
            <div className="flex gap-5 pt-2 md:pt-4">
                <div className="flex items-center gap-2 ">
                    <MdDateRange className="text-subMain font-bold" />
                    <span className="text-[10px] sm:text-sm font-medium">
                        {movie.release_date}
                    </span>
                </div>
                <Rated movie={movie} />
            </div>
        </>
    );
}

export default FlexMovieItems;
