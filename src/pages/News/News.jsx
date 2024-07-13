import React from 'react';
import RightSideNavbar from '../Shared/RightSideNavbar/RightSideNavbar';
import Header from '../Shared/Header/Header';
import { useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const News = () => {
    const { id } = useParams()
    return (

        <div >
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid md:grid-cols-4'>
                <div className='col-span-3'>
                    <h2 className="text-5xl">
                        THis is news
                    </h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNavbar></RightSideNavbar>
                </div>
            </div>
        </div>
    );
};

export default News;