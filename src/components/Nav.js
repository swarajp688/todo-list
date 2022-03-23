import React, { useEffect, useState } from 'react'


const Nav = () => {
    const [data , setData]=useState('');
    useEffect( () => {
        const randomNumber = Math.floor(Math.random() * ( 999 - 0 + 1)+0);
        const fetchImg = async ()=> {
            const response = await fetch(`https://picsum.photos/id/${randomNumber}/info`);
            const data= await response.json();
            setData(data);
            
        }
        fetchImg();
    },[]);
  return (
    <div className='nav'>
        <h1 className='nav-heading'>TODO-APP</h1>
        <div>
            <img className='user-profile' src={data.download_url} />
        </div>
    </div>
  )
}

export default Nav