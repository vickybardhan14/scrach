import Head from 'next/head'
import Navbar from '../components/Navbar'
import Banner from "../components/Banner"



export default function Home () {
  return (
    <div className="container">
      <Head>
        <title>Vicky Bardhan</title>
        <meta name="description" content="Full Website Development frontend and backend website development" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <Navbar />
      
  
        
      </main>
    </div>
  )
}
