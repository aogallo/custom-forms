import { useState } from 'react'
import { CustomerDetail } from '../CustomerDetail/CustomerDetail'
import { contentButtons, contentWizard } from './Wizard.css'

const steps = [
  {
    step: 'customeDetail',
    componenet: <CustomerDetail />,
  },
  {
    step: 'tratamient',
    componenet: <h1>Tratamientos</h1>,
  },
]

export const Wizard = () => {
  const [step, setStep] = useState(0)
  const handleNext = () => {
    if (step + 1 < steps.length) {
      setStep(step + 1)
    }
  }

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  return (
    <div className={contentWizard}>
      Whizard
      {steps[step].componenet}
      <div className={contentButtons}>
        <button type='button' onClick={handlePrevious}>
          Regresar
        </button>
        <button type='button' onClick={handleNext}>
          Siguiente
        </button>
      </div>
    </div>
  )
}
