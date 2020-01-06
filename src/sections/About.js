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

import Wave1 from '../images/wave-1.inline.svg';
import Wave2 from '../images/wave-2.inline.svg';

const animateWave1 = keyframes`
	0% {
    transform: scale(1, .6);
  }
  100% {
    transform: scale(1,1);
  }
`

const animateWave2 = keyframes`
	0% {
    transform: scale(1, .8);
  }
  100% {
    transform: scale(1,1);
  }
`


const StyledWave1 = styled(Wave1)`
	position: absolute;
	max-width: 100%;
	width: 100%;
	bottom: -8rem;
	opacity: 1;
	transform-origin: bottom;
	animation: ${animateWave1} 8s ease-in-out -8s infinite alternate forwards running;
`

const StyledWave2 = styled(Wave2)`
	position: absolute;
	max-width: 100%;
	width: 100%;
	bottom: -9rem;
	opacity: .3;
	transform-origin: bottom;
	animation: ${animateWave2} 8s ease-in-out -8s infinite alternate forwards running;
`

const Bg = styled(ParallaxLayer)`
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

const ProfileImage = styled(Img)`
	max-width: 100%;
	width: 22rem;
	border-radius: 50%;
	margin: 0 auto 3rem;
`

const About = () => {

	const data = useStaticQuery(graphql`
    query AboutImageQuery {
      aboutImage: file(relativePath: { eq: "james.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

	return(
		<section>
			<Bg offset={1} factor={1} speed={.3} />

			<Divider offset={1} factor={1} speed={.2} layer={2}>
				<StyledWave1 />
			</Divider>

			<Divider offset={1} factor={1} speed={.3} layer={2}>
				<StyledWave2 />
			</Divider>

			<Divider offset={1} factor={1} speed={.8} layer={6}>
				<Container>
					<Grid gridCol={1}>
						<Content>
							<ProfileImage fluid={data.aboutImage.childImageSharp.fluid} />
							<Heading center={true}>Hi, I'm James</Heading>
							<p>I'm a front-end developer based in Vancouver. I have been in the industry for over 4 years of building custom-tailored digital experiences for companies with technologies like WordPress, React and Gatsby. I live and breathe HTML/CSS/Javascript, with having a fierce passion of bringing UI/UX concepts to life.</p>
						</Content>
					</Grid>
				</Container>
			</Divider>
		</section>
	)
}

export default About;