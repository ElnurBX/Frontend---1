
import React, { useContext, useEffect, useState } from 'react'
import MainContext from '../../context/context'
import './Sortescards.scss'
import { Link } from 'react-router-dom'

const Sortedcards = () => {
    const {data,setdata ,addBasket} = useContext(MainContext)
    const [sorted,setSorted]=useState([])
    useEffect(() => {
        setSorted([...data])
    },[])
    const Sorter=(str)=>{
    
        setSorted(data.filter((x)=>`${x.catagory}` === str))
        console.log(sorted)
    }
    const Search =(str)=>{
        setSorted(data.filter((item) => 
        item.title && item.title.toLowerCase().includes(str.toLowerCase())
         ));
    }
  return (
    <section className='Sortedcards mb-5'>
        <div className="container">
       <h5 className='text-center'>OUR MENU</h5> 
        <h2 className='text-center'>Discover Our Exclusive Menu</h2>
        <div className=" d-flex justify-content-center gap-3 mt-4 mb-5">
            <button onClick={()=>{Sorter("Main")}}>Main</button>
            <button  onClick={()=>{Sorter("Dessert")}} >Dessert</button>
            <button  onClick={()=>{Sorter("Drinks")}}>Drinks</button>
        </div>
        <div>
            <input className='p-1 m-1' placeholder='search' type="text" name="" id="" onChange={(e)=>{Search(e.target.value)}}/>
        </div>
        <div className="col-12">
            <div className="row row-gap-2">
                {
                    sorted.slice(0,8).map((item,index)=>{
                        return(
                            <div className='col-6 '>
                                <div className='Sortedcards__card '  key={index}>
                                    <img src={item.image}  alt="" />
                                    <div className="">
                                        <h3  className='fs-1'>{item.title}</h3>
                                        <h5  className='text-secondary  fs-5'>{item.description   }</h5>
                                        <span onClick={()=>{addBasket(item)}}>add basket</span> <Link to={`/det/${item._id}`}> details</Link>
                                    </div>
                                    <span className='h1'>{item.price}$</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <p className='text-secondary text-center mt-5 mb-5'>Even the all-powerful Pointing has no control about the blind texts it is an almost</p>
        <div className=" d-flex justify-content-center">
            <button className='p-3 border makerez'>Make a Rezervation</button>
        </div>
        </div>
    </section>
  )
}

export default Sortedcards