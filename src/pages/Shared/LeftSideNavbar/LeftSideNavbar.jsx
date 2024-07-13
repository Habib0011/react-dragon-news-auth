import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftSideNavbar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2 className=' ml-2 p-2 text-2xl'>All Caterogy</h2>
            <div className='space-y-6'>
                {
                    categories.map(category =>

                        <NavLink to={`category/${category.id}`} className="block ml-5 text-xl font-semibold"
                            key={category.id}>{category.name}</NavLink>

                    )
                }
            </div>
        </div>
    );
};

export default LeftSideNavbar;