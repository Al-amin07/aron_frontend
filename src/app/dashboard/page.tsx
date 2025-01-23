"use client"
import Loading from '@/components/loader/Loading';
import { TProject } from '@/components/projects/project.type';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
// const projects = [
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
// ]
const Dashboard = () => {
    const { data: projects, isLoading } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/project`)
            return data.data
        }
    })
    if (isLoading) return <Loading />
    return (
        <div className="p-4 ">
            <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-2">Total Projects</h2>
                    <p className="text-3xl font-bold text-blue-600">{projects?.length}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-2">Pending</h2>
                    <p className="text-3xl font-bold text-red-600">
                        {

                            projects?.filter((project: TProject) => project?.status === "pending")
                                .length
                        }
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-2">In Progress</h2>
                    <p className="text-3xl font-bold text-yellow-600">

                        {projects?.filter((project: TProject) => project?.status === "in-progress").length}
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-2">Completed</h2>
                    <p className="text-3xl font-bold text-green-600">
                        {projects?.filter((project: TProject) => project?.status === "completed").length}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;