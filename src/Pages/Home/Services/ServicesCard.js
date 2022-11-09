import React from 'react';

const ServicesCard = ({ service }) => {
    const { img, title, price} = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <p className='text-2xl font-semibold text-purple-600'>${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-success mx-auto">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;