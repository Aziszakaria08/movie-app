import React from "react";
import Image from "../assets/image-not-found.jpg";
function NotFound() {
    return (
        <div className="w-full flex items-center justify-center h-screen absolute text-white bg-main py10 lg:py20 px-6 ">
            <img src={Image} alt="Not Found" className="w-full h-full " />
        </div>
    );
}

export default NotFound;
