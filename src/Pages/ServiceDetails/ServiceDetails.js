import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Reviews from '../Reviews/Reviews';

const ServiceDetails = () => {
    const { _id, title, img, price, details } = useLoaderData();

    const {user} = useContext(AuthContext);
    const handleReview = event =>{
        event.preventDefault();
        const img = user?.photoURL
        const form = event.target;
        const name = `${form.firstName.value} ${form.firstName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;
        
        const review = {
            service: _id,
            serviceName: title, price,
            customer: name, email, phone, message, img
        }

        fetch('https://service-review-server-chi.vercel.app/reviews',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                toast('reviews successfully')
                form.reset();
            }
        })
        .catch(err => console.log(err))
    }
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
            <form onSubmit={handleReview}>
                <h2 className='text-3xl text-orange-600 font-semibold mb-4'>Please Services Reviews:</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full input-bordered" required />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full input-bordered" required />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full input-bordered"  required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} readOnly className="input input-ghost w-full input-bordered" required />
                </div>
                <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>
                <input className='btn btn-success mb-4' type='submit' value='Reviews'></input>
            </form>
            <Reviews></Reviews>
        </div>
    );
};

export default ServiceDetails;