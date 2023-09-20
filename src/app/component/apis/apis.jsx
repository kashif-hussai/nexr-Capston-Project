"use client"
// import React , { useEffect, useState } from "react"

import React, { useState } from 'react';
const Apis = () =>{

  
   
    const [title, setTitle] = useState("");
    const [bodyData, setBodyData] = useState("");
    
     
    const SubmitHandler = (e) =>{
      e.preventDefault();
      console.log(title, bodyData );
      
      
      fetch("https://jsonplaceholder.typicode.com/posts" ,{
        method: "POST",
        body: JSON.stringify({
          "userId": 1,
          "id": 4,
          "title": title,
          "body": bodyData,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
  }
    return(
      <div>
<div>card</div>
<div>
    <form onSubmit={SubmitHandler}> 
    <input value={title} onChange={(e)=>{setTitle(e.target.value)}} type="text"placeholder="title" />
        <input  value={bodyData} onChange={(e)=>{setBodyData(e.target.value)}} type="text" placeholder="body" />
        <button type="submit"> get form data</button>
    </form>
</div>
{/* <button onClick={postData}> get Going</button> */}
        </div>
    )
  } 
    
    export default Apis