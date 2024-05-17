import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import MainContext from '../../../context/context'

const Basket = () => {
    const {basket, addBasket, deleteBasket} = useContext(MainContext)
  return (
    
    <>
         <Helmet>
            <title>basket</title>
        </Helmet>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">image</th>
      <th scope="col">title</th>
      <th scope="col">catagory</th>
      <th scope="col">-</th>
      <th scope="col">count</th>
      <th scope="col">+</th>
      
    </tr>
  </thead>
  <tbody>
    {
        basket.map((item,index)=>{
            return(
                <tr key={index}>
                <th scope="row">{index}</th>
                <td><img src={item.item.image} width={"60px"} height={"60px"} alt="" /></td>
                <td>{item.item.title}</td>
                <td>{item.item.catagory}</td>
                <td><button className='btn btn-danger' onClick={()=>{deleteBasket(item.item)}}> -</button></td>
                <td>{item.count}</td>
                <td><button className='btn btn-primary' onClick={()=>{addBasket(item.item)}}> +</button></td>
                <td></td>
                </tr>

            )
        })
    }

  </tbody>
</table>
    </>
  )
}

export default Basket