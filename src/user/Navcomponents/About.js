
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function About(){
  const [marsData, setMarsData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchMarsData =async ()=>{
      try{
        const response = await axios.get('https://api.le-systeme-solaire.net/rest/bodies/mars');
        setMarsData(response.data);
      } catch(err) {
        setError(err);
      }
    };
    fetchMarsData();
  },[]);

  if (error) return <div>Error: {error.message}</div>;
  if (!marsData) return <div>Loading...</div>;

    return(
        <>
          <div className='bg-black h-screen object-center justify-items-center '>
            <div className='grid justify-items-center'>
                <img className='border-none h-[800px] w-[1100px] costum-left-rounded object-center mt-10 shadow-lg shadow-orange-800/50'
                alt='marsphoto'
                src='https://mars.nasa.gov/msl-raw-images/msss/00046/mhli/0046MH0000120000100165R00_DXXX.jpg'/>
            </div>
            <div>
                <h1 className='text-white text-7xl text-center font-Nasaliza'>Mars</h1>
            </div>
            <div className="bg-black p-4 rounded-lg text-white shadow-lg shadow-orange-800/50">
                <p><strong>Mass:</strong>&nbsp;  {marsData.mass ? `${marsData.mass.massValue} x 10 ^ ${marsData.mass.massExponent} kg`: 'N/A'}</p>
                <p><strong>Gravity:</strong>&nbsp; {marsData.gravity} m/s²</p>
                <p><strong>Mean Radius:</strong>&nbsp;  {marsData.meanRadius} km</p>
                <p><strong>Orbital Period:</strong>&nbsp;  {marsData.sideralOrbit} days</p>
                <p><strong>Moons:</strong>&nbsp;  {marsData.moons ? marsData.moons.map(moon => moon.moon).join(', ') : 'None'}</p>
              </div>
          </div>
        </>
    )
}
export default About