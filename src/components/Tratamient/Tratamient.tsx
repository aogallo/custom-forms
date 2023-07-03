import { titleTratamient } from './Tratamient.css'

export const Tratamient = () => {
  return (
    <div className={titleTratamient}>
      <h3>Tratamient Form</h3>
      <ol>
        <li>
          <p>Actualmente está recibiendo tratamiento médico?</p>
          <input
            type='radio'
            name='currentlyHasTratamient'
            id='currentlyHasTratamientYes'
          />{' '}
          Si
          <input
            type='radio'
            name='currentlyHasTratamient'
            id='currentlyHasTratamientNo'
          />{' '}
          No
          <label htmlFor='whichTratamient'>Cuál?</label>
          <input type='text' name='whichTratamient' id='whichTratamient' />
        </li>

        <p>Marque con una "X" si padece de una de estas enfermedades:</p>
        <li>
          Alteraciones cardiacas
          <input
            type='radio'
            name='cardiacDisturbances'
            id='cardiacDisturbancesYes'
          />{' '}
          Si
          <input
            type='radio'
            name='cardiacDisturbances'
            id='cardiacDisturbancesNo'
          />{' '}
          No
        </li>

        <li>
          Alteraciones respiratorias
          <input
            type='radio'
            name='respiratoryDisorders'
            id='respiratoryDisordersYes'
          />{' '}
          Si
          <input
            type='radio'
            name='respiratoryDisorders'
            id='respiratoryDisordersNo'
          />{' '}
          No
        </li>

        <li>
          Alergias
          <input type='radio' name='alergic' id='alergicYes' /> Si
          <input type='radio' name='alergic' id='alergicNo' /> No
        </li>

        <li>
          Hepatitis
          <input type='radio' name='hepatitis' id='hepatitisYes' /> Si
          <input type='radio' name='hepatitis' id='hepatitisNo' /> No
        </li>

        <li>
          Problemas renales
          <input type='radio' name='renalProblem' id='renalProblemYes' /> Si
          <input type='radio' name='renalProblem' id='renalProblemNo' /> No
        </li>

        <li>
          Diabetes
          <input type='radio' name='diabetes' id='diabetesYes' /> Si
          <input type='radio' name='diabetes' id='diabetesNo' /> No
        </li>

        <li>
          Has estado hospitalizado los ultimos meses?
          <input type='radio' name='hospitalized' id='hospitalizedYes' /> Si
          <input type='radio' name='hospitalized' id='hospitalizedNo' /> No
        </li>

        <li>
          Has estado hospitalizado los ultimos meses?
          <input type='radio' name='hospitalized' id='hospitalizedYes' /> Si
          <input type='radio' name='hospitalized' id='hospitalizedNo' /> No
        </li>

        <li>
          Toma algun medicamento?
          <input type='radio' name='medicament' id='medicamentYes' /> Si
          <input type='radio' name='medicament' id='medicamentNo' /> No
          <label htmlFor='whichMedicament'>Cuál?</label>
          <input type='text' name='whichMedicament' id='whichMedicament' />
        </li>

        <li>
          Hemorragias
          <input type='radio' name='hemorrhages' id='hemorrhagesYes' /> Si
          <input type='radio' name='hemorrhages' id='hemorrhagesNo' /> No
        </li>

        <li>
          Convulciones o desmayos
          <input type='radio' name='seizures' id='seizuresYes' /> Si
          <input type='radio' name='seizures' id='seizuresNo' /> No
        </li>

        <li>
          Fiebre reumática
          <input type='radio' name='fever' id='feverYes' /> Si
          <input type='radio' name='fever' id='feverNo' /> No
        </li>

        <li>
          Sinusitis
          <input type='radio' name='sinusitis' id='sinusitisYes' /> Si
          <input type='radio' name='sinusitis' id='sinusitisNo' /> No
        </li>

        <li>
          Le sangran las encías?
          <input type='radio' name='gum' id='gumYes' /> Si
          <input type='radio' name='gum' id='gumNo' /> No
        </li>

        <li>
          Le han salido fuegos en la boca?
          <input type='radio' name='mouthFire' id='mouthFireYes' /> Si
          <input type='radio' name='mouthFire' id='mouthFireNo' /> No
        </li>

        <li>
          Ha tenido reacción adversa a la anestesia local?
          <input
            type='radio'
            name='localAnesthesia'
            id='localAnesthesiaYes'
          />{' '}
          Si
          <input
            type='radio'
            name='localAnesthesia'
            id='localAnesthesiaNo'
          />{' '}
          No
        </li>

        <li>
          Otras enfermedades:
          <input type='text' name='otherDisease' />
        </li>
      </ol>
    </div>
  )
}
