import React, { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReview] = useState([]);

    useEffect(()=>{
        fetch('https://service-review-server-chi.vercel.app/reviews')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])
    return (
        <div>
            <h2 className='text-3xl text-orange-600 font-semibold mb-4'>Customer Reviews:</h2>
            <div className='grid gap-36 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                reviews.map(review => <ReviewCard
                key={review._id}
                review={review}
                ></ReviewCard>)
            }
        </div>
        </div>
    );
};

export default Reviews;