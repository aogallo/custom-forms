

export const CustomerDetail = () => {
  return (
    <div className=''>
      <strong className=''>FICHA CLÍNICA</strong>
      <form className=''>
        <label className='' htmlFor='name'>
          Nombre del paciente:
        </label>
        <input className='' type='text' name='name' id='name' />

        <label className="" htmlFor='age'>
          Edad:
        </label>
        <input className='' type='number' name='age' id='age' />

        <label className='' htmlFor='address'>
          Dirección:
        </label>
        <input className='' type='text' name='address' id='address' />

        <label className='' htmlFor='phone'>
          Teléfono:
        </label>
        <input
          className=''
          type='text'
          name='phone'
          id='phone'
          pattern='[0-9]+'
        />
      </form>
    </div>
  )
}
