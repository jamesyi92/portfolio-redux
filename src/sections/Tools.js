import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import { device } from '../utils/devices';

import ReactIcon from '../images/react.inline.svg';
import WebpackIcon from '../images/webpack.inline.svg';
import SublimeIcon from '../images/sublime.inline.svg';
import SassIcon from '../images/sass.inline.svg';
import NpmIcon from '../images/npm.inline.svg';
import YarnIcon from '../images/yarn.inline.svg';
import GitIcon from '../images/git.inline.svg';
import BootstrapIcon from '../images/bootstrap.inline.svg';
import GatsbyIcon from '../images/gatsby.inline.svg';
import NodeIcon from '../images/nodejs.inline.svg';

import Blob from '../images/blob-3.inline.svg';
import Blob2 from '../images/blob-4.inline.svg';

import Grid from '../components/Grid';
import Divider from '../components/Divider';
import Container from '../components/Container';

const icons = [
	{
		icon: ReactIcon
	},
	{
		icon: GatsbyIcon
	},
	{
		icon: NpmIcon
	},
	{
		icon: YarnIcon
	},
	{
		icon: SassIcon
	},
	{
		icon: BootstrapIcon
	},
	{
		icon: SublimeIcon
	},
	{
		icon: GitIcon
	},
	{
		icon: WebpackIcon
	},
	{
		icon: NodeIcon
	}
]

const floatAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: rotate(5deg) translateY(3rem);
  }
`

const StyledBlob = styled(Blob)`
	position: absolute;
	left: -10%;
	top: 70%;
	width: 75rem;
	height: auto;
	animation: ${floatAnimation} 8s ease-in-out infinite alternate;
`

const StyledBlob2 = styled(Blob2)`
	position: absolute;
	right: 5%;
	top: 20%;
	width: 50rem;
	height: auto;
	animation: ${floatAnimation} 6s ease-in-out infinite alternate;
`

const StyledH2 = styled.h2`
	text-align: center;
	margin-bottom: 4.5rem;
`

const ToolsGrid = styled(Grid)`
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	@media ${device.lg} { 
     grid-template-columns: repeat(5, 1fr);
  }
`

const LogoBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 3rem 5em;


	svg {
		max-width: 100%;
		width: 100%;
		height: auto;
	}
`

const Tools = () => {

	return(
		<section>

			<Divider offset={3.35} factor={1} speed={-.3} layer={0}>
				<StyledBlob />
			</Divider>

			<Divider offset={4} factor={1} speed={-.2} layer={0}>
				<StyledBlob2 />
			</Divider>

			<Divider offset={4} factor={1} speed={1} layer={2}>
				<Container>
					<StyledH2>Here Are Some Tools I'm Familiar With</StyledH2>
					<ToolsGrid>
						{
							icons.map((icon, index) => {
								const Icon = icon.icon;

								return(
									<LogoBox key={ index }>
										<Icon />
									</LogoBox>
								)
							})
						}
					</ToolsGrid>
				</Container>
			</Divider>
		</section>
	)
}

export default Tools;