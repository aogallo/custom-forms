import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { CustomerDetail } from '../CustomerDetail'

test('demo', async () => {
  // const title = 'FICHA CLÍNICAh'
  render(<CustomerDetail />)


  // expect(screen.getByText(title)).toBeInTheDocument()
  const value = await screen.getAllByRole('textbox')
  expect(value.length).toBe(3)
  // console.log(screen.getByRole('spinbutton'))
})
