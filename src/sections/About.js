import React, { Fragment } from 'react';
import { graphql, useStaticQuery  } from 'gatsby';
import Img from 'gatsby-image';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import styled, { keyframes } from 'styled-components';
import { device } from '../utils/devices';

import Grid from '../components/Grid';
import Divider from '../components/Divider';

import Wave1 from '../images/wave-1.inline.svg';
import Wave2 from '../images/wave-2.inline.svg';

const Bg = styled(ParallaxLayer)`
	overflow: hidden;
	z-index: 1;
	background: linear-gradient(125deg, #5f51fb 0%, #767cfd 64%, #8ca7ff 100%);
`

const Content = styled.div`
	grid-column: 1/2;
	color: ${props => props.theme.color};
	text-align: center;
`

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

const Wave1Layer = styled(ParallaxLayer)`
	width: 100%;
	height: 100%;
	z-index: 1;

	svg {
		position: absolute;
		bottom: 10%;
		max-width: 100%;
		width: 100%;
		bottom: 0;
		opacity: .8;
		transform-origin: bottom;
		animation: ${animateWave1} 8s ease-in-out -8s infinite alternate forwards running;
	}
`

const Wave2Layer = styled(ParallaxLayer)`
	width: 100%;
	height: 100%;
	z-index: 1;
	display: none;

	@media ${device.lg} {
		display: block;
	}

	svg {
		position: absolute;
		bottom: 10%;
		max-width: 100%;
		width: 100%;
		bottom: 0;
		opacity: .3;
		transform-origin: bottom;
		animation: ${animateWave2} 8s ease-in-out -8s infinite alternate forwards running;
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
		<Fragment>
			<Bg offset={1} factor={1} speed={.3} />

			<Wave1Layer offset={1} speed={.1} factor={1.1}>
				<Wave1 />
			</Wave1Layer>

			<Wave2Layer offset={1} speed={.3} factor={1.1}>
				<Wave2 />
			</Wave2Layer>

			<Divider offset={1} factor={1} speed={.8} layer={3}>
				<Grid gridCol={1} container="40">
					<Content>
						<ProfileImage fluid={data.aboutImage.childImageSharp.fluid} />
						<h2>Hi, I'm James</h2>
						<p>I'm a front-end developer based in Vancouver. I have been in the industry for over 4 years of building custom-tailored digital experiences for companies with technologies like WordPress, React and Gatsby. I live and breathe HTML/CSS/Javascript, with having a fierce passion of bringing UI/UX concepts to life.</p>
					</Content>
				</Grid>
			</Divider>
		</Fragment>
	)
}

export default About;