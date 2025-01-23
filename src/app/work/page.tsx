import Details from '@/utils/Details';
import React from 'react';
import { workData } from '../../components/work/workData';
import WorkCard from '@/components/work/WorkCard';

const MyWork = () => {
    return (
        <div className=" text-white my-12 lg:my-20   flex items-center justify-center">
            <div className="container mx-auto px-0 lg:px-6 py-6">
                {/* Header */}

                <Details title='My Works' desc='Showcase About Works' />
                <div className='border-t pt-16 grid grid-cols-1  md:grid-cols-4 lg:grid-cols-12 gap-x-8 gap-y-16'>
                    {
                        workData.map((el) => <WorkCard key={el.id} item={el} />)
                    }
                </div>

            </div>
        </div>
    );
};

export default MyWork;