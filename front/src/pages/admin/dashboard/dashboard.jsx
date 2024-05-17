
    import React, { useContext } from 'react'
    import { Helmet } from 'react-helmet'
    import MainContext from '../../../context/context'
import axios from 'axios'
    
    const Dashboard = () => {
        const {data,setdata} = useContext(MainContext)
        const isDelete =(id)=>{
            axios.delete(`http://localhost:8080/api/Product/${id}`).then(
                res=>{
                    setdata([...res.data])
                }
            )
        }
        return (
        <>
                <Helmet>
                    <title>Dashboard</title>
                </Helmet>
                <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">image</th>
      <th scope="col">title</th>
      <th scope="col">catagory</th>
      <th scope="col">delete</th>
      
    </tr>
  </thead>
  <tbody>
    {
        data.map((item,index)=>{
            return(
                <tr key={index}>
                <th scope="row">{index}</th>
                <td><img src={item.image} width={"60px"} height={"60px"} alt="" /></td>
                <td>{item.title}</td>
                <td>{item.catagory}</td>
                <td><button onClick={()=>{
isDelete(item._id)
                }}>delete</button></td>
                </tr>

            )
        })
    }

  </tbody>
</table>
        </>
        )
    }
    
    export default Dashboard
        