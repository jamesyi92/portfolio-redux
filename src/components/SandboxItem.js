import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import { IoLogoGithub } from "react-icons/io";

const Item = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 6px;
  background: #ffffff;
  box-shadow: 0 0 2rem rgba(0,0,0,.1);
  padding: 2.4rem;

  h3 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1.6rem;
    margin-bottom: 3rem;
  }
`

const BottomLinks = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const GitHubIcon = styled(IoLogoGithub)`
	color: ${props => props.theme['color-reverse']};
	font-size: 1.8rem;
	text-decoration: none;
`

const Link = styled.a`
	color: ${props => props.theme.primary};
	font-size: 1.6rem;
	text-decoration: none;
`

const SandboxItem = ({ styleProps, title, description }) => {
	return(
		<Item style={ styleProps }>
	    <h3>{ title }</h3>
	    <p>{ description }</p>
	    <BottomLinks>
	    	<Link href="#">See Demo</Link>
	    	<a style={ {display: 'inherit'} } href="#">
	    		<GitHubIcon />
	    	</a>
	    </BottomLinks>
	  </Item>
	)
}

export default SandboxItem;