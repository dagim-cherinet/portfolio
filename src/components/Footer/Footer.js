import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+251937206928">+251937206928</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>E-mail</LinkTitle>
          <LinkItem href="mailto:dachbi32@gmail.com">
            dachbi32@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>I may don't Know but I definetly figure it out!</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/dagim-cherinet">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/dachbi32">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/dagim-cherinet-561523211">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
