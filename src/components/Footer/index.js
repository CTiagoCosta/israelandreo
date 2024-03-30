import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaGithub } from 'react-icons/fa'
import { FooterContainer, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
   const toggleHome = () => {
      scroll.scrollToTop();
   }

   return (
      <FooterContainer>
         <FooterWrap>
         <SocialMedia>
            <SocialMediaWrap>
               <SocialLogo to='/' onClick={toggleHome}>
               Israel Andreo
               </SocialLogo>
               <WebsiteRights>Tiago Costa Dev © {new Date().getFullYear()} Todos os direitos reservados.</WebsiteRights>
               <SocialIcons>
               <SocialIconLink href='https://www.facebook.com/' target='_blank' arial-label='Facebook'>
                  <FaFacebook />
               </SocialIconLink>
               <SocialIconLink href='//www.instagram.com/' target='_blank' arial-label='Instagram'>
                  <FaInstagram/>
               </SocialIconLink>
               <SocialIconLink href='https://youtube.com/' target='_blank' arial-label='Youtube'>
                  <FaYoutube />
               </SocialIconLink>
               <SocialIconLink href='https://twitter.com/' target='_blank' arial-label='Twitter'>
                  <FaTwitter/>
               </SocialIconLink>
               </SocialIcons>
            </SocialMediaWrap>
         </SocialMedia>
         </FooterWrap>
      </FooterContainer>
   )
}

export default Footer