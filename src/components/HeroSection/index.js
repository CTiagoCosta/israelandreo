import React, {useState} from 'react';
import Isarael from '../../Videos/isarael.mp4';
import { 
   HeroContainer,
   HeroBg,
   VideoBg
   } from './HeroElements'

const HeroSection = () => {
   const [hover, setHover] = useState(false)

   const onHover = () => {
      setHover(!hover)
   }

   return (
      <HeroContainer id='home'>
         <HeroBg>
            <VideoBg autoPlay loop muted={false} src={Isarael} type='iarael/mp4' />
         </HeroBg>
      </HeroContainer>
   )
}

export default HeroSection
