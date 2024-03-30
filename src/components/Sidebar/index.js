import React from 'react'
import {
   SidebarContainer,
   Icon,
   CloseIcon,
   SidebarWrapper,
   SidebarMenu,
   SidebarLink,
   } from './SidebarElements';


const Sidebar = ({isOpen, toggle}) => {
   return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
         <Icon onClick={toggle} >
            <CloseIcon />
         </Icon>
         <SidebarWrapper>
            <SidebarMenu>
               <SidebarLink to='about' onClick={toggle}>
                  Sobre
               </SidebarLink>
               <SidebarLink to='gallery' onClick={toggle}>
                  Galeria
               </SidebarLink>
               <SidebarLink to='depositions' onClick={toggle}>
                  Depoimentos
               </SidebarLink>
            </SidebarMenu>
         </SidebarWrapper>
      </SidebarContainer>
   )
}

export default Sidebar
