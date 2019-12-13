import { createGlobalStyle } from 'styled-components'
import { device } from './devices'

export const GlobalStyle = createGlobalStyle`

	html {
		overflow-y: auto;
	  box-sizing: border-box;
	}

	*,
	*::before,
	*::after {
	   box-sizing: inherit;
	}

  html {

    font-size: 50%;

    @media ${device.lg} { 
        font-size: 52.5%;
    }
    
    @media ${device.xl} { 
        font-size: 62.5%;
    }

  }

`