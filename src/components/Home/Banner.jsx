import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import FlexMovieItems from "../FlexMovieItems";
import { Link } from "react-router-dom";
import apiConfig from "../../config/apiConfig";
import { useMovieData } from "../../../hooks/useMovieData";

function Banner() {
    const { movies } = useMovieData();

    return (
        <div className="relative w-full h-52 sm:h-64 md:h-96 overflow-hidden">
            <Swiper
                direction="vertical"
                slidesPerView={1}
                loop={true}
                speed={1000}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                modules={[Autoplay]}
                className="w-full h-full"
            >
                {movies.slice(0, 6).map((movie, index) => (
                    <SwiperSlide
                        key={index}
                        className="relative w-full h-full flex items-center justify-center "
                    >
                        <img
                            src={`${apiConfig.baseImageUrl}/${movie.backdrop_path}`}
                            alt={movie.title}
                            className="w-full h-full object-cover "
                        />
                        <div className="absolute linear-bg top-0 right-0 left-0 bottom-0  pl-8 sm:pl-32 xl:pl-52 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4">
                            <h1 className="xl:text-4xl md:text-3xl truncate capitalize font-bold sm:text-2xl  ">
                                {movie.title}
                            </h1>
                            <div className="flex items-start flex-col  text-slate-300">
                                <FlexMovieItems movie={movie} />
                            </div>
                            <div className="flex gap-5 items-center">
                                <Link
                                    to={`/`}
                                    className="bg-subMain text-white transition duration-300 hover:text-main py-2 px-5 text-sm rounded-sm"
                                >
                                    Watch
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Banner;
