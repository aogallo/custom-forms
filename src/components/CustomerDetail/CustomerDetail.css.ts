import { style } from '@vanilla-extract/css'

export const containerCustomerDetail = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  height: '80vh',
})

export const titleCustomerDetail = style({
  marginTop: '50px',
  marginBottom: '50px',
})

export const formCustomerDetail = style({
  display: 'grid',
  width: '100%',
  gridTemplateColumns: '25% 1fr',
  rowGap: '25px',
})

export const labelForm = style({
  fontWeight: '700',
})

export const inputForm = style({
  border: '0',
  borderBottom: '1px solid black',
  fontSize: '17px',
  ':focus': {
    outline: 'none',
  },
})
