/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { ImSpinner5 } from 'react-icons/im';

const CreateProject = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        try {
            const form = e.target as HTMLFormElement;
            const title = form.title.value;
            const description = form.description.value;
            const email = form.email.value;
            const image = form.image.value;
            const tag = form.tag.value;
            const startDate = form.startDate.value;
            const endDate = form.endDate.value;
            const projectData = {
                title, description, email, tag, image, startDate, endDate, status: 'pending'
            }

            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API}/project`,
                projectData
            );
            console.log({ data })
            if (data?.data) {
                toast.success('Project created succesfully');
                router.push('/dashboard/my-project')
            }
        } catch (error: any) {
            toast.error(error?.message)
        } finally {
            setLoading(false)
        }


    }
    return (
        <div className="max-w-2xl mx-auto p-5">
            <h2 className="text-2xl font-bold mb-5">Create New Project</h2>
            <form onSubmit={handleSubmit} className="space-y-4 border p-6 rounded-xl">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Project Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder='Title'
                        className="mt-1 block w-full rounded-md border-gray-300  border py-1.5 px-5  "
                        required
                    />

                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder='Description'
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300  border py-1.5 px-5  "
                        required
                    ></textarea>

                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='Email'
                        className="mt-1 block w-full rounded-md border-gray-300  border py-1.5 px-5  "
                        required
                    />

                </div>

                <div className='flex flex-col md:flex-row gap-6 md:items-center'>
                    <div className='md:flex-1'>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                            Image URL
                        </label>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            placeholder='Image Url'
                            className="mt-1 block w-full rounded-md border-gray-300  border py-1.5 px-5  "
                            required
                        />

                    </div>



                    <div className='md:flex-1'>
                        <label htmlFor="tag" className="block text-sm font-medium text-gray-700">
                            Tag
                        </label>
                        <input
                            type="text"
                            id="tag"
                            name="tag"
                            placeholder='Tag'
                            className="mt-1 block w-full rounded-md border-gray-300  border py-1.5 px-5  "
                            required
                        />

                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                            Start Date
                        </label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"

                            className="mt-1 block w-full rounded-md border-gray-300  border py-1.5 px-5  "
                            required
                        />

                    </div>

                    <div>
                        <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                            End Date
                        </label>
                        <input
                            type="date"
                            id="endDate"
                            name="endDate"

                            className="mt-1 block w-full rounded-md border-gray-300  border py-1.5 px-5  "
                            required
                        />

                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex justify-center items-center gap-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed"
                    >
                        Create Project {loading && <ImSpinner5 size={20} className='animate-spin' />}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateProject;