import React, { useEffect, useState } from 'react'
import Card from './Card'
import authService from '../../appwrite/auth'


function Learn() {
  const [data, setData] = useState([]);

  useEffect(() => {
    authService
      .getData()
      .then((res) => setData(res?.documents || []))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='mt-20 mx-auto w-full max-w-7xl px-4'>
      <h2 className='text-2xl text-center font-semibold py-7'>
        Technologies I’m Proficient In
        <span className='inline-block w-2 h-2 ml-2 rounded-full bg-yellow-600'></span>
      </h2>

      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {data.length === 0 ? (
          <p className='text-center col-span-full'>Loading...</p>
        ) : (
          data.map((ele) => (
            <Card
              key={ele.$id}
              img={authService.getFilePreview(ele.image_id).href}
              name={ele.name}
              id={ele.$id}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Learn;
