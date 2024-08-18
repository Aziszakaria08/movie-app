import React from "react";

function Titles({ title, Icon }) {
    return (
        <div className="flex items-center w-full gap-4 sm:gap-8">
            <Icon className="text-subMain sm:w-6 sm:h-6 w-4 h-4" />
            <h1 className="font-bold sm:text-xl text-lg">{title}</h1>
        </div>
    );
}

export default Titles;
