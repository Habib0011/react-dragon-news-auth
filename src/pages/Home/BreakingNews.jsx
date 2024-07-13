import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const BreakingNews = () => {
    return (
        <div className='flex gap-4 mt-2 bg-gray-100 p-2'>
            <button className="btn btn-danger bg-rose-700  text-white">
                Breaking News
            </button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link to='/' className='mr-2'>I can be a React component, multiple React components, or just some text.....</Link>
                <Link to='/' className='mr-2'>I can be a React component, multiple React components, or just some text.....</Link>
                <Link to='/' className='mr-2'>I can be a React component, multiple React components, or just some text.....</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;