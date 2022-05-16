import React from 'react'
import { ThemeProvider as StyledComponentsThemeProvider, createGlobalStyle } from 'styled-components'
import { useDarkModeManager } from '../contexts/LocalStorage'
import styled from 'styled-components'
import { Text } from 'rebass'

export default function ThemeProvider({ children }) {
  const [darkMode] = useDarkModeManager()

  return <StyledComponentsThemeProvider theme={theme(darkMode)}>{children}</StyledComponentsThemeProvider>
}

const theme = (darkMode, color) => ({
  customColor: color,
  textColor: darkMode ? color : 'black',

  panelColor: darkMode ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 0)',
  backgroundColor: darkMode ? '#212429' : '#212429',

  uniswapPink: darkMode ? '#ff007a' : '#ff007a',

  concreteGray: darkMode ? '#292C2F' : '#292C2F',
  inputBackground: darkMode ? '#1F1F1F' : '#1F1F1F',
  shadowColor: darkMode ? '#000' : '#000',
  mercuryGray: darkMode ? '#333333' : '#333333',

  text1: darkMode ? 'rgba(229, 231, 235, 1)' : 'rgba(229, 231, 235, 1)',
  text2: darkMode ? '#C3C5CB' : '#C3C5CB',
  text3: darkMode ? '#6C7284' : '#6C7284',
  text4: darkMode ? '#565A69' : '#565A69',
  text5: darkMode ? '#2C2F36' : '#2C2F36',

  // OpenSwap Text Colors
  oSText1: darkMode ? 'rgba(229, 231, 235, 1)' : 'rgba(229, 231, 235, 1)',
  oSText2: darkMode ? '#18d5bb' : '#18d5bb',

  // OpenSwap Icon Colors
  oSIcon1: darkMode ? 'rgba(24, 213, 187, 1)' : 'rgba(24, 213, 187, 1)',
  oSIcon2: darkMode ? '#18d5bb' : '#18d5bb',

  // OpenSwap Hover Colors
  oSHover1: darkMode ? '#262334' : '#262334',

  // special case text types
  white: '#FFFFFF',

  // backgrounds / greys
  bg1: darkMode ? '#212429' : '#212429',
  bg2: darkMode ? '#2C2F36' : '#2C2F36',
  bg3: darkMode ? '#40444F' : '#40444F',
  bg4: darkMode ? '#565A69' : '#565A69',
  bg5: darkMode ? '#565A69' : '#565A69',
  bg6: darkMode ? '#000' : '#000',

  // OpenSwap colors
  oswapGreen: {
    light: '#1bf2ba',
    DEFAULT: '#18d5bb',
    dark: '#13b4ba',
  },
  oswapBlue: {
    light: '#109dbb',
    DEFAULT: '#0462b3',
    dark: '#077db5',
  },
  oswapDark: {
    gray: '#262334',
    DEFAULT: '#2a2138',
    purple: '#241b2e',
    dark: '#17151f'
  },
  slightGray: {
    DEFAULT: '#edeff2'
  },
  slightDark: {
    DEFAULT: '#313547'
  },

  bgOSwap1: darkMode ? '#313547' : '#313547',

  // OpenSwap Buttons
  btnOSwap1: darkMode ? '#313547' : '#313547',

  // gradient backgound
  bgGradient: darkMode ? 
    'linear-gradient(to right, #262334, #313547)' : 
    'linear-gradient(to right, #262334, #313547)',

  bgComponentGradient: darkMode ? 
    'linear-gradient(to left, #313547, #26233400)' : 
    'linear-gradient(to left, #313547, #26233400)',

  bgComponentGradient2: darkMode ? 
    'linear-gradient(to left, #17151f30, #26233400)' : 
    'linear-gradient(to left, #17151f30, #26233400)',

  //specialty colors
  modalBG: darkMode ? 'rgba(0,0,0,0.85)' : 'rgba(0,0,0,0.85)',
  advancedBG: darkMode ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.1)',
  onlyLight: darkMode ? '#22242a' : '#22242a',
  divider: darkMode ? '#31354740' : '#31354740',

  //primary colors
  primary1: darkMode ? '#2172E5' : '#2172E5',
  primary2: darkMode ? '#3680E7' : '#3680E7',
  primary3: darkMode ? '#4D8FEA' : '#4D8FEA',
  primary4: darkMode ? '#376bad70' : '#376bad70',
  primary5: darkMode ? '#153d6f70' : '#153d6f70',

  // color text
  primaryText1: darkMode ? '#6da8ff' : '#6da8ff',

  // secondary colors
  secondary1: darkMode ? '#2172E5' : '#2172E5',
  secondary2: darkMode ? '#17000b26' : '#17000b26',
  secondary3: darkMode ? '#17000b26' : '#17000b26',

  shadow1: darkMode ? '#000' : '#000',

  // other
  red1: '#FF6871',
  green1: '#27AE60',
  yellow1: '#FFE270',
  yellow2: '#F3841E',
  link: '#2172E5',
  blue: '2f80ed',

  background: darkMode ? 'black' : `black`,
})

