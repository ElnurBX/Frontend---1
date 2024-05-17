import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router'

const Details = () => {
    const[details,setdetails]=useState([])
    const { id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8080/api/Product/${id}`).then(res=>{
            setdetails(res.data);
           
        })
    },[])
  return (
    <main className='container'>
 
         <Helmet>
            <title>details</title>
        </Helmet>
        <div className='row'>
            <div className="col-6">
            <h1>
                {details.title}

            </h1>
            <p>{details.description}</p>
            <p>{details.price}$</p>
            <p>{details.catagory   }</p>
        </div>
        <div className="col-6">
            <img src={details.image} className='w-100' alt="" />
        </div>
        </div>
    </main>
  )
}

export default Details