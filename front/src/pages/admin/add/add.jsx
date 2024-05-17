
    import React, { useContext } from 'react'
    import { Helmet } from 'react-helmet'
    import MainContext from '../../../context/context'
    import { Formik } from 'formik';
    import axios from 'axios';
    const Add = () => {
        const {data,setdata} = useContext(MainContext)
        return (
        <div className='container mt-5 mb-5'>
                <Helmet>
                    <title>Add</title>
                </Helmet>
               <main>
               <Formik
       initialValues={{ title: '', image: '' ,description:'',price:'',catagory:''}}
       validate={values => {
        
       }}
       onSubmit={(values) => {
            axios.post('http://localhost:8080/api/Product',values).then(res=>
                setdata(res.data)
            )
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
        
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="title"
             placeholder='title'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.title}
           />
           {errors.title && touched.title && errors.title}
           <input
             type="text"
             name="image"
             placeholder='image'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.image}
           />
           {errors.image && touched.image && errors.image}
           <input
             type="text"
             name="description"
             placeholder='description'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.description}
           />
           {errors.description && touched.description && errors.description}
           <input
             type="number"
             name="price"
             placeholder='price'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.price}
           />
           {errors.price && touched.price && errors.price}
           <input
             type="text"
             name="catagory"
             placeholder='catagory'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.catagory}
           />
           {errors.catagory && touched.catagory && errors.catagory}
           <button type="submit" >
             Submit
           </button>
         </form>
       )}
     </Formik>
               </main>
        </div>
        )
    }
    
    export default Add
        