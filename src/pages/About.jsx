import React from "react";
import Layout from "../Layout/Layout";
import Head from "../components/Head";
import Avangers from "../assets/avangers.jpeg";

function About() {
    return (
        <Layout>
            <div className="container  px-8 mx-auto bg-main  my-6">
                <Head title="About Us" />
                <div className="grid lg:grid-cols-2 gap-10  mt-10 py-4">
                    <div className="w-full">
                        <h3 className="text-white font-bold text-xl md:text-2xl mb-2">
                            Welcome to Our My Movie App
                        </h3>
                        <div className="text-sm text-slate-300 tracking-tight leading-7">
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Aliquam similique velit eius
                                necessitatibus delectus molestias iure repellat
                                officiis dolores sunt suscipit aut obcaecati
                                nulla laboriosam, sit praesentium repellendus
                                nesciunt omnis! Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Ipsa cupiditate
                                nulla, et voluptatibus architecto illum alias
                            </p>
                            <p>
                                obcaecati magnam dolorum similique, velit qui.
                                Iure maxime libero beatae dolore rerum
                                necessitatibus modi. Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Deleniti
                                consequuntur labore nihil sit cum officia
                                reprehenderit odit quo consectetur a ullam
                                earum, deserunt laboriosam mollitia ipsum odio
                                quas natus saepe.
                            </p>
                        </div>
                        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-6 my-8">
                            <div className="bg-slate-900 w-full m p-6 rounded-md mb-6 md:mb-0">
                                <span className="text-3xl font-bold tracking-wider">
                                    10K
                                </span>
                                <h4 className="py-4 font-bold tracking-wider text-lg md:text-xl">
                                    Listed Movie
                                </h4>
                                <p className="text-slate-300 text-sm">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Esse, repellendus.
                                </p>
                            </div>
                            <div className="bg-slate-900 w-full  p-6 rounded-md">
                                <span className="text-3xl font-bold tracking-wider">
                                    8K
                                </span>
                                <h4 className="py-4 font-bold tracking-wider text-lg md:text-xl">
                                    Lovely Users
                                </h4>
                                <p className="text-slate-300 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[550px] overflow-hidden rounded mt-10 hidden lg:block">
                        <img
                            src={Avangers}
                            alt="Avengers"
                            className="w-full object-contain rounded"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default About;
