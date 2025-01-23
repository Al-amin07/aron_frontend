/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Loading from '@/components/loader/Loading';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import Image from 'next/image';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaUserCircle } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa6';
import { MdDelete } from "react-icons/md";
import UpdateProject from '@/components/projects/UpdateProject'; // Adjust the import path as necessary

export interface IProject {
    title: string;
    description: string;
    image: string;
    email: string;
    status: 'pending' | 'in-progress' | 'completed';
    tag: string;
    startDate: string;
    endDate: string;
}

// const projects: IProject[] = [
//     {
//         title: "E-Commerce Website",
//         description: "An e-commerce platform for selling a variety of products online.",
//         email: "project-owner1@example.com",
//         image: "",
//         status: "in-progress",
//         tag: "web-development",
//         startDate: "2023-11-01",
//         endDate: "2024-02-28",
//     },
//     {
//         title: "Mobile Banking App",
//         description: "A secure and user-friendly banking application for mobile devices.",
//         email: "project-owner2@example.com",
//         image: "",
//         status: "completed",
//         tag: "mobile-app",
//         startDate: "2023-01-15",
//         endDate: "2023-06-30",
//     },
//     {
//         title: "Social Media Campaign",
//         description: "A campaign to boost engagement and visibility on social media platforms.",
//         email: "project-owner3@example.com",
//         image: "",
//         status: "pending",
//         tag: "marketing",
//         startDate: "2024-03-01",
//         endDate: "2024-03-31",
//     },
//     // {
//     //     title: "Inventory Management System",
//     //     description: "A system for tracking and managing inventory in real time.",
//     //     email: "project-owner4@example.com",
//     //     image: "https://via.placeholder.com/150",
//     //     status: "in-progress",
//     //     tag: "software-development",
//     //     startDate: "2023-10-10",
//     //     endDate: "2024-01-20",
//     // },
//     // {
//     //     title: "Portfolio Website",
//     //     description: "A personal portfolio website to showcase projects and achievements.",
//     //     email: "project-owner5@example.com",
//     //     image: "https://via.placeholder.com/150",
//     //     status: "completed",
//     //     tag: "web-design",
//     //     startDate: "2023-03-01",
//     //     endDate: "2023-04-15",
//     // },

// ];



const Projects = () => {
    const [update, setUpdate] = useState(false)
    const [selectedProject, setSelectedProject] = useState({})
    const { data: projects, isLoading, refetch, isFetching } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/project`)
            return data.data
        }
    })
    const checkDelete = (id: string) => {
        toast((t: { id: string | undefined; }) => (
            <div className="flex text-lg text-center flex-col  gap-2">
                Are you sure you want to delete this project?
                <span className='space-x-3'>
                    <button
                        onClick={() => {
                            toast.dismiss(t.id)
                            return;
                        }}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800  py-1 px-2 rounded"
                    >
                        Dismiss
                    </button>
                    <button
                        onClick={() => {
                            toast.dismiss(t.id);
                            handleDelete(id);
                        }}
                        className="bg-red-500 hover:bg-red-600 text-white  py-1 px-2 rounded"
                    >
                        Delete
                    </button>
                </span>
            </div>
        ));
    }
    const handleDelete = async (id: string) => {
        try {

            const { data } = await axios.delete(`${process.env.NEXT_PUBLIC_API}/project/${id}`)
            console.log({ data })
            console.log(id)
            if (data.success) {
                toast.success(data?.message);
                refetch()
            }
        } catch (error: any) {
            console.log(error)
            toast.error(error?.message)
        }
    }
    if (isLoading) return <Loading />
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-6">My Projects</h1>
            <div className="bg-white rounded-lg shadow-md">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Title
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Email
                                </th>

                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Start Date
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    End date
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {projects?.map((project) => (
                                <tr key={project?._id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                {false ? (
                                                    <Image
                                                        className="h-10 w-10 rounded-full"
                                                        src={project?.image}
                                                        alt={project?.title}
                                                        height={50}
                                                        width={50}
                                                    />
                                                ) : (
                                                    <FaUserCircle className="h-10 w-10 text-gray-400" />
                                                )}
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {project?.title}
                                                </div>
                                                {/* <div className="text-sm text-gray-500">
                                                    ID: {usprojecter?._id}
                                                </div> */}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{project?.email}</div>
                                    </td>

                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${project?.status === "pending"
                                                ? "bg-red-100 text-red-800"
                                                : project?.status === 'in-progress' ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"
                                                }`}
                                        >
                                            {project?.status}
                                        </span>
                                    </td>

                                    {/* <td className="px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${project.status === "active"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-red-100 text-red-800"
                                                }`}
                                        >
                                            {project?.status || "active"}
                                        </span>
                                    </td> */}
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{project?.startDate}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{project?.endDate}</div>
                                    </td>
                                    <td className="px-6 flex items-center gap-1 py-4 whitespace-nowrap">

                                        <button onClick={() => checkDelete(project?._id)} className='hover:bg-slate-100 p-2 rounded-full'>
                                            <MdDelete size={24} className=' text-red-500' />
                                        </button>

                                        <button onClick={() => {
                                            setUpdate(true)
                                            setSelectedProject(project)
                                        }} className='hover:bg-slate-100 p-2.5 rounded-full'>
                                            <FaPen size={20} className=' text-blue-500' />
                                        </button>

                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {update && <UpdateProject refetch={refetch} setUpdate={setUpdate} project={selectedProject} isFetching={isFetching} />}

        </div>
    );
};

export default Projects;