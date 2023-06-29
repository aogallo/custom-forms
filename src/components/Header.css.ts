import { style } from '@vanilla-extract/css'

export const header = style({
  width: '800px',
  display: 'flex',
  alignItems: 'center',
  // justifyContent: 'space-around',
})

export const logo = style({
  width: '100px',
  height: '100px',
  borderRadius: '45px',
})

export const title = style({
  width: 'inherit',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // justifyContent: 'start',
})
