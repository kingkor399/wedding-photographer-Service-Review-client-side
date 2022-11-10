import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [myreviews, setMyreviews] = useState([])

    useEffect(()=>{
        fetch(`https://service-review-server-chi.vercel.app/myreview?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setMyreviews(data))
    },[user?.email])
    return (
        <div>
            <h2>myreview {myreviews}</h2>
        </div>
    );
};

export default MyReviews;