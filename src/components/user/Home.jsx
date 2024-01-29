import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { CgLogOut } from "react-icons/cg";
import Table from "./table";

const Home = () => {
    
    const [modalShow, setModalShow] = useState(false);
   
   
    const menus = [
        { name: "Home", link: "/", icon: IoHomeOutline },
        // { name: "Bidder", link: "/bidder", icon: FiMessageSquare },
        { name: "User", link: "/user", icon: AiOutlineUser },


        // { name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
        // { name: "File Manager", link: "/", icon: FiFolder },
        // { name: "Cart", link: "/", icon: FiShoppingCart },
        // { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },

        // { name: "Logout", link: "/logout", icon: CgLogOut },




    ];
    const [open, setOpen] = useState(true);
    return (
        <section className="bg-[#ffffff] flex gap-6">
            <div
                className={`bg-[#0052d4] min-h-screen ${open ? "w-72" : "w-16"
                    } duration-500 text-gray-100 px-4`}
            >
                <div className="py-3 flex justify-end">
                    <h1>BidWiz</h1>
                    <HiMenuAlt3
                        size={26}
                        className="cursor-pointer "
                        onClick={() => setOpen(!open)}
                    />
                </div>
                <div className="mt-4 flex flex-col relative">
                    {menus?.map((menu, i) => (
                        <Link
                            to={menu?.link}
                            key={i}
                            className={` ${menu?.margin && "mt-5"
                                } text-[#ffffff] no-underline group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                        >
                            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                            <h5
                                style={{
                                    transitionDelay: `${i + 3}00ms`,
                                }}
                                className={`whitespace-pre duration-500 ${!open && " opacity-0 translate-x-28 overflow-hidden"
                                    }`}
                            >
                                {menu?.name}
                            </h5>
                            <h5
                                className={`${open && "hidden"
                                    } text-xs absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                            >
                                {menu?.name}
                            </h5>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="p-[80px] w-100 text-gray-900 font-semibold">
                <h2 className={"text-[#0052d4] mb-8"}>Users</h2>
                <Table/>

                {/* <ModalForm/> */}

            </div>
           
        </section>
    );
};

export default Home;
