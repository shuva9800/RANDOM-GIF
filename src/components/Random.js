import React, { useEffect, useState } from 'react'
import axios from 'axios';

import Loading from './Loading';
import useGif from '../hooks/useGif';
// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const API_KEY = 'K4wZdMeeYd58ayN62bpjvRVqjASdk1SN';
export default function Random() {

const{gif,loading,fetchData}=useGif()

function changeHandeler(){
  fetchData();
}

  return (
    <div className='random-item'>
        <h2>A RANDOM GIF</h2>
        <div>
          {
            loading?(<Loading/>):(<img src={gif} className='image'/> )
          }
        </div>
        <button onClick={changeHandeler} className='btn'>GENERATE</button>
    </div>
  )
}
