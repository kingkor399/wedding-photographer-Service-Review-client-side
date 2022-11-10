import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import MyReviewsCard from './MyReviewsCard';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myreviews, setMyreviews] = useState([])

    useEffect(() => {
        fetch(`https://service-review-server-chi.vercel.app/myreview?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyreviews(data))
    }, [user?.email])
    const handleDelete = _id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`https://service-review-server-chi.vercel.app/myreview/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast('deleted successfully')
                        const remaining = myreviews.filter(reviw => reviw._id !== _id);
                        setMyreviews(remaining)
                    }
                })
                .catch(err => console.log(err))
        }
    }
    return (
        <div>
            {
                myreviews.map(myreview => <MyReviewsCard
                    key={myreview._id}
                    myreview={myreview}
                    handleDelete={handleDelete}
                ></MyReviewsCard>)
            }
        </div>
    );
};

export default MyReviews;