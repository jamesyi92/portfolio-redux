import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useTransition, useSpring, useChain, config, animated } from 'react-spring'

const NavButton = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  right: 3rem;
  top: 3rem;
  background: #ffffff;
  border-radius: 2px;
  width: 5rem;
  height: 5rem;
  cursor: pointer;

  span {

    position: relative;

    &,
    &::before,
    &::after {
        width: 20px;
        height: 2px;
        background-color: #212121;
        display: inline-block;
    }

    &::before,
    &::after {
        content: "";
        position: absolute;
        left: 0;
        transition: all .2s;
    }

    &::before { top: -6px; }
    &::after { top: 6px; }

  }

  span.open {

    background-color: transparent;

    &::before {
      top: 0;
      transform: rotate(135deg);
    }

    &::after {
      top: 0;
      transform: rotate(-135deg);
    }


  }
`

const Nav = styled(animated.nav)`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 80rem;
  background: #f2f2f2;
  right: 0;
  top: 0;
  z-index: 998;
`

const NavGrid = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 3rem;
  width: 80%;
`

const NavItem = styled(animated.div)`
  font-size: 3.2rem;
  text-transform: uppercase;
  font-family: Lato, 'sans-serif';
  color: ${props => props.theme['color-reverse']};
`

const items = [
  {
    key: 1,
    title: 'Home',
  },
  {
    key: 2,
    title: 'About Me',
  },
  {
    key: 3,
    title: 'Work',
  },
  {
    key: 3,
    title: 'Sandbox',
  },
  {
    key: 4,
    title: 'CV',
  },
]

const Menu = () => {

  const [isOpen, setIsOpen] = useState(false);

  const menuToggle = () => {;
    setIsOpen(!isOpen);
  }

  const springRef = useRef();
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: 'translateX(100%)' },
    to: { size: isOpen ? 'translateX(0%)' : 'translateX(100%)' }
  })

  const transRef = useRef()
  const transitions = useTransition(isOpen ? items : [], items => items.title, {
    ref: transRef,
    unique: true,
    trail: 400 / items.length,
    from: { opacity: 0, transform: 'translateX(40px)' },
    enter: { opacity: 1, transform: 'translateX(0px)' },
    leave: { opacity: 0, transform: 'translateX(40px)' }
  })

  useChain(isOpen ? [springRef, transRef] : [transRef, springRef], [0, isOpen ? 0.1 : 0.6]);

  return(
    <header>
      <NavButton onClick={() => menuToggle()}>
        <span className={ isOpen ? 'open' : 'closed' }></span>
      </NavButton>

      <Nav style={{ ...rest, transform: size }} >
        <NavGrid>
          {transitions.map(({ item, key, props }) => (
            <NavItem key={ key } style={ props }>
              { item.title }
            </NavItem>
          ))}
        </NavGrid>
      </Nav>

    </header>
  )
}

export default Menu;
