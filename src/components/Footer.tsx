"use client"
import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"
import { syne } from "./fonts"
import logo from '@/assets/logo.svg'
import Image from "next/image"
import { usePathname } from "next/navigation"
export default function Footer() {
    const pathName = usePathname()
    if (pathName.includes('dashboard')) return null
    return (
        <footer className={`bg-[#131313] mt-32 text-white py-10 lg:py-16 px-4 ${syne.className}`}>
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-orange-500 text-xl mb-4">Get in Touch With Us</h2>
                    <Link
                        href="mailto:info@aaronn.com"
                        className="text-4xl md:text-5xl lg:text-6xl hover:text-orange-500 transition-colors border-b border-white pb-1"
                    >
                        info@aaronn.com
                    </Link>
                </div>

                <div className="flex flex-wrap justify-between gap-8 items-center mb-16">
                    <Link href={'/'} className="hover:scale-105 transition-transform duration-500"><Image height={100} width={150} src={logo} alt="logo" /></Link>

                    <div className="text-center md:text-left">
                        <p className=" text-xl md:text-2xl ">Street Avenue 21, CA</p>
                        <p className=" text-xl md:text-2xl">0-8-00-888-000</p>
                    </div>
                    <div>
                        <h2 className="text-xl md:text-2xl font-semibold">+9 0283353</h2>
                        <div className="flex mt-1 md:mt-2 justify-center md:justify-end gap-6">

                            <Link href="#" className="hover:text-orange-500 transition-colors">
                                <Facebook className="h-5 w-5 md:h-7 md:w-7" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="hover:text-orange-500 transition-colors">
                                <Twitter className="h-5 w-5 md:h-7 md:w-7" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="hover:text-orange-500 transition-colors">
                                <Instagram className="h-5 w-5 md:h-7 md:w-7" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                        </div>
                    </div>

                </div>
                <hr />
                <div className="text-center text-lg md:text-2xl mt-8 text-gray-200">
                    <p>© 2023. Ideapeel. All rights reserved. </p>
                </div>
            </div>
        </footer>
    )
}

