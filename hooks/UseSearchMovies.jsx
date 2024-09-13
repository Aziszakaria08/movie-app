import { useState } from "react";
import { getSearchMovie } from "../src/services/movieService";

function UseSearchMovies() {
    const [searchResults, setSearchResults] = useState([]);
    const handleSearch = async (q) => {
        if (q.length > 3) {
            const search = await getSearchMovie(q);
            setSearchResults(search);
        } else if (q.length == 0) {
            setSearchResults([]);
        }
    };
    return { searchResults, handleSearch };
}

export default UseSearchMovies;
