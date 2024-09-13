import React from "react";
import apiConfig from "../../config/apiConfig";
import FlexMovieItems from "../FlexMovieItems";
import { FaShareAlt, FaPlay } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

function MovieInfo({ movie }) {
    return (
        <div className="w-full xl:h-screen relative text-white ">
            <img
                src={`${apiConfig.baseImageUrl}/${movie?.backdrop_path}`}
                alt={movie?.title}
                className="w-full h-full hidden xl:inline-block object-cover"
            />
            <div className="xl:bg-main bg-slate-900 flex xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0">
                <div className="container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex flex-col py-10 gap-8 ">
                    <div className="w-full rounded-md shadow shadow-slate-400 xl:col-span-1 xl:order-none order-last bg-main ">
                        <img
                            src={`${apiConfig.baseImageUrl}/${movie?.poster_path}`}
                            alt={movie?.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="col-span-2 md:grid grid-cols-5 gap-4 items-center">
                        <div className="col-span-4 flex flex-col px-8 gap-10">
                            <h1 className="xl:text-4xl capitalize font-sans text-2xl font-bold">
                                {movie?.title}
                            </h1>
                            <div className=" flex items-center flex-wrap gap-2 font-medium text-slate-300 ">
                                <div className="flex items-center justify-center mr-2 bg-subMain text-xs px-4 py-2">
                                    HD 4K
                                </div>
                                <FlexMovieItems movie={movie} />
                            </div>
                            <p className="text-white text-sm leading-7">
                                {movie?.overview}
                            </p>
                            <div className="grid sm:grid-cols-5 grid-cols-3 gap-4 p-6 bg-main border border-gray-800 rounded-lg">
                                <div className="flex items-center justify-center gap-2 col-span-1 border-r border-slate-500">
                                    <button className="w-10 h-10 flex items-center justify-center gap-2 rounded-lg bg-white bg-opacity-20">
                                        <FaShareAlt className="w-5 h-5 text-center" />
                                    </button>
                                </div>
                                {/* Language */}
                                <div className="flex items-center justify-center gap-2 col-span-2 font-medium text-sm">
                                    <p>
                                        Language :{" "}
                                        <span className="ml-2 truncate">
                                            {movie?.original_language}
                                        </span>{" "}
                                    </p>
                                </div>
                                <div className="sm:col-span-2 col-span-3 flex justify-end font-medium text-sm">
                                    <Link
                                        to={`/watch/${movie?.id}`}
                                        className="bg-dry hover:bg-subMain transition duration-150 border-2 border-subMain rounded-full w-full gap-4 flex items-center justify-center py-3"
                                    >
                                        <FaPlay /> Watch Trailer
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 mt-2 md:mt-0 flex justify-end">
                            <button className="w-full md:w-1/4 px-8 flex justify-center items-center bg-subMain relative hover:bg-transparent h-20 md:h-64 rounded border-2 border-subMain transition duration-150">
                                <div className="flex text-white items-center justify-center gap-6 uppercase tracking-widest absolute md:rotate-90">
                                    Download <FiLogIn className="w-6 h-6" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieInfo;
