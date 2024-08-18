import React from "react";
import { FaUser } from "react-icons/fa";
import imgMobile from "../../assets/img-mobile-1.png";

function Promos() {
    return (
        <div className="my-16 py-10 md:px-20 px-8 bg-slate-800 rounded-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-12">
                <div className="flex flex-col justify-start gap-4 p-4 lg:p-16 ">
                    <h1 className="font-bold text-lg sm:text-xl lg:text-3xl leading-6 sm:leading-8">
                        Download Your Movies Watch Offline <br />
                        Enjoy On Your Mobile
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg py-4 leading-6 lg:leading-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis nostrum animi optio quam recusandae qui
                        velit sit incidunt, praesentium libero odio aliquam
                        maiores nobis, eligendi quia commodi facilis doloremque
                    </p>
                    <div className="flex gap-6 text-sm sm:text-lg lg:text-xl">
                        <div className=" bg-main px-6 py-2 text-subMain rounded-sm font-bold cursor-default">
                            HD 4K
                        </div>
                        <div className=" bg-main px-6 py-2 text-subMain rounded-sm font-bold cursor-default flex items-center justify-center">
                            <FaUser className="mr-2" />
                            <p>2K</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <img
                        src={imgMobile}
                        alt="Mobile app"
                        className="w-1/2 h-2/3 object-contain"
                    />
                    <img
                        src={imgMobile}
                        alt="Mobile app"
                        className="w-1/2 h-2/3 object-contain"
                    />
                </div>
            </div>
        </div>
    );
}

export default Promos;
