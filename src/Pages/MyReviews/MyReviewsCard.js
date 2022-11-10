import React from 'react';

const MyReviewsCard = ({ myreview }) => {
    const { customer, serviceName, email, message} = myreview;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mb-4">
                <figure className="px-10 pt-10">
                    {
                        customer?.img ?
                        <img src={customer?.img}></img>
                        :
                        <h1></h1>
                    }
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

export default MyReviewsCard;