const TextWrapper = styled(Text)`
  color: ${({ theme }) => theme.oSText1};
`

export const TYPE = {
  main(props) {
    return <TextWrapper fontWeight={500} fontSize={14} color={'text1'} {...props} />
  },

  body(props) {
    return <TextWrapper fontWeight={400} fontSize={14} color={'text1'} {...props} />
  },

  small(props) {
    return <TextWrapper fontWeight={500} fontSize={11} color={'text1'} {...props} />
  },

  header(props) {
    return <TextWrapper fontWeight={600} color={'text1'} {...props} />
  },

  largeHeader(props) {
    return <TextWrapper fontWeight={500} color={'text1'} fontSize={24} {...props} />
  },

  light(props) {
    return <TextWrapper fontWeight={400} color={'text3'} fontSize={14} {...props} />
  },

  pink(props) {
    return <TextWrapper fontWeight={props.faded ? 400 : 600} color={props.faded ? 'text1' : 'text1'} {...props} />
  },
}

export const Hover = styled.div`
  :hover {
    cursor: pointer;
  }
`

export const Link = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.primary1};
  font-weight: 500;
  :hover {
    text-decoration: underline;
  }
  :focus {
    outline: none;
    text-decoration: underline;
  }
  :active {
    text-decoration: none;
  }
`

export const ThemedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  max-width: 100vw !important;
  height: 200vh;
  mix-blend-mode: color;
  background: ${({ backgroundColor }) =>
    `radial-gradient(50% 50% at 50% 50%, ${backgroundColor} 0%, rgba(255, 255, 255, 0) 100%)`};
  position: absolute;
  top: 0px;
  left: 0px;
  /* z-index: ; */

  transform: translateY(-110vh);
`

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 14px;
    background-image: ${({ theme }) => theme.bgGradient};
  }

  a {
    text-decoration: none;

    :hover {
      text-decoration: none
    }
  }

  
.three-line-legend {
	width: 100%;
	height: 70px;
	position: absolute;
	padding: 8px;
	font-size: 12px;
	color: #20262E;
	background-color: rgba(255, 255, 255, 0.23);
	text-align: left;
	z-index: 10;
  pointer-events: none;
}

.three-line-legend-dark {
	width: 100%;
	height: 70px;
	position: absolute;
	padding: 8px;
	font-size: 12px;
	color: white;
	background-color: rgba(255, 255, 255, 0.23);
	text-align: left;
	z-index: 10;
  pointer-events: none;
}

@media screen and (max-width: 800px) {
  .three-line-legend {
    display: none !important;
  }
}

.tv-lightweight-charts{
  width: 100% !important;
  

  & > * {
    width: 100% !important;
  }
}


  html {
    font-size: 1rem;
    font-variant: none;
    color: 'black';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    height: 100%;
  }
`
