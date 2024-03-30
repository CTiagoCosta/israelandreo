import React, {useState} from 'react';
import Israel from '../../Videos/israelAndreo.mp4';
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
            <VideoBg autoPlay loop muted={false} src={Israel} type='israelAndreo/mp4' />
         </HeroBg>
      </HeroContainer>
   )
}

export default HeroSection
