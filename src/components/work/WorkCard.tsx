import Image from 'next/image';
import React from 'react';
import { TWork } from './work.type';

type TProp = {
    item: TWork
}

const WorkCard = ({ item }: TProp) => {
    // console.log(item)
    return (
        <div className={`${item?.id === 4 || item?.id === 5 ? 'col-span-1 md:col-span-2 lg:col-span-6' : 'col-span-1 md:col-span-2 lg:col-span-4'} group `}>
            <Image src={item?.image} className='h-[400px] w-full rounded-xl group-hover:scale-105 transition-transform duration-500' width={500} alt={item?.title} />
            <h2 className='text-center capitalize text-white mt-4 mb-3'>{item?.color}</h2>
            <h2 className=' text-white text-2xl text-center'>{item?.title}</h2>
        </div>
    );
};

export default WorkCard;