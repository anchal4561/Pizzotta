import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../Components/NavBar'
import Featured from '../Components/Featured'
import PizzaList from '../Components/PizzaList'
import axios from "axios"

export default function Home({pizzaList}) {

  //first fetching data then rendering
  return (
    <>
      <div className={styles.container}>

      <Head>
        <title>Pizza Restro in India</title>
        <meta name="description" content="Best Pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <PizzaList pizzaList={pizzaList}/>
      
      </div>
  
    </>
  )
}


export const getServerSideProps=async()=>{
  const res=await axios.get("http://localhost:3000/api/products")
  return{
    props:{
      pizzaList:res.data
    }
  }
}