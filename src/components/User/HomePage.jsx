import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cards from './Cards';

function HomePage() {
    const[posts,setPosts] = useState([]);

    async function getAllPost(){
        let res = await axios.get("http://localhost:8000/notes/getnote")
        console.log(res.data);
        setPosts(res.data);


    }
    useEffect(()=>{
        getAllPost();

    },[])
  return (
    <div className='w-[90%] mx-auto border '>
        Home page where you can c all posts by all users
        {
            posts.map((post,i)=>(
                <div key={post._id}>
                 <p>{post.title}</p>
                 <p>{post.description}</p>
                </div>
               
            ))
        }
        <Cards/>


    </div>
  )
}

export default HomePage