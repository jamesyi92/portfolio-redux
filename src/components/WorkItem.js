import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import styled from 'styled-components';
import { device } from '../utils/devices';

import BackgroundImage from 'gatsby-background-image';
import Button from '../components/Button';

const CircleOverlay = styled.div`
  content: '';
  position: absolute;
  background: ${props => props.theme.color};
  border-radius: 50%;
  height: 30rem;
  width: 30rem;
  bottom: -25rem;
  left: -30rem;
  z-index: 2;
  transform: scale(1);
  transition: all ease-in-out .3s;
`

const Overlay = styled.div`
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
	transform: translateY(4rem);
	transition: all ease-in-out .3s;

	h3 {
		color: ${props => props.theme['color-reverse']};
	}

	p {
		color: ${props => props.theme['color-reverse']};
		margin-bottom: 1.5rem;
	}
`

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

	&:hover ${CircleOverlay}{
		transform: scale(6);
	}

	&:hover ${Overlay}{
		opacity: 1;
		transform: translateY(0);
	}

	svg {
		width: 40%;
		height: auto;
		z-index: 1;

		rect, path, polygon  {
			fill: #ffffff;
		}
	}

	&::before {
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		//background: ${props => props.background ? props.background : props.theme.primary };
		background: ${props => props.theme.primary};
		opacity: .8;
		border-radius: 6px;
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


	return(
		<Work
			background={ background }
		>
			<CircleOverlay />
			<Overlay>
				<h3>{ title }</h3>
				<p>{ description }</p>
				<Button dark="true">See Details</Button>
			</Overlay>
			{ logo }
			<StyledImg fluid={ img } />
		</Work>
	)
}

export default WorkItem;
