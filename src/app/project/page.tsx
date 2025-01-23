"use client"
import Details from "@/utils/Details";
import Image from 'next/image';
import img1 from '@/assets/projects/four.png'
import img2 from '@/assets/projects/five.png'
import img3 from '@/assets/projects/six.png'

import { syne } from "@/components/fonts";
import { projectDetailsData } from "@/components/projects/project.data";

export default function ProjectDetail() {

    return (
        <div className=" text-white  my-12 lg:my-20   flex items-center justify-center">
            <div className="container mx-auto px-5 lg:px-6 py-6">
                {/* Header */}

                <Details title='Project Detail' desc='Details About The Project' />

                <div className="border-t pt-16 grid grid-cols-1   gap-8">
                    {/* Contact Form */}
                    <div className=' mb-12 '>
                        <Image src={img1} width={1400} alt="img1" />
                        <div className="space-y-7 max-w-3xl mx-auto my-16">
                            <h2 className={`text-3xl font-medium ${syne.className}`}>Project Story</h2>
                            <p className="text-[#9CA7B8]">The fact that photography has different meanings to different people is one of the many components of its appeal. Photography is such an important part of our life that it is now very difficult to imagine the world without it. </p>
                            <p className="text-[#9CA7B8]">We cannot imagine a wedding without the opportunity to capture it on film, we would not be able to remember the growing up of children or the holidays if we did not have pictures.</p>
                        </div>




                        <div className="flex flex-col xl:flex-row items-center gap-6 ">
                            <Image height={400} width={700} src={img2} alt="img2" />
                            <Image height={400} width={700} src={img3} alt="img3" />
                        </div>
                        <div className="space-y-7 max-w-3xl mx-auto my-16">
                            <h2 className={`text-3xl font-medium ${syne.className}`}>Day One</h2>
                            <p className="text-[#9CA7B8]">Everywhere we are haunted by photography in newspapers, magazines, advertisements on television on the Internet, but we still crave even more. </p>
                            <p className="text-[#9CA7B8]">And what helps to achieve a good result? We will look at these issues and some of the possibilities of photography and explain that it is a combination of thought imagination, visual design, technical skills and organizational skills</p>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {
                                projectDetailsData.map(el => <div key={el?.title}>
                                    <Image src={el?.img} alt={el?.title} height={300} width={700} />
                                    <h2 className="text-2xl mt-4 font-medium p-3">{el?.title}</h2>
                                    <h1 className=" text-lg text-gray-300 p-3">{el?.tag}</h1>
                                </div>)
                            }
                        </div>

                    </div>



                </div>
            </div>
        </div>
    )
}

