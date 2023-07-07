import { tableTratamientPlan } from './TratamientPlan.css'

export const TratamientPlanTable = () => {
  return (
    <div className={tableTratamientPlan}>
      <table>
        <thead>
          <tr>
            <th>PLAN DE TRATAMIENTO</th>
          </tr>
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
