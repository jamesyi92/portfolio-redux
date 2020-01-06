import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import { useTransition, useSpring, useChain, config, animated } from 'react-spring';

import { device } from '../utils/devices';

import Grid from '../components/Grid';
import Divider from '../components/Divider';
import Container from '../components/Container';

import SandboxItem from '../components/SandboxItem';

import { GoPlusSmall } from 'react-icons/go';

const data = [
	{
    title: 'Theme Switcher',
    description: 'Material-UI based dark/light mode switcher with Styled Components',
  },
  {
    title: 'Parallax Landing Page',
    description: 'Parallax landing page using react-spring',
  },
  {
    title: 'React Drag and Drop',
    description: 'React drag and drop interface using React Beautiful D&D',
  },
  {
    title: 'Chat Application',
    description: 'A socket.io based NodeJS chat application',
  },
  {
    title: 'Getting Multilingual with Gatsby',
    description: 'Multilingual Gatsby Starter',
  },
  {
    title: 'Task Manager',
    description: 'A NodeJS React Task Manager with JWT Authentication',
  },
]

const Bg = styled(ParallaxLayer)`
	overflow: hidden;
	display: flex;
	align-items: center;
	z-index: 1;

	&::before {
		content: '';
		position: relative;
		width: 100%;
		height: 80%;
		background: ${props => props.theme['background-1']};
		transform: skewY(-2deg);
	}
`

const Content = styled.div`
	grid-column: 1/2;
	display: flex;
  flex-direction: column;
  align-items: center;

	> h2, 
  > p {
		color: ${props => props.theme.color};
	}

	> p {
		opacity: .8;
	}
`

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const OpenButton = styled(animated.div)`
  position: relative;
	padding: 3rem;
  width: 20%;
	background: #ffffff;
	display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3rem;
  border-radius: 4px;

  @media ${device.md} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const OpenButtonOverlay = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 3.2rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all .2s ease-in-out;
  border-radius: 4px;

  &:hover {
    color: ${props => props.theme.primary};
  }
`


const Sandbox = () => {

	const [open, set] = useState(false)

  const springRef = useRef()
  const { backgroundColor, display, width, height, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    to: { 
      width: open ? '100%' : '10%', 
      height: open ? '50rem' : '5rem',
      backgroundColor: open ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,1)',
      display: open? 'none' : 'flex'
    }
  })

  const transRef = useRef()
  const transitions = useTransition(open ? data : [], item => item.title, {
    ref: transRef,
    unique: true,
    trail: 400 / data.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  })

  useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6])

	return (
		<section>
			<Bg offset={3} factor={1} speed={.3} layer={2}/>

			<Divider offset={3} factor={1} speed={.8} layer={3}>
				<Container>
					<Grid gridCol={1}>
						<Content>
							<h2>Sandbox</h2>
							<p>Just some experimental stuff</p>
							<Wrap>
                <OpenButton style={{ ...rest, height, width, backgroundColor}} onClick={() => set(open => true)}>
                  <OpenButtonOverlay style={{ display }}>
                    <GoPlusSmall />
                  </OpenButtonOverlay>
                  {transitions.map(({ item, key, props }) => (
                    <SandboxItem 
                      key={key} 
                      styleProps={ props }
                      title={ item.title}
                      description={ item.description }
                    />
                  ))}
                </OpenButton>
              </Wrap>
						</Content>
					</Grid>
				</Container>
			</Divider>
		</section>
	);
};

export default Sandbox;