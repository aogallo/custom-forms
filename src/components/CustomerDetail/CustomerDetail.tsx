import {
  containerCustomerDetail,
  formCustomerDetail,
  inputForm,
  labelForm,
  titleCustomerDetail,
} from './CustomerDetail.css'

type CustomerDetailProps = {}

export const CustomerDetail = () => {
  return (
    <div className={containerCustomerDetail}>
      <strong className={titleCustomerDetail}>FICHA CLÍNICA</strong>
      <form className={formCustomerDetail}>
        <label className={labelForm} htmlFor='name'>
          Nombre del paciente:
        </label>
        <input className={inputForm} type='text' name='name' id='name' />

        <label className={labelForm} htmlFor='age'>
          Edad:
        </label>
        <input className={inputForm} type='number' name='age' id='age' />

        <label className={labelForm} htmlFor='address'>
          Dirección:
        </label>
        <input className={inputForm} type='text' name='address' id='address' />

        <label className={labelForm} htmlFor='phone'>
          Teléfono:
        </label>
        <input
          className={inputForm}
          type='text'
          name='phone'
          id='phone'
          pattern='[0-9]+'
        />
      </form>
    </div>
  )
}
