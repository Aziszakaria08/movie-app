import React from "react";
import { Link } from "react-router-dom";
import apiConfig from "../config/apiConfig";
import Rated from "./Rated";

function ListPopularMovies({ movie }) {
    return (
        <div className="border border-slate-400 p-1 hover:scale-95 transition-all duration-300 relative rounded-sm gap-4 shadow-md shadow-gray-800">
            <Link to={`/movie/${movie?.title}`} className="w-full">
                <img
                    src={`${apiConfig.baseImageUrl}/${movie?.backdrop_path}`}
                    alt={movie.title}
                    className="w-full h-64 object-cover"
                />
            </Link>
            <div className="absolute flex items-center justify-between bottom-0 right-0 left-0 p-4 bg-opacity-50 bg-main">
                <h1 className="font-bold">{movie.title}</h1>
                <Rated movie={movie} />
            </div>
        </div>
    );
}

export default ListPopularMovies;
