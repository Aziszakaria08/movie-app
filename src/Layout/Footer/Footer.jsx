import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const Links = [
        {
            title: "Company",
            links: [
                {
                    name: "Home",
                    link: "/home",
                },
                {
                    name: "About",
                    link: "/about",
                },
                {
                    name: "Contact",
                    link: "/contact",
                },
                {
                    name: "Movies",
                    link: "/movies",
                },
            ],
        },
        {
            title: "Top Categories",
            links: [
                {
                    name: "Action",
                    link: "#",
                },
                {
                    name: "Drama",
                    link: "#",
                },
                {
                    name: "Romantic",
                    link: "#",
                },
                {
                    name: "Historical",
                    link: "#",
                },
            ],
        },
    ];
    return (
        <div className="bg-slate-900 py-4 px-2 border-2 border-black">
            <div className="container mx-auto px-2">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-5 sm:gap-9 lg:grid-cols-9 py-10 w-full">
                    {Links.map((link, index) => (
                        <div
                            key={index}
                            className="col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0"
                        >
                            <h3 className="text-md  mb-3.5 font-bold sm:mb-5 pb-0.5">
                                {link.title}
                            </h3>
                            <ul className="text-sm flex flex-col space-y-3">
                                {link.links.map((text, index) => (
                                    <li
                                        key={index}
                                        className="flex items-baseline"
                                    >
                                        <Link
                                            to={text.link}
                                            className="text-white inline-block w-full hover:text-subMain"
                                        >
                                            {text.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3 ">
                        <Link
                            to="/"
                            className="text-[#c5230e] md:text-2xl text-base sm:text-lg font-bold md:mr-8 hover:animate-pulse mr-2"
                        >
                            My Movie App
                        </Link>
                        <p className="leading-7 text-sm mt-3 text-white">
                            <span>Azis Zakaria</span>
                            <br />
                            <span>Ciamis, Jawa Barat, Indonesia</span>
                            <br />
                            <span>Tell: +6182117753459</span>
                            <br />
                            <span>Email: azisspoy08@gmail.com</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
