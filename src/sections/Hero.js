import React, { Fragment } from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import styled from 'styled-components';
import { device } from '../utils/devices';

import Circle from '../images/circle.inline.svg';
import Computer from '../images/computer.inline.svg';
import Phone from '../images/phone.inline.svg';
import Blob from '../images/hero-blob.inline.svg';

const HeroBg = styled(ParallaxLayer)`
	overflow: hidden;
	z-index: 1;

	svg {
		position: absolute;
		right: -45%;
		top: 50%;
		transform: translateY(-50%);
		max-width: 100%;
	}
`

const Divider = styled(ParallaxLayer)`
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: ${props => props.layer ? props.layer : 'auto'};
`

const Grid = styled.div`
	display: grid;
	position: relative;
	width: 100%;
	grid-template-columns: 1fr;
	padding: 0 3rem;
	
	@media ${device.md} {
		width: 80%;
		padding: 0;
		grid-gap: 3rem;
		grid-template-columns: repeat(2, 1fr);
	}
`

const Content = styled.div`
	grid-column: 2/3;
	color: ${props => props.theme.color};

	h1,h2, p {
		text-transform: uppercase;
	}
`

const StyledComputer = styled(Computer)`
	grid-column: 1/2;
	max-width: 100%;
	width: 80%;
	height: auto;
`


const StyledPhone = styled(Phone)`
	transform: translate(-10%, 50%);
	grid-column: 1/2;
	max-width: 100%;
	width: 20%;
	height: auto;
`

const StyledBlob = styled(Blob)`
	grid-column: 1/2;
	max-width: 100%;
	height: auto;
`

const Hero = () => {
	return(
		<Fragment>

			<HeroBg offset={0} factor={1} speed={.3}>
				<Circle />
			</HeroBg>

			<Divider offset={0} factor={1} speed={.6} layer={0}>
				<Grid>
					<StyledBlob />
				</Grid>
			</Divider>

			<Divider offset={0} factor={1} speed={.5} layer={1}>
				<Grid>
					<StyledComputer />
				</Grid>
			</Divider>

			<Divider offset={0} factor={1} speed={.4} layer={2}>
				<Grid>
					<StyledPhone />
				</Grid>
			</Divider>

			<Divider offset={0} factor={1} speed={.8} layer={3}>
				<Grid>
					<Content>
						<h1>James Yi</h1>
						<h2>Front-End Developer</h2>
						<p>Based in Vancouver BC</p>
					</Content>
				</Grid>
			</Divider>


		</Fragment>
	)
}

export default Hero;