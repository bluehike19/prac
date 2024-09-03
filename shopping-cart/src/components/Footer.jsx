import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterWrapper>
      Copyright © 2024 blueHikee
      <GithubLink href='https://github.com/bluehike19' target='_blank' rel='noopener'>
        <FaGithub />
      </GithubLink>
      <LinkedInLink href='https://www.linkedin.com/in/your-linkedin-profile' target='_blank' rel='noopener'>
        <FaLinkedinIn />
      </LinkedInLink>
    </FooterWrapper>
  )
}

const FooterWrapper  = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;
  font-size: 1rem;
`
const GithubLink  = styled.footer`
  display: flex;
  margin-left: 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`

const LinkedInLink = styled.footer`
  display: flex;
  margin-left: 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`

export default Footer