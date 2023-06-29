import React from 'react'
import { titleCustomer } from './CustomerDetail.css'

export const CustomerDetail = (props: {}) => {
  return (
    <div>
      <strong className={titleCustomer}>FICHA CLÍNICA</strong>
      <form>
        <label htmlFor='name'>Nombre del paciente:</label>
        <input type='text' name='name' id='name' />

        <label htmlFor='age'>Edad:</label>
        <input type='number' name='age' id='age' />

        <label htmlFor='address'>Dirección:</label>
        <input type='text' name='address' id='address' />

        <label htmlFor='phone'>Phone:</label>
        <input type='text' name='phone' id='phone' />
      </form>
    </div>
  )
}
