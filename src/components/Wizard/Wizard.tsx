import { useState } from 'react'
import { CustomerDetail } from '../CustomerDetail/CustomerDetail'
import { contentButtons, contentWizard } from './Wizard.css'
import { Tratamient } from '../Tratamient/Tratamient'
import { TratamientPlan } from '../TratamientPlan/TratamientPlan'
import { OtherDesease } from '../OtherDisease/OtherDesease'

type CustomerDetailType = {
  name: string
  address: string
  age: number
  phone: string
}

type QuestionsType = {
  currentlyHasTratamient: {
    answer: boolean
    extraResponse: string
  }
}

type TeethTratamientType = {
  customerDetail: CustomerDetailType
  questions: QuestionsType
}

const initialState = {
  customerDetail: {
    name: '',
    age: 0,
    address: '',
    phone: '',
  },
  questions: {
    currentlyHasTratamient: {
      answer: false,
      extraResponse: '',
    },
  },
}

export const Wizard = () => {
  const [step, setStep] = useState(2)
  const [teethTratamient, setTeethTratamient] =
    useState<TeethTratamientType>(initialState)
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
      componenet: (
        <CustomerDetail
          data={teethTratamient}
          setTeethTratamient={setTeethTratamient}
        />
      ),
    },
    {
      step: 'tratamient',
      componenet: <Tratamient />,
    },
    {
      step: 'tratamientSectionTwo',
      componenet: <OtherDesease />,
    },
    {
      step: 'tratamientPlan',
      componenet: <TratamientPlan />,
    },
  ]

  return (
    <div className={contentWizard}>
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
