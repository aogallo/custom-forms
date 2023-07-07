import { style } from '@vanilla-extract/css'

const commonHeight = 400

export const containerImageText = style({
  display: 'flex',
  gap: '5px',
})

export const teeths = style({
  width: '600px',
  height: `${commonHeight}px`,
})

export const textAreaTeeth = style({
  width: '100%',
  height: `${commonHeight - 10}px`,
  resize: 'none',
})
