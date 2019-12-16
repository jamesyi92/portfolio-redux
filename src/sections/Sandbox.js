import React, { useState, Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import { useSpring, animated, config } from 'react-spring';
import styled from 'styled-components';
import { device } from '../utils/devices';

import Grid from '../components/Grid';
import Divider from '../components/Divider';
import Container from '../components/Container';
import WorkItem from '../components/WorkItem';

import BackgroundImage from 'gatsby-background-image';

import SterlingLogo from '../images/sterling-logo.inline.svg';


const Bg = styled(ParallaxLayer)`
	overflow: hidden;
	z-index: 1;
	background: ${props => props.theme.primary};
`

const Content = styled.div`
	grid-column: 1/2;
	color: ${props => props.theme['color-reverse']};
	text-align: center;
`

const WorkGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: auto auto;
	grid-gap: 3rem;
`

const Intro = styled.div`
	
	text-align: center;

	h2 {
		font-size: 4.2rem;
		margin-bottom: 2.4rem;
	}

	p {
		margin-bottom: 3rem;
	}
`

const Sandbox = () => {

	const data = useStaticQuery(graphql`
    query SandboxImagesQuery {
      sterlingImage: file(relativePath: { eq: "sterling.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const workData = [
		{
			title: 'Sterling',
			description: 'Corporate Website',
			logo: <SterlingLogo />,
			img: data.sterlingImage.childImageSharp.fluid,
			background: '#ffffff'
		},
		{
			title: 'Sterling',
			description: 'Corporate Website',
			logo: <SterlingLogo />,
			img: data.sterlingImage.childImageSharp.fluid,
			background: '#ffffff'
		},
		{
			title: 'Sterling',
			description: 'Corporate Website',
			logo: <SterlingLogo />,
			img: data.sterlingImage.childImageSharp.fluid,
			background: '#ffffff'
		},
		{
			title: 'Sterling',
			description: 'Corporate Website',
			logo: <SterlingLogo />,
			img: data.sterlingImage.childImageSharp.fluid,
			background: '#ffffff'
		},
		{
			title: 'Sterling',
			description: 'Corporate Website',
			logo: <SterlingLogo />,
			img: data.sterlingImage.childImageSharp.fluid,
			background: '#ffffff'
		},
		{
			title: 'Sterling',
			description: 'Corporate Website',
			logo: <SterlingLogo />,
			img: data.sterlingImage.childImageSharp.fluid,
			background: '#ffffff'
		}
	]

	return(
		<Fragment>
			<Bg offset={3} factor={1} speed={.3} />

			<Divider offset={3} factor={1} speed={.6} layer={0}>
				<Grid>
					
				</Grid>
			</Divider>

			<Divider offset={3} factor={1} speed={.8} layer={3}>
				<Container>
					<Intro>
						<h2>My Work</h2>
						<p>Here are a few recent projects</p>
					</Intro>
					<WorkGrid>
						
						{
							workData.map((work, index) => {
								return(
									<WorkItem
										key={ index }
										title={ work.title }
										description={ work.description }
										img={ work.img }
										logo={ work.logo }
										background={ work.background }
									/>
								)
							})
						}

					</WorkGrid>
				</Container>
			</Divider>
		</Fragment>
	)
}

export default Sandbox;