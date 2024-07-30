import React, { useState } from 'react'
import { LiaSearchSolid } from "react-icons/lia";
import { useSearchParams } from 'react-router-dom';
import { GiphyFetch } from "@giphy/js-fetch-api";


const Searchbar = () => {
  
  const [searchItem, setSearchItem] = useState("");
  // let [searchParams, setSearchParams] = useSearchParams();
  const gf = new GiphyFetch("VuCe6qR6Xj6B3eT1oXn4W8KRHPuP11IG");
  
  function search(e) {
    e.preventDefault();
    setSearchItem(e.target[0].value);
    let params = e.target[0].value;
    searchGIF(params);
    
    // setSearchParams(params);
    // console.log(searchParams);
    // e.target[0].value = "";
  }

  const searchGIF = async (params) => {
    try {
      const result = await gf.search(params, { sort: "recent" });
      console.log(`search`, result);
    } catch (error) {
      console.error(`search`, error);
    }
  };

  return (
    <div>
      <form className='flex items-center w-full h-16' onSubmit={(e)=>{search(e)}}>
        <input type="text" className='w-11/12 h-full rounded-l-md text-black px-4 text-xl outline-none' placeholder='Search all the GIFs and Stickers' />
        <button className='h-full w-1/12 flex items-center justify-center cursor-pointer rounded-r-md bg-gradient-to-t from-pink-500 to-red-500'><LiaSearchSolid className='h-9 w-9' /></button>
      </form>
    </div>
  )
}

export default Searchbar