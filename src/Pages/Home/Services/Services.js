import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://service-review-server-chi.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center mb-4'>
                <h3 className='text-3xl font-bold text-warning'>My Services</h3>
                <p>We’re So Excited To Be In The Center Of The Happiest Day In People’s Lives, And This Energy Drives Us<br />
                    Forward! Look Around, You Can Find The Full Wedding Photo Galleries In Our Blog, Or Check The Latest<br />
                    Updates In Our Wedding Istagram! Have Fun!
                </p>
            </div>
            <div className='grid gap-36 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-4'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;