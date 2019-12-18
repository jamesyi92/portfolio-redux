import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import { useTransition, useSpring, useChain, config, animated } from 'react-spring';

import Grid from '../components/Grid';
import Divider from '../components/Divider';
import Container from '../components/Container';

const data = [
	{
    name: 'Rare Wind',
    description: '#a8edea → #fed6e3',
    css: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    height: 200
  },
  {
    name: 'Saint Petersburg',
    description: '#f5f7fa → #c3cfe2',
    css: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    height: 400
  },
  {
    name: 'Deep Blue',
    description: '#e0c3fc → #8ec5fc',
    css: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    height: 400
  },
  {
    name: 'Ripe Malinka',
    description: '#f093fb → #f5576c',
    css: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    height: 400
  },
  {
    name: 'Perfect White',
    description: '#fdfbfb → #ebedee',
    css: 'linear-gradient(135deg, #E3FDF5 0%, #FFE6FA 100%)',
    height: 400
  },
  {
    name: 'Near Moon',
    description: '#5ee7df → #b490ca',
    css: 'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)',
    height: 400
  },
  {
    name: 'Wild Apple',
    description: '#d299c2 → #fef9d7',
    css: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
    height: 200
  },
  {
    name: 'Ladoga Bottom',
    description: '#ebc0fd → #d9ded8',
    css: 'linear-gradient(135deg, #ebc0fd 0%, #d9ded8 100%)',
    height: 400
  },
  {
    name: 'Sunny Morning',
    description: '#f6d365 → #fda085',
    css: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
    height: 200
  },
  {
    name: 'Lemon Gate',
    description: '#96fbc4 → #f9f586',
    css: 'linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)',
    height: 400
  },
  {
    name: 'Salt Mountain',
    description: ' #FFFEFF → #D7FFFE',
    css: 'linear-gradient(135deg, #FFFEFF 0%, #D7FFFE 100%)',
    height: 200
  },
  {
    name: 'New York',
    description: ' #fff1eb → #ace0f9',
    css: 'linear-gradient(135deg, #fff1eb 0%, #ace0f9 100%)',
    height: 400
  },
  {
    name: 'Soft Grass',
    description: ' #c1dfc4 → #deecdd',
    css: 'linear-gradient(135deg, #c1dfc4 0%, #deecdd 100%)',
    height: 400
  },
  {
    name: 'Japan Blush',
    description: ' #ddd6f3 → #faaca8',
    css: 'linear-gradient(135deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%)',
    height: 200
  }
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
		height: 70%;
		background: ${props => props.theme['background-1']};
		transform: skewY(-2deg);
	}
`

const Content = styled.div`
	grid-column: 1/2;
	text-align: center;
	width: 70%;
	margin: 0 auto;

	h2, p {
		color: ${props => props.theme.color};
	}

	p {
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
	padding: 30px;
	background: #ffffff;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 3rem;
  border-radius: 4px;
`

const Item = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: #ffffff;
  box-shadow: 0 0 2rem rgba(0,0,0,.1);
`


const Sandbox = () => {

	const [open, set] = useState(false)

  const springRef = useRef()
  const { backgroundColor, display, width, height, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { width: '15rem', height: '5rem'  },
    to: { 
      width: open ? '80rem' : '15rem', 
      height: open ? '40rem' : '5rem',
      backgroundColor: open ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,1)',
      display: open? 'none' : 'block'
    }
  })

  const transRef = useRef()
  const transitions = useTransition(open ? data : [], item => item.name, {
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
			<Bg offset={3} factor={1} speed={.3} />

			<Divider offset={3} factor={1} speed={.8} layer={2}>
				<Container>
					<Grid gridCol={1}>
						<Content>
							<h2>Sandbox</h2>
							<p>Just some experimental stuff</p>
							<Wrap>
                <OpenButton style={{ ...rest, height, width, backgroundColor}} onClick={() => set(open => !open)}>
                  <animated.div style={{ display }}>Hello</animated.div>
                  {transitions.map(({ item, key, props }) => (
                    <Item key={key} style={ props }>haha</Item>
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