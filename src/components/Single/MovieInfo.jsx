import React from "react";
import apiConfig from "../../config/apiConfig";

function MovieInfo({ movie }) {
    return (
        <div className="w-full xl:h-screen relative text-white">
            <img
                src={`${apiConfig.baseImageUrl}/${movie?.backdrop_path}`}
                alt={movie?.title}
                className="w-full h-full hidden  xl:inline-block object-cover"
            />
            <div className="xl:bg-main bg-slate-900 flex xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0 ">
                <div className="container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex py-10 gap-8 ">
                    <div className="w-full rounded-md shadow shadow-slate-400">
                        <img
                            src={`${apiConfig.baseImageUrl}/${movie?.poster_path}`}
                            alt={movie?.title}
                            className="rounded-sm"
                        />
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Id, laborum?
                        </p>
                    </div>
                    <button>Download</button>
                </div>
            </div>
        </div>
    );
}

export default MovieInfo;
