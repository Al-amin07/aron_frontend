import React from 'react';
import { rubik, syne } from '../fonts';
import Image from 'next/image';
import img from '@/assets/Vector 8.png'
import { projectData } from './project.data';
import ProjectCard from './ProjectCard'
import { FaArrowRightLong } from "react-icons/fa6";

const Projects = () => {
    return (
        <div className={` ${rubik.className} max-w-6xl px-5 xl:px-0  mx-auto`}>
            <div className='relative flex flex-col items-center'>
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-medium text-gray-100 ${syne.className}`}>My Projects Highlight</h2>
                <button className='text-gray-300 my-8 md:my-12 font-bold text-sm py-2 md:py-3 px-6 rounded-full border border-primary'>Explore More
                    <FaArrowRightLong size={20} className='inline-block ml-6' />
                </button>
                <Image className='absolute right-32 -top-32' src={img} alt='projectLogo' height={400} width={500} />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                {
                    projectData?.map(el => <ProjectCard item={el} key={el?.id} />)
                }
            </div>
        </div>
    );
};

export default Projects;