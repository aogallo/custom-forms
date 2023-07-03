import { useState } from 'react'
import { CustomerDetail } from '../CustomerDetail/CustomerDetail'
import { contentButtons, contentWizard } from './Wizard.css'
import { Tratamient } from '../Tratamient/Tratamient'

type CustomerDetailType = {
  name: string
  address: string
  age: number
  phone: string
}

type TeethTratamientType = {
  customerDetail: CustomerDetailType
}

export const Wizard = () => {
  const [step, setStep] = useState(1)
  const [teethTratamient, setTeethTratamient] = useState<TeethTratamientType>(
    {}
  )
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

  const steps = [
    {
      step: 'customeDetail',
      componenet: <CustomerDetail />,
    },
    {
      step: 'tratamient',
      componenet: <Tratamient />,
    },
  ]

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
