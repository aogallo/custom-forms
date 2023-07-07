import { tableTratamientPlan } from './TratamientPlan.css'

export const TratamientPlanTable = () => {
  return (
    <div>
      <table className={tableTratamientPlan}>
        <thead>
          <tr>
            <th>No. de pieza</th>
            <th>Tratamiento</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>limpieza</td>
            <td>200</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
