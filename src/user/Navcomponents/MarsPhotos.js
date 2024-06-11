
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MarsPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos', {
          params: {
            sol: 3900, 
            api_key: 'RxXLeqShHL34jTie0cPNygo3TBttW0WWz8iUC5t6', 
          },
        });
        setPhotos(response.data.photos);
      } catch (err) {
        setError(err);
      }
    };

    fetchPhotos();
  }, []);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='bg-black'>
      <h1 className='text-white text-3xl text-center '>Mars Rover Photos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {photos.map((photo) => (
          <div key={photo.id} className="bg-black p-4 rounded-lg shadow-lg shadow-orange-800/50">
            <img src={photo.img_src} alt={`Mars Rover: ${photo.rover.name}`} className="rounded-lg mb-4" />
            <p className="text-white">Rover:&nbsp;  {photo.rover.name}</p>
            <p className="text-white">Camera: &nbsp; {photo.camera.full_name}</p>
            <p className="text-white">Date: &nbsp; {photo.earth_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarsPhotos;
