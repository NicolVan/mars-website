
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Phobos= () => {
  const [PhobosData, setPhobosData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhobosData = async () => {
      try {
        const response = await axios.get('https://api.le-systeme-solaire.net/rest/bodies/phobos');
        setPhobosData(response.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchPhobosData();
  }, []);

  if (error) return <div>Error: {error.message}</div>;
  if (!PhobosData) return <div>Loading...</div>;

  return (
        <div className='bg-black h-screen flex items-center justify-center'> 
          <div>Phobos
            <img className='object-center '
            src='https://cdn.britannica.com/11/173011-138-7E191ED8/Video-Phobos-rotation-photographs-orbiter-Mars-Express.jpg?w=800&h=450&c=crop'
            alt='deimos'/>
          </div>
          <div className="p-4 bg-black text-white rounded-lg m-2 shadow-lg shadow-orange-800/50">
            <h2 className="text-2xl font-bold mb-2">{PhobosData.englishName}</h2>
            <p><strong>Mass:</strong> {PhobosData.mass ? `${PhobosData.mass.massValue} x 10^${PhobosData.mass.massExponent} kg` : 'N/A'}</p>
            <p><strong>Gravity:</strong> {PhobosData.gravity} m/s²</p>
            <p><strong>Mean Radius:</strong> {PhobosData.meanRadius} km</p>
            <p><strong>Orbital Period:</strong> {PhobosData.sideralOrbit} days</p>
            <p><strong>Discovery Date:</strong> {PhobosData.discoveryDate}</p>
            <p><strong>Discovered By:</strong> {PhobosData.discoveredBy}</p>
          </div>
        </div>
  );
};

export default Phobos;