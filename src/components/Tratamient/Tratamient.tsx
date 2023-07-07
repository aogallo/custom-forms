import {
  extraInformation,
  groupQuestion,
  inputTratamient,
  question,
  titleTratamient,
} from './Tratamient.css'

export const Tratamient = () => {
  return (
    <div>
      <h3 className={titleTratamient}>Tratamient Form</h3>
      <ol className={groupQuestion}>
        <li>
          <div className={question}>
            <span>Actualmente está recibiendo tratamiento médico?</span>
            <section>
              <input
                type='radio'
                name='currentlyHasTratamient'
                id='currentlyHasTratamientYes'
              />{' '}
              Si
            </section>
            <section>
              <input
                type='radio'
                name='currentlyHasTratamient'
                id='currentlyHasTratamientNo'
              />{' '}
              No
            </section>
            <section className={extraInformation}>
              <label htmlFor='whichTratamient'>Cuál?</label>
              <input
                className={inputTratamient}
                type='text'
                name='whichTratamient'
                id='whichTratamient'
              />
            </section>
          </div>
        </li>

        <p>Marque con una "X" si padece de una de estas enfermedades:</p>

        <li>
          <div className={question}>
            <span>Alteraciones cardiacas</span>
            <section>
              <input
                type='radio'
                name='cardiacDisturbances'
                id='cardiacDisturbancesYes'
              />{' '}
              Si
            </section>
            <section>
              <input
                type='radio'
                name='cardiacDisturbances'
                id='cardiacDisturbancesNo'
              />{' '}
              No
            </section>
          </div>
        </li>

        <li>
          <div className={question}>
            <span>Alteraciones respiratorias</span>
            <section>
              <input
                type='radio'
                name='respiratoryDisorders'
                id='respiratoryDisordersYes'
              />{' '}
              Si
            </section>
            <section>
              <input
                type='radio'
                name='respiratoryDisorders'
                id='respiratoryDisordersNo'
              />{' '}
              No
            </section>
          </div>
        </li>

        <li>
          <div className={question}>
            Alergias
            <section>
              <input type='radio' name='alergic' id='alergicYes' /> Si
            </section>
            <section>
              <input type='radio' name='alergic' id='alergicNo' /> No
            </section>
          </div>
        </li>

        <li>
          <div className={question}>
            Hepatitis
            <section>
              <input type='radio' name='hepatitis' id='hepatitisYes' /> Si
            </section>
            <section>
              <input type='radio' name='hepatitis' id='hepatitisNo' /> No
            </section>
          </div>
        </li>

        <li>
          <div className={question}>
            Problemas renales
            <section>
              <input type='radio' name='renalProblem' id='renalProblemYes' /> Si
            </section>
            <section>
              <input type='radio' name='renalProblem' id='renalProblemNo' /> No
            </section>
          </div>
        </li>

        <li>
          <div className={question}>
            Diabetes
            <section>
              <input type='radio' name='diabetes' id='diabetesYes' /> Si
            </section>
            <section>
              <input type='radio' name='diabetes' id='diabetesNo' /> No
            </section>
          </div>
        </li>

        <li>
          <div className={question}>
            Has estado hospitalizado los ultimos meses?
            <section>
              <input type='radio' name='hospitalized' id='hospitalizedYes' /> Si
            </section>
            <section>
              <input type='radio' name='hospitalized' id='hospitalizedNo' /> No
            </section>
          </div>
        </li>

        <li>
          <div className={question}>
            Toma algun medicamento?
            <section>
              <input type='radio' name='medicament' id='medicamentYes' /> Si
            </section>
            <section>
              <input type='radio' name='medicament' id='medicamentNo' /> No
            </section>
            <section className={extraInformation}>
              <label htmlFor='whichMedicament'>Cuál?</label>
              <input
                className={inputTratamient}
                type='text'
                name='whichMedicament'
                id='whichMedicament'
              />
            </section>
          </div>
        </li>

        <li>
          <div className={question}>
            Hemorragias
            <section>
              <input type='radio' name='hemorrhages' id='hemorrhagesYes' /> Si
            </section>
            <section>
              <input type='radio' name='hemorrhages' id='hemorrhagesNo' /> No
            </section>
          </div>
        </li>
      </ol>
    </div>
  )
}
