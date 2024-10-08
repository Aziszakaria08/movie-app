// import { useEffect, useRef } from "react";
// import { useState } from "react";
// import { Navbar } from "./components/Navbar";
// import { Slider } from "./components/Slider";
// import { getMovieList } from "./Api";
// import { Trending } from "./components/Trending";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MoviesPage from "./pages/MoviesPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SingleMovie from "./pages/SingleMovie";
import NotFound from "./pages/NotFound";
import MovieTrailer from "./components/MovieTrailer";

const App = () => {
    return (
        <Router basename="/movie-app">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/movie/:id" element={<SingleMovie />} />
                <Route path="/watch/:id" element={<MovieTrailer />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
