import { groupForm, teethForm, titleTratamientPlan } from './TratamientPlan.css'
import { TratamientPlanTable } from './TratamientPlanTable'

export const TratamientPlan = () => {
  return (
    <div className='containerTratamientPlan'>
      <h4 className={titleTratamientPlan}>Plan de Tratamiento</h4>
      <form className={teethForm}>
        <div className={groupForm}>
          <label htmlFor='piece'>No. de pieza</label>
          <input type='text' id='piece' name='piece' />
        </div>
        <div className={groupForm}>
          <label htmlFor='tratamient'>Tratamiento</label>
          <input type='text' id='tratamient' name='tratamient' />
        </div>
        <div className={groupForm}>
          <label htmlFor='price'>Valor</label>
          <input type='text' id='price' name='price' />
        </div>
        <button type='submit'>Agregar</button>
      </form>
      <TratamientPlanTable />
    </div>
  )
}
