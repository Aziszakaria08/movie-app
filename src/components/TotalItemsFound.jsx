import React from "react";

function TotalItemsFound({ item }) {
    return (
        <h2 className="md:text-xl text-lg lg:text-2xl font-bold text-center tracking-wider">
            Total <span className="text-subMain"> {item.length} </span>
            items found
        </h2>
    );
}

export default TotalItemsFound;
