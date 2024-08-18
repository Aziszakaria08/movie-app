import React, { useState } from "react";
import Titles from "../Titles";
import { BsBookmarkStarFill } from "react-icons/bs";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import apiConfig from "../../config/apiConfig";
import { useMovieData } from "../../../hooks/useMovieData";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Star from "../Star";
import { BsCaretRightFill, BsCaretLeftFill } from "react-icons/bs";



function TopRated() {
    const { topRatedMovies } = useMovieData();
    const [nextEl, setNext] = useState(null);
    const [prevEl, setPrev] = useState(null);

    return (
        <div className="my-16">
            <Titles title="Top Rated" Icon={BsBookmarkStarFill} />
            <div className="mt-10">
                <Swiper
                    navigation={{ nextEl, prevEl }}
                    slidesPerView={4}
                    spaceBetween={20}
                    loop={true}
                    autoplay={true}
                    speed={1000}
                    modules={[Navigation, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {topRatedMovies.map((movie, index) => (
                        <SwiperSlide key={index}>
                            <div className="p-4 h-[400px] border border-slate-500 bg-slate-800 rounded-lg overflow-hidden group">
                                <img
                                    src={`${apiConfig.baseImageUrl}/${movie.backdrop_path}`}
                                    alt={movie.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="flex flex-col items-center justify-center px-4 gap-6 absolute inset-0 bg-black group-hover:bg-opacity-50 transition-all duration-300 opacity-0 group-hover:opacity-100">
                                    <button className="flex items-center justify-center w-12 h-12 transition-all duration-300  hover:bg-subMain rounded-full  bg-white bg-opacity-30 text-white">
                                        <FaHeart className="" />
                                    </button>
                                    <Link
                                        to={`/${movie.title}`}
                                        className="font-bold truncate"
                                    >
                                        {movie.title}
                                    </Link>
                                    <div className="flex gap-2 text-star">
                                        <Star value={movie.vote_average} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="w-full pt-10 flex items-center  gap-4 justify-center ">
                    <button
                        className="p-2 rounded-sm bg-subMain hover:bg-slate-800 text-center transition-all duration-300"
                        ref={(node) => setPrev(node)}
                    >
                        <BsCaretLeftFill />
                    </button>

                    <button
                        className="p-2 rounded-sm bg-subMain hover:bg-slate-800 text-center transition-all duration-300"
                        ref={(node) => setNext(node)}
                    >
                        <BsCaretRightFill />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TopRated;
