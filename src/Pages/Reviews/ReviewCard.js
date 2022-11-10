import React from 'react';
import user from '../../images/user.jpg'
const ReviewCard = ({ review }) => {
    const { customer, serviceName, email, message } = review;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mb-4">
                <figure className="px-10 pt-10">
                   {
                    customer?.img ?
                    <img src={customer?.img}></img>
                    :
                    <img src={user}></img>
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

export default ReviewCard;