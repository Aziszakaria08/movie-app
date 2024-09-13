import React from "react";
import { FaRegStar } from "react-icons/fa";

function Rated({ movie }) {
    return (
        <div className="flex items-center gap-2">
            <FaRegStar className="text-subMain font-bold" />
            <span className=" font-medium text-sm">{movie?.vote_average}</span>
        </div>
    );
}

export default Rated;
