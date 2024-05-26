import React, {useState} from 'react';
import IsraelAndreo from '../../Videos/israel.mp4';
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
            <VideoBg autoPlay loop muted={true} src={IsraelAndreo} type='israelAndreo/mp4' />
         </HeroBg>
      </HeroContainer>
   )
}

export default HeroSection
