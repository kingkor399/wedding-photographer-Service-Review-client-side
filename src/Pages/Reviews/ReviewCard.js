import React from 'react';

const ReviewCard = ({ review }) => {
    const { customer, serviceName, email, message } = review;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mb-4">
                <figure className="px-10 pt-10">
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <p className="card-title">ServiceName: {serviceName}</p>
                    <p className='font-bold'>Customer: {customer}</p>
                    <p className='font-bold'>Email: {email}</p>
                    <p className='font-bold'>Message: {message}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;