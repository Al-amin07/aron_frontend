import React from 'react';
import { Syne } from "next/font/google";
export const syne = Syne({ subsets: ['latin'], weight: ['400', '500', '600', '700'] },)
import img from '@/assets/Vector 8.png'
import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image';

const Banner = () => {
    return (
        <section className="bg-transparent">
            <div className="mx-auto w-full px-4 py-24 lg:py-32 lg:flex lg:h-[calc(100vh-100px)] lg:items-center">
                <div className="mx-auto relative   text-center">
                    <h1 className={`${syne.className} lg:text-7xl  font-medium text-4xl md:text-5xl text-gray-100`}>
                        Adaptive Logo Design <br /> for Your Brand
                    </h1>



                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <button className='bg-primary py-3 md:py-4 px-7  text-white text-sm rounded-full font-bold'>Explore Work <FaArrowRightLong size={20} className='inline-block ml-4' /></button>
                    </div>
                    <div className='absolute -top-40 -right-6'>
                        <Image src={img} alt='logo' height={300} width={500} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;