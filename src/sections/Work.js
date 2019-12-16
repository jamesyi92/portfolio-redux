import React, { Fragment } from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import styled from 'styled-components';
import { device } from '../utils/devices';

import Grid from '../components/Grid';
import Divider from '../components/Divider';

const Bg = styled(ParallaxLayer)`
	overflow: hidden;
	z-index: 1;
	background: #f9f9fc;
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
	width: 60%;
`

const WorkItem = styled.div`
	min-height: 25rem;
	background: hotpink;
	border-radius: 6px;
	background: #ffffff;
	box-shadow: 0px 20px 60px 0px rgba(0,11,40,0.06);
`

const Work = () => {

	return(
		<Fragment>
			<Bg offset={2} factor={1} speed={.3} />

			<Divider offset={2} factor={1} speed={.6} layer={0}>
				<Grid>
					
				</Grid>
			</Divider>

			<Divider offset={2} factor={1} speed={.8} layer={3}>
				<WorkGrid>
					<WorkItem />
					<WorkItem />
					<WorkItem />
					<WorkItem />
					<WorkItem />
					<WorkItem />
				</WorkGrid>
			</Divider>
		</Fragment>
	)
}

export default Work;