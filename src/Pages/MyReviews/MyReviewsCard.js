import React from 'react';
import man from '../../images/man.jpg'
const MyReviewsCard = ({ myreview, handleDelete }) => {
    const {_id, customer, serviceName, email, message} = myreview;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mb-4">
                <figure className="px-10 pt-10">
                    {
                        customer?.img ?
                        <img src={customer?.img}></img>
                        :
                        <img src={man}></img>
                    }
                </figure>
                <div className="card-body items-center text-center">
                    <p className="card-title">ServiceName: {serviceName}</p>
                    <p className='font-bold'>Customer: {customer}</p>
                    <p className='font-bold'>Email: {email}</p>
                    <p className='font-bold'>Message: {message}</p>
                    <button onClick={() => handleDelete(_id)} className="btn btn-warning mx-auto">Delete Review</button>
                </div>
            </div>
        </div>
    );
};

export default MyReviewsCard;