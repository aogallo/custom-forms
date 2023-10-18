export const Tratamient = () => {
  return (
    <div>
      <h3 className=''>Tratamient Form</h3>
      <ol className=''>
        <li>
          <div className=''>
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
            <section className=''>
              <label htmlFor='whichTratamient'>Cuál?</label>
              <input
                className=''
                type='text'
                name='whichTratamient'
                id='whichTratamient'
              />
            </section>
          </div>
        </li>

        <p>Marque con una "X" si padece de una de estas enfermedades:</p>

        <li>
          <div className=''>
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
          <div className=''>
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
          <div className=''>
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
          <div className=''>
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
          <div className=''>
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
          <div className=''>
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
          <div className=''>
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
          <div className=''>
            Toma algun medicamento?
            <section>
              <input type='radio' name='medicament' id='medicamentYes' /> Si
            </section>
            <section>
              <input type='radio' name='medicament' id='medicamentNo' /> No
            </section>
            <section className=''>
              <label htmlFor='whichMedicament'>Cuál?</label>
              <input
                className=''
                type='text'
                name='whichMedicament'
                id='whichMedicament'
              />
            </section>
          </div>
        </li>

        <li>
          <div className=''>
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
