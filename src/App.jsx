import { useEffect, useRef } from "react";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Slider } from "./components/Slider";
import { getMovieList } from "./Api";
import { Trending } from "./components/Trending";
const App = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    useEffect(() => {
        getMovieList().then((result) => {
            setTrendingMovies(result);
        });
    }, []);
    const linkRef = useRef(null);
    const goto = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <Navbar goto={() => goto(linkRef)} />
            <Slider trendingMovies={trendingMovies} />
            <Trending trendingMovies={trendingMovies} ref={linkRef} />
        </>
    );
};

export default App;
