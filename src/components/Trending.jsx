import { forwardRef } from "react";

export const Trending = forwardRef(({ trendingMovies }, ref) => {
    return (
        <div
            className=" bg-gradient-to-br from-black via-red-950 to-slate-900 pt-12"
            ref={ref}
        >
            <h1 className="text-slate-50 font-serif px-14 py-8 font-bold text-2xl text-center">
                TRENDING
            </h1>
            <div className="container flex items-center justify-center flex-wrap gap-8  mx-auto px-6">
                {trendingMovies.map((movie) => {
                    return (
                        <div
                            key={movie.id}
                            className="rounded-xl shadow-lg shadow-black overflow-hidden border max-w-96 h-[750px]"
                        >
                            <img
                                src={`${
                                    import.meta.env.VITE_REACT_APP_BASEIMGURL
                                }/${movie.poster_path}`}
                                alt={movie.title}
                                className="w-full"
                            />
                            <h2 className="text-slate-50 font-serif text-2xl font-bold text-center p-2">
                                {movie.title}
                            </h2>
                            <p className="text-slate-50 px-2">
                                {movie.overview}
                            </p>
                            <p className="text-red-700 px-2">
                                {movie.release_date}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
});

Trending.displayName = "Trending";
