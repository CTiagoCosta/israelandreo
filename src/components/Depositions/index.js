import React from 'react'
import Sonia from '../../images/sonia.jpg'
import Silvana from '../../images/silvana.jpg'
import Silvio from '../../images/silvio.jpg'
import Sandro from '../../images/sandro.jpg'
import Samira from '../../images/samira.jpg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'
export default function Depositions() {
   return (
      <ServicesContainer id='depositions'>
         <ServicesH1>Depoimentos</ServicesH1>
         <ServicesWrapper>
         <ServicesCard>
               <ServicesIcon src={Sonia} />
               <ServicesH2>Sônia</ServicesH2>
               <ServicesP>TesteTesteTesteTeste TesteTesteTesteTesteTesteTesteT esteTesteTesteTesteTeste</ServicesP>
            </ServicesCard>
            <ServicesCard>
               <ServicesIcon src={Silvana} />
               <ServicesH2>Silvana</ServicesH2>
               <ServicesP>TesteTesteTesteTeste TesteTesteTesteTesteTesteTesteT esteTesteTesteTesteTeste</ServicesP>
            </ServicesCard>
            <ServicesCard>
               <ServicesIcon src={Silvio} />
               <ServicesH2>Silvio</ServicesH2>
               <ServicesP>TesteTesteTesteTeste TesteTesteTesteTesteTesteTesteT esteTesteTesteTesteTeste</ServicesP>
            </ServicesCard>
            <ServicesCard>
               <ServicesIcon src={Sandro} />
               <ServicesH2>Sandro</ServicesH2>
               <ServicesP>TesteTesteTesteTeste TesteTesteTesteTesteTesteTesteT esteTesteTesteTesteTeste</ServicesP>
            </ServicesCard>
            <ServicesCard>
               <ServicesIcon src={Samira} />
               <ServicesH2>Samira</ServicesH2>
               <ServicesP>TesteTesteTesteTeste TesteTesteTesteTesteTesteTesteT esteTesteTesteTesteTeste</ServicesP>
            </ServicesCard>
         </ServicesWrapper>
      </ServicesContainer>
   )
}
