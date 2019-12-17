import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import styled from 'styled-components';
import { device } from '../utils/devices';

import BackgroundImage from 'gatsby-background-image';
import Button from '../components/Button';

const Work = styled.div`
	overflow: hidden;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 3rem;
	height: 25rem;
	border-radius: 6px;
	box-shadow: 0 0 2rem rgba(0,0,0,.1);
	z-index: 1;

	svg {
		width: 60%;
		height: auto;
		z-index: 1;
	}

	&::before {
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: ${props => props.background ? props.background : props.theme.primary };
		opacity: .65;
		border-radius: 6px;
	}
`

const CircleOverlay = styled(animated.div)`
  content: '';
  position: absolute;
  background: ${props => props.theme.primary};
  border-radius: 50%;
  height: 30rem;
  width: 30rem;
  bottom: -25rem;
  left: -30rem;
  z-index: 2;
`

const Overlay = styled(animated.div)`
	opacity: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 3;
	width: 100%;
	height: 100%;
	border-radius: 6px;

	h3 {
		color: ${props => props.theme.color};
	}

	p {
		color: ${props => props.theme.color};
		margin-bottom: 1.5rem;
	}
`

const StyledImg = styled(BackgroundImage)`
	&.gatsby-image-wrapper {
		position: absolute !important;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;

		&,
		&::before,
		&::after {
			border-radius: 6px;
		}
	}
`

const WorkItem = ({ title, description, logo, img, background }) => {

  const [open, toggle] = useState(false)

  const circleProps = useSpring({
  	config: config.stiff,
		transform: open ? 'scale(6)' : 'scale(1)',
  });

  const overlayProps = useSpring({
  	config: config.stiff,
		transform: open ? 'translateY(0)' : 'translateY(4rem)',
		opacity: open ? '1' : '0',
		delay: 100
  });

	return(
		<Work
			onMouseEnter={ () => toggle(!open) }
			onMouseLeave={ () => toggle(!open) }
			background={ background }
		>
			<CircleOverlay style={ circleProps } />
			<Overlay style={ overlayProps }>
				<h3>{ title }</h3>
				<p>{ description }</p>
				<Button>See More</Button>
			</Overlay>
			{ logo }
			<StyledImg fluid={ img } />
		</Work>
	)
}

export default WorkItem;
