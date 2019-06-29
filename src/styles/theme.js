const theme = {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 200, 256, 512],
  fontSizes: [0, 12, 14, 16, 20, 30, 36, 48, 80, 120],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em'
  },
  fonts: {
    serif: 'athelas, georgia, times, serif',
    sansSerif:
      '-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif'
  },
  borders: [
    0,
    '1px solid',
    '2px solid',
    '4px solid',
    '8px solid',
    '16px solid',
    '32px solid'
  ],
  radii: [0, 2, 4, 16, 9999, '100%'],
  width: [16, 32, 64, 128, 256],
  heights: [16, 32, 64, 128, 256],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors: {
    black: '#000',
    primary: '#7e75f3',
    background: '#181e29',
    button: '#3d4354',
    clear: '#50d14e',
    gray: ' #777',
    silver: '#999',
    white: '#fff',
    transparent: 'transparent',
    blacks: [
      'rgba(0,0,0,.0125)',
      'rgba(0,0,0,.025)',
      'rgba(0,0,0,.05)',
      'rgba(0,0,0,.1)',
      'rgba(0,0,0,.2)',
      'rgba(0,0,0,.3)',
      'rgba(0,0,0,.4)',
      'rgba(0,0,0,.5)',
      'rgba(0,0,0,.6)',
      'rgba(0,0,0,.7)',
      'rgba(0,0,0,.8)',
      'rgba(0,0,0,.9)'
    ],
    whites: [
      'rgba(255,255,255,.0125)',
      'rgba(255,255,255,.025)',
      'rgba(255,255,255,.05)',
      'rgba(255,255,255,.1)',
      'rgba(255,255,255,.2)',
      'rgba(255,255,255,.3)',
      'rgba(255,255,255,.4)',
      'rgba(255,255,255,.5)',
      'rgba(255,255,255,.6)',
      'rgba(255,255,255,.7)',
      'rgba(255,255,255,.8)',
      'rgba(255,255,255,.9)'
    ]
  },
  buttons: {
    primary: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 80,
      color: 'white',
      backgroundColor: '#3d4354',
      borderRadius: 0,
      border: '0.25px solid rgba(255,255,255,0.1)',
      fontWeight: 200,
      fontSize: 26,
      outline: 'none',
      transition: 'all 0.2s',
      '&:hover': {
        backgroundColor: 'tomato'
      },
      '&:active': {
        border: '4px solid #a64230',
        fontSize: 20
      }
    },
    clear: {
      color: 'white',
      padding: '15px 25px',
      backgroundColor: '#50d14e',
      borderRadius: 0,
      fontWeight: 500,
      letterSpacing: 2,
      fontSize: 16
    },
    show: {
      color: 'white',
      height: 70,
      width: '50%',
      padding: '10px 20px',
      backgroundColor: '#7e75f3',
      borderRadius: 0,
      fontWeight: 400,
      fontSize: 16
    }
  }
};

export default theme;
