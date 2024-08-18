import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function Star({ value }) {
    return (
        <>
            <span>
                {value >= 8 ? (
                    <FaStar />
                ) : value >= 7.9 ? (
                    <FaStarHalfAlt />
                ) : (
                    <FaRegStar />
                )}
            </span>
            <span>
                {value >= 8.2 ? (
                    <FaStar />
                ) : value >= 8 ? (
                    <FaStarHalfAlt />
                ) : (
                    <FaRegStar />
                )}
            </span>
            <span>
                {value >= 8.4 ? (
                    <FaStar />
                ) : value >= 8.2 ? (
                    <FaStarHalfAlt />
                ) : (
                    <FaRegStar />
                )}
            </span>
            <span>
                {value >= 8.57 ? (
                    <FaStar />
                ) : value >= 8.4 ? (
                    <FaStarHalfAlt />
                ) : (
                    <FaRegStar />
                )}
            </span>
        </>
    );
}

export default Star;
