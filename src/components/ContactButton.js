import { useState } from 'react'
import ModalContact from './ModalContact'
import son2 from '../assets/audio/waluigi12.wav'

const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [contactIsOpen, setContactIsOpen] = useState(false)
  let audio2 = new Audio(son2)
  const handleClick = () => {
    audio2.play()
    setContactIsOpen(true)
    setIsOpen(false)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  return (
    <div>
      <div style={{ display: isOpen ? 'block' : 'none' }}></div>
      <div className='contactButton' onClick={handleClick}>
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
