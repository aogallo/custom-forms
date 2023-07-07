import { style } from '@vanilla-extract/css'

export const titleTratamient = style({
  textAlign: 'center',
})

export const groupQuestion = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '8px',
})

export const question = style({
  display: 'grid',
  gridTemplateColumns: '2fr 100px 100px',
  rowGap: '10px',
})

export const extraInformation = style({
  // backgroundColor: 'red',
  gridColumnStart: '1',
  gridColumnEnd: '-1',
})

export const inputTratamient = style({
  marginLeft: '15px',
  width: '90%',
})
