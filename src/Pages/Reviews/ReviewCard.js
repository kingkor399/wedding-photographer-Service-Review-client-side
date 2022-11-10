import React from 'react';

const ReviewCard = ({review}) => {
    const {customer} = review;
    return (
        <div>
            <h1>{customer}</h1>
        </div>
    );
};

export default ReviewCard;