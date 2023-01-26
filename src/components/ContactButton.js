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
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
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
