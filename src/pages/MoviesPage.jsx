import Layout from "../Layout/Layout";
import { useMovieData } from "../../hooks/useMovieData";
import ListPopularMovie from "../components/ListPopularMovies";
import UseSearchMovies from "../../hooks/UseSearchMovies";
import TotalItemsFound from "../components/TotalItemsFound";
import SearchMovies from "../components/SearchMovies";

function MoviesPage() {
    const { movies } = useMovieData();
    const { searchResults, handleSearch } = UseSearchMovies(movies);

    return (
        <Layout onSearch={handleSearch}>
            <div className="container px-2 mx-auto min-h-screen mb-6">
                {searchResults.length > 0 ? (
                    <SearchMovies searchResults={searchResults} />
                ) : (
                    <>
                        <TotalItemsFound item={movies} />
                        <div className="grid mt-8 sm:mt-4 grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
                            {movies.map((movie, index) => (
                                <ListPopularMovie movie={movie} key={index} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </Layout>
    );
}

export default MoviesPage;
