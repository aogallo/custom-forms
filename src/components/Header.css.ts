import { style } from '@vanilla-extract/css'

export const header = style({
  gridArea: 'header',
  width: '800px',
  display: 'flex',
  marginTop: '10px',
})

export const logo = style({
  width: '100px',
  height: '100px',
  borderRadius: '45px',
  position: 'absolute',
  left: '50px',
})

export const title = style({
  width: 'inherit',
  marginLeft: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // justifyContent: 'start',
})
