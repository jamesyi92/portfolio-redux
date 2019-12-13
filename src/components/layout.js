import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { GlobalStyle } from '../utils/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../utils/themes';
import Menu from '../components/Menu';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={ darkTheme }>
      <Fragment>
        <GlobalStyle />
        <Menu />
        <main>{children}</main>
      </Fragment>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
