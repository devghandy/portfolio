import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
           <LinkTitle>Call</LinkTitle>
           <LinkItem href='tel: +2349027151224'>+2349027151224</LinkItem>
        </LinkColumn>
        <LinkColumn>
           <LinkTitle>Mail</LinkTitle>
           <LinkItem href='mailto: devghandy@gmail.com'>devghandy@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Looking forward to Learning more technologies and  building more Projects.</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="http://github.com/devghandy">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="http://www.linkedin.com/in/ganiyatadigboluja">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="http://instagram.com/devghandy">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
