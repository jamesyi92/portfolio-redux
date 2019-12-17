import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import styled from 'styled-components';
import { device } from '../utils/devices';

import Grid from '../components/Grid';
import Divider from '../components/Divider';
import Container from '../components/Container';
import WorkItem from '../components/WorkItem';

import Phone from '../images/phone-2.inline.svg';
import Blob from '../images/blob.inline.svg';

import SterlingLogo from '../images/sterling-logo.inline.svg';
import VisierLogo from '../images/visier-logo.inline.svg';
import SVLogo from '../images/sv-logo.inline.svg';
import SnowLogo from '../images/snow-logo.inline.svg';


const Bg = styled(ParallaxLayer)`
	overflow: hidden;
	z-index: 1;
	//background: linear-gradient(to bottom, ${props => props.theme.color}, ${props => props.theme['background-3']});
	background: ${props => props.theme.color};
`

const WorkGrid = styled.div`
	display: grid;
	grid-gap: 3rem;
	grid-template-columns: 1fr;

	@media ${device.md} {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: auto auto auto;
	}

	@media ${device.lg} {
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: auto auto;
	}

`

const Intro = styled.div`

	h2 {
		font-size: 4.2rem;
		margin-bottom: 2.4rem;
	}

	p {
		font-size: 1.8rem;
		margin-bottom: 3rem;
	}
`

const StyledBlob = styled(Blob)`
	position: absolute;
	left: 0;
	top: 0;
	width: 45rem;
	height: auto;
	transform: rotate(45deg);
`
const Work = () => {

	const data = useStaticQuery(graphql`
    query ImagesQuery {
      sterlingImage: file(relativePath: { eq: "sterling.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      visierImage: file(relativePath: { eq: "visier.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      volImage: file(relativePath: { eq: "sterlingvolunteers.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snowImage: file(relativePath: { eq: "sterlingnow.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      apiImage: file(relativePath: { eq: "sterlingapi.jpg" }) {
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
		},
		{
			title: 'Visier',
			description: 'Corporate Website',
			logo: <VisierLogo />,
			img: data.visierImage.childImageSharp.fluid,
			background: '#ffffff'
		},
		{
			title: 'Sterling Volunteers',
			description: 'Corporate Website',
			logo: <SVLogo />,
			img: data.volImage.childImageSharp.fluid,
			background: '#ffffff'
		},
		{
			title: 'Sterling Diligence',
			description: 'Corporate Website',
			logo: <SterlingLogo />,
			img: data.sterlingImage.childImageSharp.fluid,
			background: '#ffffff'
		},
		{
			title: 'SterlingNOW',
			description: 'Adwords Landing Page',
			logo: <SnowLogo />,
			img: data.snowImage.childImageSharp.fluid,
			background: '#ffffff'
		},
		{
			title: 'Sterling API',
			description: 'API Product Website',
			logo: <SterlingLogo />,
			img: data.apiImage.childImageSharp.fluid,
			background: '#ffffff'
		}
	]

	return(
		<section>
			<Bg offset={2} factor={1} speed={.3} />

			<Divider offset={1.35} factor={1} speed={-.3} layer={1}>
				<Container>
					<Grid>
						<StyledBlob />
					</Grid>
				</Container>
			</Divider>

			<Divider offset={2} factor={1} speed={.8} layer={3}>
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
		</section>
	)
}

export default Work;