import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useMovieData } from "../../hooks/useMovieData";
import { getMovieVideos } from "../services/movieService";
import Layout from "../Layout/Layout";
import { IoMdArrowRoundBack } from "react-icons/io";
import UseSearchMovies from "../../hooks/UseSearchMovies";
import SearchMovies from "./SearchMovies";

function MovieTrailer() {
    const [videos, setVideos] = useState(null);
    const { id } = useParams();
    const { movies } = useMovieData();
    //untuk kembali ke singlePage
    const movie = movies.find((movie) => movie?.id == id);
    const { searchResults, handleSearch } = UseSearchMovies([]);

    useEffect(() => {
        const fetchVideos = async () => {
            const result = await getMovieVideos(id);

            const trailerVideo = result.find(
                (video) => video.type === "Trailer"
            );
            setVideos(trailerVideo);
        };
        fetchVideos();
    }, []);

    return (
        <Layout onSearch={handleSearch}>
            {searchResults.length > 0 ? (
                <SearchMovies searchResults={searchResults} />
            ) : (
                <div className="container mx-auto bg-dry p-6 mb-6">
                    <div className="flex items-center justify-center flex-wrap mb-6 gap-3 bg-main rounded border border-gray-800 p-6">
                        <Link
                            to={`/movie/${movie?.id}`}
                            className=" md:text-xl flex justify-start gap-3 items-center font-bold"
                        >
                            <IoMdArrowRoundBack className="w-6 h-6" />
                            {videos?.name}
                        </Link>
                    </div>
                    {videos ? (
                        <iframe
                            className="w-full h-full rounded sm:h-64 md:h-80 lg:min-h-screen"
                            src={`https://www.youtube.com/embed/${videos.key}`}
                            title="Movie Trailer"
                            allowFullScreen
                        />
                    ) : (
                        <div className=""></div>
                    )}
                </div>
            )}
        </Layout>
    );
}

export default MovieTrailer;
