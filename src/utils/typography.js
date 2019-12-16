import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.6,
  googleFonts: [
    {
      name: 'Noto Sans JP',
      styles: ['700'],
    },
    {
      name: 'Roboto',
      styles: ['400'],
    },
  ],
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  headerFontFamily: ['Noto Sans JP', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'sans-serif'],
  overrideStyles: ({ rhythm }, options, styles) => ({
    'h1': {
      'fontSize': '7.2rem'
    },
    'h2': {
      'fontSize': '4.2rem',
    },
    'h3': {
      'fontSize': '2.4rem'
    },
    'h4': {
      'fontSize': '1.8rem'
    },
    'p': {
      'fontSize': '1.6rem',
      'color' : '#888888'
    }
  }),
})

export default typography