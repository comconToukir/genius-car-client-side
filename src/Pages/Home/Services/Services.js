import React, { useEffect, useState } from 'react';
import OrangeOutlineButton from '../../Shared/Buttons/OrangeOutlineButton';
import ServiceCard from './ServiceCard';

const Services = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div className='text-center'>
      <h1 className='font-bold text-lg text-orange-500'>Service</h1>
      <h2 className='text-4xl font-semibold my-5'>Our Service Area</h2>
      <p className='w-3/5 mx-auto mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In perspiciatis incidunt eius? Ut, vitae nobis animi voluptas id quisquam aliquam.</p>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          services.map(service => <ServiceCard key={service._id} serviceData={service} />)
        }
      </div>
      <OrangeOutlineButton className="my-9">More Services</OrangeOutlineButton>
    </div>
  );
};

export default Services;