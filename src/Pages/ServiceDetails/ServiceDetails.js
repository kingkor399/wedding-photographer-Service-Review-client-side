import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { title, img, price, details } = useLoaderData();
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mb-4 pt-4">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='font-semibold text-2xl'>Price: {price}</p>
                    <p className=''>Details: {details}</p>
                </div>
            </div>
            <form>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
                    <input type="text" placeholder="First Name" className="input input-ghost w-full" />
                    <input type="text" placeholder="Last Name" className="input input-ghost w-full" />
                    <input type="text" placeholder="Your Phone" className="input input-ghost w-full" />
                    <input type="text" placeholder="Your email" className="input input-ghost w-full" />
                </div>
            </form>
        </div>
    );
};

export default ServiceDetails;