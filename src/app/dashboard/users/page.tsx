import Image from 'next/image';
import React from 'react';
type TUser = {
    _id: string;
    fullName: string;
    email: string;
    image?: string;
    role: 'user' | 'admin';
    status: 'active' | 'inactive'
}
import { FaUserCircle } from 'react-icons/fa';
const users: TUser[] = [
    {
        _id: "63a7d1a8e0c5e613b8c7e010",
        fullName: "John Doe",
        email: "johndoe@example.com",

        role: "admin",
        status: "active",

    },
    {
        _id: "63a7d1b2e0c5e613b8c7e011",
        fullName: "Jane Smith",
        email: "janesmith@example.com",

        role: "user",
        status: "inactive",

    },
    {
        _id: "63a7d1c3e0c5e613b8c7e012",
        fullName: "Emily Johnson",
        email: "emilyj@example.com",

        role: "user",
        status: "active",

    },
    {
        _id: "63a7d1d4e0c5e613b8c7e013",
        fullName: "Michael Brown",
        email: "michaelb@example.com",

        role: "admin",
        status: "inactive",

    },


];




const Users = () => {

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-6">Users Management</h1>
            <div className="bg-white rounded-lg shadow-md">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    User
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Role
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Join Date
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {users?.map((user) => (
                                <tr key={user?._id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                {user?.image ? (
                                                    <Image
                                                        className="h-10 w-10 rounded-full"
                                                        src={user?.image}
                                                        alt={user?.fullName}
                                                    />
                                                ) : (
                                                    <FaUserCircle className="h-10 w-10 text-gray-400" />
                                                )}
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {user?.fullName}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    ID: {user?._id}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{user?.email}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${user?.role === "admin"
                                                ? "bg-purple-100 text-purple-800"
                                                : "bg-green-100 text-green-800"
                                                }`}
                                        >
                                            {user?.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {/* {format(new Date(user?.createdAt), "PP")} */}
                                        22/01/2025
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === "active"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-red-100 text-red-800"
                                                }`}
                                        >
                                            {user.status || "active"}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    );
};

export default Users;