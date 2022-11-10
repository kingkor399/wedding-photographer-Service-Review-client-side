import React from 'react';
import { Link } from 'react-router-dom';

const AllserviceCard = ({ allservice }) => {
    const {_id, img, title, price } = allservice;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <p className='text-2xl font-semibold text-orange-600'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/servicedetails/${_id}`}>
                        <button className="btn btn-success mx-auto">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllserviceCard;