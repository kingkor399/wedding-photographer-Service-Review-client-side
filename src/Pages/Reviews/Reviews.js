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
            {
                reviews.map(review => <ReviewCard
                key={review._id}
                review={review}
                ></ReviewCard>)
            }
        </div>
    );
};

export default Reviews;