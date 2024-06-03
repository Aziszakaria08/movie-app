import { Carousel } from "flowbite-react";


export const Slider = ({trendingMovies}) => {
    return (
        <div className=" max-w-screen-2xl mx-auto min-h-screen h-screen bg-black">
            <Carousel className=" h-full w-full mx-auto lg:px-96 lg:pt-14">
                {trendingMovies.map((movie) => (
                    <div
                        key={movie.id}
                        className="flex w-full h-full items-center justify-center"
                    >
                        <img
                            src={`${
                                import.meta.env.VITE_REACT_APP_BASEIMGURL
                            }/${movie.poster_path}`}
                            alt={movie.title}
                            className="w-[1024px] h-full object-fill rounded-lg "
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};
