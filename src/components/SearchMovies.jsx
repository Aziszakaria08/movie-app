import React from "react";
import ListPopularMovies from "../components/ListPopularMovies";
import TotalItemsFound from "./TotalItemsFound";

function SearchMovies({ searchResults }) {
    return (
        <>
            <TotalItemsFound item={searchResults} />
            <div className="grid mt-6 sm:mt-12 grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
                {searchResults.map((movie, index) => {
                    console.log(movie);
                    return <ListPopularMovies key={index} movie={movie} />;
                })}
            </div>
        </>
    );
}

export default SearchMovies;
