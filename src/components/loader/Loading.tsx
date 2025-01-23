import React from 'react';
import { ImSpinner3 } from "react-icons/im";

const Loading = () => {
    return (
        <div className=' min-h-screen w-full flex justify-center items-center'>
            <ImSpinner3 size={45} className='animate-spin text-orange-600' />
        </div>
    );
};

export default Loading;