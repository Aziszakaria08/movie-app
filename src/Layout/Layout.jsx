import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { useState } from "react";

function Layout({ children, onSearch }) {
    return (
        <>
            <div className="bg-main text-white">
                <Navbar onSearch={onSearch} />
                {children}
                <Footer />
            </div>
        </>
    );
}

export default Layout;
