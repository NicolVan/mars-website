
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MarsRover = () => {
  const [rovers, setRovers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRovers = async () => {
      try {
        const response = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers', {
          params: {
            api_key:'RxXLeqShHL34jTie0cPNygo3TBttW0WWz8iUC5t6', 
          },
        });
        setRovers(response.data.rovers);
      } catch (err) {
        setError(err);
      }
    };

    fetchRovers();
  }, []);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='p-4 grid bg-black h-screen items-center justify-center object-center'>
        <img className='object-center w-[1100px] h-[800px] rounded-[50px] shadow-lg shadow-orange-800/50'
        src='https://images.newscientist.com/wp-content/uploads/2020/07/29105311/29-july_mars_perseverance.jpg'
        alt='mars rover'/>
        <div className='mt-5'>
            <h1 className="text-3xl text-white font-bold mb-10 text-center ">Mars Rovers</h1>
        </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {rovers.map((rover) => (
            <div key={rover.id} className="bg-black p-4 rounded-mg text-white shadow-lg shadow-orange-800/50">
             <h2 className="text-xl font-bold mb-2">{rover.name}</h2>
                <p>Launch Date: &nbsp; {rover.launch_date}</p>
                <p>Landing Date: &nbsp; {rover.landing_date}</p>
                <p>Status: &nbsp; {rover.status}</p>
                <p>Total Photos: &nbsp; {rover.total_photos}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarsRover;
