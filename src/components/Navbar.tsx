"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '@/assets/logo.svg'
import Image from 'next/image';
import { useState } from 'react';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'My Works', path: '/work' },
    { name: 'My Projects', path: '/project' },
    { name: 'Dashboard', path: '/dashboard' },
    // { name: 'Contact', path: '/contact' },
]
import { IoReorderThree } from "react-icons/io5";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    console.log(pathname)
    if (pathname.includes('dashboard')) return null
    return (
        <header className="bg-transparent py-3 text-white">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <Link href={'/'} className="block text-teal-600" >
                            <span className="sr-only">Home</span>
                            <Image src={logo} alt='logo' />
                        </Link>
                    </div>

                    <div className="md:flex relative md:items-center md:gap-12">

                        {open && <ul className="flex z-20 absolute top-10 right-1 bg-transparent backdrop-blur-md flex-col gap-5 text-sm px-5 py-4 border rounded-2xl">
                            {
                                navLinks.map(el => (
                                    <Link
                                        onClick={() => setOpen(false)}
                                        className={`transition font-medium whitespace-nowrap ${pathname === el.path ? 'text-[#FF9142] underline decoration-2 underline-offset-8' : ''}`}
                                        href={el.path}
                                        key={el.path}

                                    >
                                        {el.name}
                                    </Link>
                                ))
                            }
                            {/* <Link
                                href={'/contact'}
                                className={` bg-transparent border border-gray-400 py-2 px-4 rounded-full  font-bold hover:bg-slate-800 transition-colors duration-500 }`}


                            >
                                Contact
                            </Link> */}

                        </ul>}

                        <IoReorderThree onClick={() => setOpen(!open)} size={30} className='cursor-pointer block md:hidden relative z-20' />
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-10 text-sm">
                                {
                                    navLinks.map(el => (
                                        <Link
                                            className={`transition relative z-30 font-medium ${pathname === el.path ? 'text-[#FF9142] underline decoration-2 underline-offset-8' : ''}`}
                                            href={el.path}
                                            key={el.path}

                                        >
                                            {el.name}
                                        </Link>
                                    ))
                                }
                                <Link
                                    href={'/contact'}
                                    className={` bg-transparent border border-gray-400 py-2 px-4 rounded-full  font-bold hover:bg-slate-800 transition-colors duration-500 }`}


                                >
                                    Contact
                                </Link>

                            </ul>
                        </nav>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;