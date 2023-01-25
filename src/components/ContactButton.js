import { useState } from 'react'
import ModalContact from './ModalContact'

const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [contactIsOpen, setContactIsOpen] = useState(false)
  return (
    <div>
      <div style={{ display: isOpen ? 'block' : 'none' }}></div>
      <div
        className='contactButton'
        onClick={() => {
          setContactIsOpen(true)
          setIsOpen(false)
        }}
      >
        Contacter ce Vilain
      </div>
      <ModalContact
        open={contactIsOpen}
        onClose={() => setContactIsOpen(false)}
      ></ModalContact>
    </div>
  )
}

export default ContactButton
