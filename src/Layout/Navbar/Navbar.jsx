import React from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((isOpen) => !isOpen);
    };
    return (
        <nav className="bg-main sticky top-0 w-full z-10 p-4">
            <div className="container mx-auto flex justify-between items-center font-sans">
                <div className="md:flex justify-between items-center w-full">
                    <div className="flex justify-center items-center">
                        <Link
                            to="/"
                            className="text-subMain md:text-2xl text-base sm:text-lg font-bold md:mr-8 hover:animate-pulse mr-2"
                        >
                            My Movie App
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-4 md:p-2 md:items-center md:mr-4">
                        <NavLink
                            to="/movies"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-subMain md:px-4"
                                    : "text-white md:px-4 mx-2 hover:text-subMain transition-all duration-300 font-medium hover:font-normal"
                            }
                        >
                            Movies
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-subMain md:px-4"
                                    : "text-white md:px-4 mx-2 hover:text-subMain transition-all duration-300 font-medium hover:font-normal"
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-subMain md:px-4 "
                                    : "text-white md:px-4 mx-2 hover:text-subMain transition-all duration-300 font-medium hover:font-normal"
                            }
                        >
                            Contact
                        </NavLink>
                        <div className="flex items-center bg-subMain pl-2 md:pl-4 rounded-md">
                            <FaSearch className="bg-subMain" />
                            <input
                                type="search"
                                placeholder="search"
                                className="rounded-md text-sm ml-4 p-1 md:p-3  focus:outline-none focus:ring-subMain focus:ring-1 focus:border-subMain text-slate-900 "
                            />
                        </div>
                    </div>
                </div>
                <div className="md:hidden mt-2 ml-2">
                    <button onClick={toggleMenu}>
                        {isOpen ? (
                            <IoClose className="text-blue-700 text-4xl" />
                        ) : (
                            <IoMdMenu className="text-blue-700 text-4xl" />
                        )}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-slate-800  w-full p-2 mt-1 rounded">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-subMain p-4"
                                : "text-white p-4 block hover:bg-main hover:text-subMain transition-all duration-200"
                        }
                    >
                        Movies
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? "text-subMain p-4"
                                : "text-white p-4 block hover:bg-main hover:text-subMain transition-all duration-200"
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive
                                ? "text-subMain p-4"
                                : "text-white p-4 block hover:bg-main hover:text-subMain transition-all duration-200"
                        }
                    >
                        Contact
                    </NavLink>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
