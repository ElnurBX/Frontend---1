
    import React, { useContext } from 'react'
    import { Helmet } from 'react-helmet'
    import MainContext from '../../../context/context'
import Carusel from '../../../components/carusel/Carusel'
import Section2 from '../../../components/section2/Section2'
import Sortedcards from '../../../components/sortedcards/Sortedcards'
    
    const Home = () => {
        const {data,setdata} = useContext(MainContext)
        return (
        <>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <main>
                    <Carusel/>
                    <Section2/>
                    <Sortedcards/>
                </main>
        </>
        )
    }
    
    export default Home
        