import Layout from "../Layout/Layout";
import Banner from "../components/Home/Banner";
import PopularMovies from "../components/Home/PopularMovies";
import Promos from "../components/Home/Promos";
import TopRated from "../components/Home/TopRated";
import { useMovieData } from "../../hooks/useMovieData";
import UseSearchMovies from "../../hooks/UseSearchMovies";
import SearchMovies from "../components/SearchMovies";

function Home() {
    const { movies } = useMovieData();
    const { handleSearch, searchResults } = UseSearchMovies(movies);
    return (
        <Layout onSearch={handleSearch}>
            <div className="container mx-auto px-2 mb-6 min-h-screen">
                {searchResults.length > 0 ? (
                    <SearchMovies searchResults={searchResults} />
                ) : (
                    <>
                        <Banner />
                        <PopularMovies />
                        <Promos />
                        <TopRated />
                    </>
                )}
            </div>
        </Layout>
    );
}

export default Home;
