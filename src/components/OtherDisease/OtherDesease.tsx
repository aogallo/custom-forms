import {
  groupQuestion,
  question,
  titleTratamient,
} from '../Tratamient/Tratamient.css'
import { containerImageText, teeths, textAreaTeeth } from './OtherDisease.css'

export const OtherDesease = () => {
  return (
    <div>
      <h3 className={titleTratamient}>Tratamient Form</h3>
      <ol className={groupQuestion}>
        <li>
          <div className={question}>
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
          <div className={question}>
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
          <div className={question}>
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
          <div className={question}>
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
          <div className={question}>
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
          <div className={question}>
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
          <div className={question}>
            Otras enfermedades:
            {/* <input type='text' name='otherDisease' /> */}
          </div>
        </li>
      </ol>
      <div className={containerImageText}>
        <img className={teeths} src='/teeths.png' alt='Dientes' />
        <textarea className={textAreaTeeth} />
      </div>
    </div>
  )
}
