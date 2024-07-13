import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ SingleNews }) => {
    const { title, image_url, details, author, _id } = SingleNews
    return (
        <div className="card bg-base-100  shadow-xl mb-10">
            <figure>
                <img
                    src={image_url}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {details.length > 200 ?

                    < p > {details.slice(0, 200)} <Link className='text-green-700 bg-green-100' to={`/SingleNews/${_id}`}>Read More...</Link> </p> : details
                }

            </div>
        </div >
    );
};

export default NewsCard;