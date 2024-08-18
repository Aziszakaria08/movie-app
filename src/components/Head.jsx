import React from "react";
import Header from "../assets/bg-header.jpg";

function Head({ title }) {
    return (
        <div className="w-full lg:h-64 h-48 overflow-hidden relative rounded-md">
            <img
                src={Header}
                alt="Hero"
                className="w-full object-cover rounded-md opacity-50"
            />
            <div className="absolute bottom-0 left-0 top-1/3 right-0 w-full text-center">
                <h1 className="text-2xl lg:text-5xl font-extrabold text-white shadow-lg">
                    {title}
                </h1>
            </div>
        </div>
    );
}

export default Head;
