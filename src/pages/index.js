import React, {useState} from 'react'
import Hero from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Depositions from '../components/Depositions'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const Home = () => {
   const [isOpen, setIsOpen] = useState(false)
   const toggle =() => {
      setIsOpen(!isOpen)
   }

   return (
      <div>
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <Navbar toggle={toggle}/>
         <Hero />
         <InfoSection {...homeObjOne} />
         <InfoSection {...homeObjTwo} />
         <Depositions />
         <Footer />
      </div>
   )
}

export default Home
