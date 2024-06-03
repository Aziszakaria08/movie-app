// import { Link } from "react-router-dom";
// import { useRef } from "react";

export const Navbar = ({ goto }) => {
    const navigation = [
        { name: "TRENDING", action: goto },
        { name: "SUPER HERO", action: "" },
    ];

    //   const linkRef = useRef(null);

    return (
        <header className="w-full fixed bg-black md:bg-black top-0 left-0 right-0 z-50">
            <nav className="flex justify-between font-serif md:px-6 md:py-4 p-4 ">
                <h1 className="text-sm text-slate-50  md:text-xl  p-3">
                    MOOV FILMS
                </h1>
                <ul className="flex justify-center items-center  ">
                    {navigation.map((item, index) => (
                        <li key={index}>
                            {item.name === "TRENDING" ? (
                                <button
                                    onClick={item.action}
                                    className="text-xs text-slate-400 hover:text-slate-300 md:text-base px-2"
                                >
                                    {item.name}
                                </button>
                            ) : (
                                <a
                                    href={`${item.name}`}
                                    className="text-xs text-slate-400  hover:text-slate-300 md:text-base md:p-8 px-2"
                                >
                                    {item.name}
                                </a>
                            )}
                            {/* <Link
                                to={item.path}
                                
                                className="text-xs text-slate-400 p-2 hover:text-slate-300 md:text-base md:p-8"
                            >
                                {item.name}
                            </Link> */}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
