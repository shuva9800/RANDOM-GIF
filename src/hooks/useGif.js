import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';


const API_KEY = 'K4wZdMeeYd58ayN62bpjvRVqjASdk1SN';
const useGif = (tag) => {

  const[gif, setGif]=useState('');
  const[loading,setLoading]=useState(false);

  const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


async function fetchData(tag){
  setLoading(true);
  const {data}=await axios.get(tag?`${url}&tag=${tag}`:url);
  const imgsource=data.data.images.downsized.url;
  setGif(imgsource);
  setLoading(false);
}

useEffect(()=>{
  fetchData();
},[]);

return {gif,loading,fetchData};
}

export default useGif
