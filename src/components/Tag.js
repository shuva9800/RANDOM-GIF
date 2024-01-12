import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import useGif from '../hooks/useGif';

export default function Tag() {
  const[tag,setTag]=useState('CAR');

const{gif,loading,fetchData}=useGif(tag);

  return (
    <div className='tag-items'>
        <h2>A {tag} GIF</h2>
        <div>
          {
            loading?(<Loading/>):(<img src={gif} className='image'/> )
          }
        </div>
        <input
          className='btn'
          type='text'
          value={tag}
          onChange={(event)=>setTag(event.target.value)}
        />
        <button onClick={()=> fetchData(tag)} className='btn'>GENERATE</button>
    </div>
  )
}
