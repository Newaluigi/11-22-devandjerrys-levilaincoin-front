import { useState } from 'react'
import ModalResponsability from './ModalResponsability'

const ResponsabilityButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [responsabilityIsOpen, setResponsabilityIsOpen] = useState(false)
  return (
    <div>
      <div style={{ display: isOpen ? 'block' : 'none' }}></div>
      <div
        className='boutonResponsability'
        onClick={() => {
          setResponsabilityIsOpen(true)
          setIsOpen(false)
        }}
      >
        Irresponsabilité
      </div>
      <ModalResponsability
        open={responsabilityIsOpen}
        onClose={() => setResponsabilityIsOpen(false)}
      ></ModalResponsability>
    </div>
  )
}

export default ResponsabilityButton
