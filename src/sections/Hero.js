import React, { Fragment } from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import styled from 'styled-components';
import { device } from '../utils/devices';

import Grid from '../components/Grid';
import Divider from '../components/Divider';
import Circle from '../images/circle.inline.svg';
import Computer from '../images/computer.inline.svg';
import Phone from '../images/phone.inline.svg';
import Browser from '../images/browser.inline.svg';
import Rocket from '../images/rocket.inline.svg';

const HeroBg = styled(ParallaxLayer)`
	z-index: 1;
	background: linear-gradient(to right, ${props => props.theme['background-3']}, ${props => props.theme['background-3']} 45%, #ffffff 45%);
`

const Content = styled.div`
	grid-column: 2/3;
	color: ${props => props.theme['color-reverse']};

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

const StyledBrowser = styled(Browser)`
	transform: translate(90%, 70%);
	grid-column: 1/2;
	max-width: 100%;
	width: 40%;
	height: auto;
`

const StyledRocket = styled(Rocket)`
	position: absolute;
	right: 3rem;
	bottom: 0;
	grid-column: 2/-1;
	max-width: 100%;
	width: 10rem;
	height: auto;
`


const Hero = () => {
	return(
		<Fragment>

			<HeroBg offset={0} factor={1.3} speed={0} />

			<Divider offset={0} factor={1} speed={.9} layer={1}>
				<Grid>
					<StyledComputer />
				</Grid>
			</Divider>

			<Divider offset={0} factor={1} speed={1.2} layer={2}>
				<Grid>
					<StyledPhone />
				</Grid>
			</Divider>

			<Divider offset={0} factor={1} speed={.6} layer={3}>
				<Grid>
					<StyledBrowser />
				</Grid>
			</Divider>

			<Divider offset={0.5} factor={1} speed={1.3} layer={5}>
				<Grid>
					<StyledRocket />
				</Grid>
			</Divider>


			<Divider offset={0} factor={1} speed={.4} layer={4}>
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