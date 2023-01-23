import { useState } from 'react'
import ModalResponsability from './ModalResponsability'

const ResponsabilityButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [devVilainIsOpen, setDevVilainIsOpen] = useState(false)
  return (
    <div>
      <div style={{ display: isOpen ? 'block' : 'none' }}></div>
      <div
        className='boutonResponsability'
        onClick={() => {
          setDevVilainIsOpen(true)
          setIsOpen(false)
        }}
      >
        Irresponsabilité
      </div>
      <ModalResponsability
        open={devVilainIsOpen}
        onClose={() => setDevVilainIsOpen(false)}
      ></ModalResponsability>
    </div>
  )
}

export default ResponsabilityButton
