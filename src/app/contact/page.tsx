import React from 'react';
import img from '@/assets/contact/contact.png'
import Image from 'next/image';

import Details from '@/utils/Details';
const Contact = () => {
    return (
        <div className=" text-white my-12 lg:my-20   flex items-center justify-center">
            <div className="container mx-auto px-0 lg:px-6 py-6">
                {/* Header */}

                <Details title='Contact Me' desc='For Any Project Knock Us' />

                <div className="border-t pt-16 grid grid-cols-1   gap-8">
                    {/* Contact Form */}
                    <div className='flex flex-col lg:flex-row mb-12 gap-6'>
                        <div className='flex-1'>
                            <h2 className="text-4xl lg:text-6xl leading-relaxed  w-full lg:w-3/4 font-light mb-6">Get in Touch With Us</h2>
                        </div>
                        <form className="space-y-8  flex-1">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium "
                                >
                                    NAME
                                </label>
                                <input
                                    type="text"
                                    id="name"

                                    className="w-full px-3 py-1 bg-transparent border-b   border-[#949494] text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium "
                                >
                                    SUBJECT
                                </label>
                                <input
                                    type="text"
                                    id="subject"

                                    className="w-full px-3 py-1 bg-transparent border-b   border-[#949494] text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium "
                                >
                                    MESSAGE
                                </label>
                                <textarea
                                    id="message"
                                    rows={1}

                                    className="w-full px-3 py-1 bg-transparent border-b   border-[#949494] text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className=" py-2 px-8 rounded-full bg-orange-500 text-white font-semibold  hover:bg-orange-600 transition"
                            >
                                SEND
                            </button>
                        </form>
                    </div>

                    {/* Image and Info */}
                    <div className="flex flex-col items-center">
                        <div className="rounded-lg overflow-hidden mb-6">
                            <Image
                                src={img}
                                alt="contact"
                                height={300}
                                width={1200}
                            />
                        </div>
                        <div className=" mt-5 flex flex-wrap w-full justify-evenly gap-5 items-center">
                            <p className="text-lg md:text-xl lg:text-2xl">Street Avenue 93, CA</p>
                            <p className="text-lg md:text-xl lg:text-2xl">+09 888523</p>
                            <p>
                                <a
                                    href="#"
                                    className="text-lg md:text-xl lg:text-2xl hover:underline"
                                >
                                    info@company.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;