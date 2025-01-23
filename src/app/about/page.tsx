"use client"

import { syne } from "@/components/fonts";
import Details from "@/utils/Details"
import img1 from '@/assets/dis.png'
import img2 from '@/assets/dis2.png'
import Image from "next/image";
export default function About() {
    return (
        <div className=" text-white my-12 lg:my-20   flex items-center justify-center">
            <div className="container mx-auto px-0 lg:px-6 py-6">
                {/* Header */}

                <Details desc="Little brief about myself" title="About Me" />

                <div className="border-t pt-16 grid grid-cols-1  gap-20 items-center">
                    {/* Mission Statement */}
                    <div className="flex flex-col lg:flex-row">
                        <h2 className={`text-5xl md:text-6xl lg:text-7xl flex-1  mb-4 ${syne.className}`}>
                            My mission is to make design easier.
                        </h2>
                        <p className="flex-1 text-gray-400 mb-6 leading-relaxed 
                        text-lg
                        md:text-xl lg:text-2xl">
                            Create custom Designs with AARONN that converts more visitors than any website. With lots of unique design, you can easily select a logo without hassle. Create custom landing logos with AARONN that converts more visitors than any website. With lots of revisions, you can easily build a logo without porbolem.
                        </p>
                    </div>

                    {/* Images Section */}
                    <div className="flex flex-col sm:flex-row  gap-8">
                        <div className="relative">
                            <Image
                                src={img1}
                                alt="Person 1"
                                height={500}
                                className="rounded-lg"
                            />
                            <div className="absolute top-4 -left-4 w-8 h-32 border-2 border-orange-500 rounded-full"></div>
                        </div>
                        <div className="relative">
                            <Image
                                src={img2}
                                alt="Person 2"
                                height={500}
                                className="rounded-lg "
                            />
                            <div className="absolute -bottom-4 right-4 w-32 h-8 border-2 border-orange-500 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-24 ">
                    <h3 className={`text-5xl font-medium mb-4 ${syne.className}`}>Follow me on:</h3>
                    <div className="flex justify-between">
                        <a
                            href="#"
                            className="text-gray-300 
                            md:text-xl text-lg lg:text-2xl hover:text-white uppercase transition"
                        >
                            Dribbble
                        </a>
                        <a
                            href="#"
                            className="text-gray-300 
                            md:text-xl text-lg lg:text-2xl hover:text-white uppercase transition"
                        >
                            Twitter
                        </a>
                        <a
                            href="#"
                            className="text-gray-300 
                            md:text-xl text-lg lg:text-2xl hover:text-white uppercase transition"
                        >
                            Facebook
                        </a>
                        <a
                            href="#"
                            className="text-gray-300 
                            md:text-xl text-lg lg:text-2xl hover:text-white uppercase transition"
                        >
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
