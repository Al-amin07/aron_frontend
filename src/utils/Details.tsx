import { syne } from '@/components/fonts';
import React from 'react';
import img from '@/assets/Vector 8.png'
import Image from 'next/image';
type TProp = {
    title: string;
    desc: string;
}
const Details = ({ title, desc }: TProp) => {
    return (
        <div className=" mb-16  lg:mb-24  relative">
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-medium ${syne.className}`}>{title}</h1>
            <p className="text-[#949494] text-lg mt-20">{desc}</p>
            <Image src={img} alt='logo' height={400} width={500} className='absolute -top-40 -left-16' />
            {/* <hr className='mt-12' /> */}
        </div>
    );
};

export default Details;