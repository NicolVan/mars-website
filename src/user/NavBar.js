import React from 'react';
import { Link } from 'react-router-dom';
import planet from './image/logo1.png'

const Navbar = () => {
  return (
    <nav className='bg-black p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/welcomepage' className='text-white font-bold'><img className ='w-10 h-10 'alt='planet logo' src={planet}/></Link>
        <div>
          <Link to='/welcomepage' className='text-white mx-4'>Home</Link>
          <Link to='/about' className='text-white mx-4'>About</Link>
          <Link to='/'></Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
