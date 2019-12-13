import React, { useState } from 'react';
import styled from 'styled-components';
import { Keyframes, config } from 'react-spring/renderprops';

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

const Nav = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 80rem;
  background: #444444;
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

const NavItem = styled.div`
  font-size: 3.2rem;
  text-transform: uppercase;
  font-family: Lato, 'sans-serif';
  color: ${props => props.theme.color};
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

const Sidebar = Keyframes.Spring({
  in: async next => {
    await next({
      transform: 'translateX(100%)',
    })
  },
  out: async next => {
    await next({
      transform: 'translateX(0%)',
    })
  }
})

const SidebarItems = Keyframes.Trail({
  in: async next => {
    await next({
      opacity: 0,
      transform: 'translateX(40%)',
    })
  },
  out: async next => {
    await next({
      opacity: 1,
      transform: 'translateX(0%)',
    })
  }
})

const Menu = () => {

  const [isOpen, setIsOpen] = useState(false);

  const menuToggle = () => {;
    setIsOpen(!isOpen);
  }

  return(
    <header>
      <NavButton onClick={() => menuToggle()}>
        <span className={ isOpen ? 'open' : 'closed' }></span>
      </NavButton>

      <Sidebar
        config={config.velocity}
        unique
        state={isOpen ? 'out' : 'in'}
      >
        {
          props => (
            <Nav style={props}>
              <NavGrid>
                <SidebarItems
                  keys={item => item.key}
                  items={items}
                  state={isOpen ? 'out' : 'in'}
                >
                  {
                    item => props => {
                      return (
                        <NavItem style={props}>{item.title}</NavItem>
                      )
                    }
                  }
                </SidebarItems>
              </NavGrid>
            </Nav>
          )
        }
      </Sidebar>
    </header>
  )
}

export default Menu;
