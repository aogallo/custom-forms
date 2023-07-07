import { style } from '@vanilla-extract/css'

export const titleTratamientPlan = style({
  gridArea: 'title',
  textAlign: 'center',
})

export const teethForm = style({
  gridArea: 'form',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const groupForm = style({
  display: 'flex',
  flexDirection: 'column',
})

export const tableTratamientPlan = style({
  gridArea: 'table',
  border: '1px',
  borderColor: 'red',
})
