"use client"
import Sidebar from '@/components/dashboard/Sidebar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { ReactNode, useState } from 'react';
const queryClient = new QueryClient();
const DashboardLayout = ({ children }: { children: ReactNode }) => {
    const [open, setOpen] = useState(true)
    return (
        <QueryClientProvider client={queryClient}>
            <div className='flex gap-8  bg-white min-h-screen'>
                <Sidebar isOpen={open} setIsOpen={setOpen} />

                <div className='flex-1  '>
                    {children}
                </div>
            </div>
        </QueryClientProvider>
    );
};

export default DashboardLayout;