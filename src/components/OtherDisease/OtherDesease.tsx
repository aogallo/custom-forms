
export const OtherDesease = () => {
  return (
    <div>
      <h3 className=''>Tratamient Form</h3>
      <ol className=''>
        <li>
          <div className=''>
            Convulciones o desmayos
            <section>
              <input type='radio' name='seizures' id='seizuresYes' /> Si
            </section>
            <section>
              <input type='radio' name='seizures' id='seizuresNo' /> No
            </section>
          </div>
        </li>

        <li>
          <div className=''>
            Fiebre reumática
            <section>
              <input type='radio' name='fever' id='feverYes' /> Si
            </section>
            <section>
              <input type='radio' name='fever' id='feverNo' /> No
            </section>
          </div>
        </li>

        <li>
          <div className=''>
            Sinusitis
            <section>
              <input type='radio' name='sinusitis' id='sinusitisYes' /> Si
            </section>
            <section>
              <input type='radio' name='sinusitis' id='sinusitisNo' /> No
            </section>
          </div>
        </li>

        <li>
          <div className=''>
            Le sangran las encías?
            <section>
              <input type='radio' name='gum' id='gumYes' /> Si
            </section>
            <section>
              <input type='radio' name='gum' id='gumNo' /> No
            </section>
          </div>
        </li>

        <li>
          <div className=''>
            Le han salido fuegos en la boca?
            <section>
              <input type='radio' name='mouthFire' id='mouthFireYes' /> Si
            </section>
            <section>
              <input type='radio' name='mouthFire' id='mouthFireNo' /> No
            </section>
          </div>
        </li>

        <li>
          <div className=''>
            Ha tenido reacción adversa a la anestesia local?
            <section>
              <input
                type='radio'
                name='localAnesthesia'
                id='localAnesthesiaYes'
              />{' '}
              Si
            </section>
            <section>
              <input
                type='radio'
                name='localAnesthesia'
                id='localAnesthesiaNo'
              />{' '}
              No
            </section>
          </div>
        </li>

        <li>
          <div className=''>
            Otras enfermedades:
            {/* <input type='text' name='otherDisease' /> */}
          </div>
        </li>
      </ol>
      <div className=''>
        <img className='' src='/teeths.png' alt='Dientes' />
        <textarea className='' />
      </div>
    </div>
  )
}
