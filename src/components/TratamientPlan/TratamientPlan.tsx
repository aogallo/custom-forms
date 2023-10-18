import { TratamientPlanTable } from './TratamientPlanTable'

export const TratamientPlan = () => {
  return (
    <div className='containerTratamientPlan'>
      <h4 className=''>Plan de Tratamiento</h4>
      <form className=''>
        <div className=''>
          <label htmlFor='piece'>No. de pieza</label>
          <input type='text' id='piece' name='piece' />
        </div>
        <div className=''>
          <label htmlFor='tratamient'>Tratamiento</label>
          <input type='text' id='tratamient' name='tratamient' />
        </div>
        <div className=''>
          <label htmlFor='price'>Valor</label>
          <input type='text' id='price' name='price' />
        </div>
        <button type='submit'>Agregar</button>
      </form>
      <TratamientPlanTable />
    </div>
  )
}
