import React, { Fragment } from 'react';
import { graphql, useStaticQuery  } from 'gatsby';
import Img from 'gatsby-image';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import styled, { keyframes } from 'styled-components';
import { device } from '../utils/devices';

import Grid from '../components/Grid';
import Divider from '../components/Divider';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Button from '../components/Button';

import FooterWave from '../images/footer-wave.inline.svg';


const animateFooterWave = keyframes`
	0% {
    transform: scale(1, .8);
  }
  100% {
    transform: scale(1,1);
  }
`



const StyledFooterWave = styled(FooterWave)`
	position: absolute;
	max-width: 100%;
	width: 100%;
	bottom: -4rem;
	opacity: .2;
	transform-origin: bottom;
	animation: ${animateFooterWave} 8s ease-in-out -8s infinite alternate forwards running;
`

const Bg = styled(ParallaxLayer)`
	clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 100%);
	overflow: hidden;
	z-index: 2;
	background: linear-gradient(125deg, ${props => props.theme.primary} 0%, #767cfd 64%, #4d8ce4 100%);
`

const Content = styled.div`
	grid-column: 1/2;
	text-align: center;
	width: 70%;
	margin: 0 auto;

	h2, p {
		color: ${props => props.theme.color};
	}

	p {
		opacity: .8;
	}
`

const ButtonWrap = styled.div`
	
	margin-top: 3rem;

	${Button} {
		&:first-child {
			margin-right: 1.5rem;
		}
	}
`

const Contact = () => {

	return(
		<section>
			<Bg offset={5} factor={1} speed={.3} />

			<Divider offset={5} factor={1} speed={.3} layer={2}>
				<StyledFooterWave />
			</Divider>

			<Divider offset={5} factor={1} speed={.8} layer={6}>
				<Container>
					<Grid gridCol={1}>
						<Content>
							<Heading center={true}>Want to collaborate? Give me a shout!</Heading>
							<p>We can accomplish anything if we put our minds together. Let's have a chat! Coffee is on me.</p>
							<ButtonWrap>
								<Button dark={true} large={true}>Email Me</Button>
								<Button dark={true} large={true}>See Resume</Button>
							</ButtonWrap>
						</Content>
					</Grid>
				</Container>
			</Divider>
		</section>
	)
}

export default Contact;