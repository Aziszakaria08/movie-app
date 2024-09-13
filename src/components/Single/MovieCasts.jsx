import React, { useEffect, useState } from "react";
import Titles from "../Titles";
import { IoMdPeople } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../services/movieService";
import apiConfig from "../../config/apiConfig";

function MovieCasts() {
    const [cast, setCast] = useState([]);

    const { id } = useParams();
    useEffect(() => {
        const fetchMovieCast = async () => {
            const result = await getMovieCredits(id);
            setCast(result);
        };
        fetchMovieCast();
    }, []);

    return (
        <div className="container mx-auto w-full mb-6">
            <div className="my-12">
                <Titles title="Casts" Icon={IoMdPeople} />
                <div className="mt-10">
                    <Swiper
                        autoplay={{ delay: 1000, disableOnInteraction: false }}
                        loop={true}
                        speed={1000}
                        modules={[Autoplay]}
                        spaceBetween={10}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            400: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                            1280: {
                                slidesPerView: 5,
                                spaceBetween: 30,
                            },
                        }}
                    >
                        {cast.slice(0, 10).map((user, index) => {
                            // console.log(user);

                            return (
                                <SwiperSlide key={index}>
                                    <div className="w-full p-3 text-xs italic font-bold text-slate-300 flex items-center flex-col justify-center gap-2 bg-dry border border-gray-800 rounded tracking-widest">
                                        <img
                                            src={`${apiConfig.baseImageUrl}/${user?.profile_path}`}
                                            alt={user.name}
                                            className="w-full h-64 object-cover rounded mb-1"
                                        />
                                        <p>{user.name}</p>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default MovieCasts;
