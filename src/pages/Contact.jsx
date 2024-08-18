import React from "react";
import Layout from "../Layout/Layout";
import Head from "../components/Head";
import { MdEmail, MdCall, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

function Contact() {
    const ContactUser = [
        {
            id: 1,
            icon: <MdEmail />,
            title: "Email Us",
            message:
                "Kembangkan ide front end secara interaktif untuk model lintas platform.",
            contact: "aziszkria08@gmail.com",
        },
        {
            id: 2,
            icon: <MdCall />,
            title: "Call Us",
            message:
                "Secara khusus memanfaatkan penyelarasan optimal untuk bandwidth intuitif.",
            contact: "08211773459",
        },
        {
            id: 1,
            icon: <MdLocationOn />,
            title: "Location",
            message: "Jalan Raya Lakbok,",
            contact: "",
        },
    ];
    return (
        <Layout>
            <div className="container  px-8 mx-auto bg-main  my-6">
                <Head title="Contact Us" />
                <div className="grid lg:grid-cols-3 gap-4 lg:gap-16  mt-10 py-4 text-center ">
                    {ContactUser.map((item, index) => (
                        <div
                            key={index}
                            className="bg-slate-900 w-full p-6 lg:p-12 rounded-md mb-5 flex flex-col  justify-center items-center"
                        >
                            <span className="text-3xl font-bold flex justify-center items-center w-16 h-16 rounded-full bg-main text-subMain">
                                {item.icon}
                            </span>
                            <h4 className="py-4 font-bold tracking-wider text-lg md:text-xl">
                                {item.title}
                            </h4>
                            <p className="text-slate-300 text-sm">
                                {`${item.contact} ${item.message}`}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default Contact;
