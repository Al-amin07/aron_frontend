
import { ReactNode } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

type TProp = {
    isOpen: boolean;
    children: ReactNode;
    setIsOpen: (isOpen: boolean) => void
}

export default function SidebarWrapper({ isOpen, setIsOpen, children }: TProp) {
    return (
        <div
            className={`bg-[#0e0e0e] relative z-30  min-h-screen ${isOpen ? "w-64" : "w-[76px]"
                } duration-500 text-gray-100 px-4`}
        >
            <div className="py-3  flex justify-between items-center">
                <h2
                    style={{
                        transitionDelay: `300ms`,
                    }}
                    className={`whitespace-pre  duration-500 ${!isOpen && "opacity-0 translate-x-28 overflow-hidden"
                        }`}
                >
                    Dashboadrd
                </h2>
                <div className="cursor-pointer " onClick={() => setIsOpen(!isOpen)}>
                    <HiMenuAlt3 size={26} />
                </div>
            </div>
            {children}
        </div>
    );
}


