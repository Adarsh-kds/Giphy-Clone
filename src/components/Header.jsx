import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiDotsVertical } from "react-icons/hi";
import Categories from './Categories';
import { MdFavoriteBorder } from "react-icons/md";

const Header = () => {

  const [categories, setCategories] = useState(false);

  let arr = [];
  for (let i = 0; i < 4; i++) {
    arr.push(`Reaction`);
  }

  return (
    <div className='py-2 pt-2 px-4 relative'>
      <div className='flex items-center justify-between mb-1'>
        <div>
          <Link to='/' className="logo flex items-center gap-1">
            <img src="./logo.svg" alt="Giphy Logo" className='max-h-10' />
            <h1 className='text-white text-5xl font-bold tracking-tight flex items-start'>GIPHY</h1>
          </Link>
        </div>
        <div className="text-white flex items-center gap-1">
          {arr.map((index, key) => <div key={key} className='border-b-4 py-2 px-4 hover:bg-gradient-to-t from-pink-500 to-red-500 cursor-pointer'>{index}</div>)}
          <Link to='/favorites' className='border-b-4 py-2 px-4 hover:bg-gradient-to-t from-pink-500 to-red-500 cursor-pointer flex items-center gap-2'>Fav<span><MdFavoriteBorder /></span></Link>
          <div className='flex items-center cursor-pointer hover:bg-gradient-to-t from-pink-500 to-red-500 justify-center border-b-4 px-4 py-3' onClick={() => { setCategories(!categories) }}>
            <HiDotsVertical />
          </div>
        </div>
      </div>
      {categories && (<div className={`categories bg-slate-300 w-full absolute top-full left-0 z-20 h-96`}><Categories /></div>)}
    </div>
  )
}

export default Header