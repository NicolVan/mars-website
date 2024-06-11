
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Deimos = () => {
  const [deimosData, setDeimosData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDeimosData = async () => {
      try {
        const response = await axios.get('https://api.le-systeme-solaire.net/rest/bodies/deimos');
        setDeimosData(response.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchDeimosData();
  }, []);

  if (error) return <div>Error: {error.message}</div>;
  if (!deimosData) return <div>Loading...</div>;

  return (
        <div className='bg-black flex items-center justify-center'> 
          <div>
            <img className='object-center'
            src='https://upload.wikimedia.org/wikipedia/commons/8/86/NASA-Deimos-MarsMoon-20090221.jpg'
            alt='deimos'/>
          </div>
          <div className="p-4 bg-black text-white rounded-lg m-2 shadow-lg shadow-orange-800/50">
            <h2 className="text-2xl font-bold mb-2">{deimosData.englishName}</h2>
            <p><strong>Mass:</strong> {deimosData.mass ? `${deimosData.mass.massValue} x 10^${deimosData.mass.massExponent} kg` : 'N/A'}</p>
            <p><strong>Gravity:</strong> {deimosData.gravity} m/s²</p>
            <p><strong>Mean Radius:</strong> {deimosData.meanRadius} km</p>
            <p><strong>Orbital Period:</strong> {deimosData.sideralOrbit} days</p>
            <p><strong>Discovery Date:</strong> {deimosData.discoveryDate}</p>
            <p><strong>Discovered By:</strong> {deimosData.discoveredBy}</p>
          </div>
        </div>
  );
};

export default Deimos;
