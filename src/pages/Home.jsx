import React, { useEffect, useState } from "react";
// import { getMovieList } from "../services/movieService";
import Layout from "../Layout/Layout";
import Banner from "../components/Home/Banner";
import PopularMovies from "../components/Home/PopularMovies";
import Promos from "../components/Home/Promos";
import TopRated from "../components/Home/TopRated";

function Home() {
    return (
        <Layout>
            <div className="container mx-auto px-2 mb-6 min-h-screen">
                <Banner />
                <PopularMovies />
                <Promos />
                <TopRated />
            </div>
        </Layout>
    );
}

export default Home;
