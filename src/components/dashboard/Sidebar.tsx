
import { RxDashboard } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { MdOutlineLogout, MdOutlineDocumentScanner } from "react-icons/md";
import React from "react";
import Link from "next/link";
import SidebarWrapper from "./SidebarWraper";
import { usePathname } from "next/navigation";
// import SidebarWrapper from "./SidebarWrapper";
// import UserInfo from "./UserInfo";
import logo from '@/assets/logo.svg'
import Image from "next/image";
const adminMenus = [
    { name: "Dashboard", link: "/dashboard", icon: RxDashboard },

    {
        name: "My Projects ",
        link: "/dashboard/my-project",
        icon: FaProjectDiagram,
    },

    {
        name: "Create Projects",
        link: "/dashboard/create-project",
        icon: MdOutlineDocumentScanner,
    },
    { name: "Users", link: "/dashboard/users", icon: FaUsers },
];

type TProp = {
    isOpen: boolean;

    setIsOpen: (isOpen: boolean) => void
}

export default function Sidebar({ isOpen, setIsOpen }: TProp) {
    const pathName = usePathname()
    console.log({ isOpen });
    return (
        <SidebarWrapper isOpen={isOpen} setIsOpen={setIsOpen} >
            {isOpen && <div className="mt-4 hidden md:flex flex-col border-t border-gray-700 pt-4 ">
                <Link
                    href={"/"}
                    className="text-3xl text-center font-bold hover:scale-105 transition-all duration-300 bg-gradient-to-r from-orange-600 to-red-500 text-transparent bg-clip-text"
                >
                    <Image src={logo} alt="logo" className="mx-auto" />
                </Link>
            </div>}
            <div className="mt-4 pt-4 flex flex-col border-t border-gray-700 gap-3 relative">
                {adminMenus.map((menu, i) => (
                    <Link
                        href={menu.link}
                        key={i}
                        className={`group flex items-center text-sm gap-3.5 font-medium p-3
             hover:bg-orange-500 rounded-md transition-colors duration-500
              ${pathName === menu?.link && "bg-orange-600 text-white"
                            }`}
                    >
                        <div>{React.createElement(menu.icon, { size: "20" })}</div>
                        <h2
                            style={{
                                transitionDelay: `${i + 3}00ms`,
                            }}
                            className={`whitespace-pre  duration-500 ${!isOpen && "opacity-0  translate-x-28 overflow-hidden"
                                }`}
                        >
                            {menu.name}
                        </h2>
                        <h2
                            className={`${isOpen && "hidden"
                                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                        >
                            {menu.name}
                        </h2>
                    </Link>
                ))}
                <button

                    className="group flex items-center text-sm gap-3.5 font-medium px-4 py-3 transition-colors duration-500 hover:bg-orange-600 rounded-md mt-auto"
                >
                    <div>
                        <MdOutlineLogout size="20" />
                    </div>
                    <h2
                        style={{
                            transitionDelay: `600ms`,
                        }}
                        className={`whitespace-pre duration-500 ${!isOpen && "opacity-0 translate-x-28 overflow-hidden"
                            }`}
                    >
                        Logout
                    </h2>
                    <h2
                        className={`${isOpen && "hidden"
                            } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                    >
                        Logout
                    </h2>
                </button>
            </div>
        </SidebarWrapper>
    );
}