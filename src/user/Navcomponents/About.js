import React from 'react';

function About(){
    return(
        <>
          <div className='bg-black h-screen object-center justify-items-center '>
            <div>
                <h1 className='text-white text-7xl text-center font-Nasaliza'>Mars</h1>
            </div>
            <div className='grid justify-items-center'>
                <img className='border-none costum-left-rounded object-center mt-10 shadow-lg shadow-orange-800/50'
                alt='marsphoto'
                src='https://csunshinetoday.csun.edu/wp-content/uploads/Students-Study-Mars-Soil-for-Signs-of-Ancient-Life-in-ARCSNASA-Project.jpg'/>
            </div>
          </div>
        </>
    )
}
export default About