import Banner from '@/components/Banner';
import Discover from '@/components/Discover';
import Projects from '@/components/projects/Projects';
import Testimonial from '@/components/Testimonial';
// import { usePathname } from 'next/navigation';
import React from 'react';
// import { MainLayout } from './layout';
// import Dashboard from './dashboard/page';

const Home = () => {
  // const pathName = usePathname()

  return (
    <div className='space-y-28  lg:space-y-32 '>

      <Banner />
      <Discover />
      <Projects />
      <Testimonial />
    </div>

  );
};

export default Home;