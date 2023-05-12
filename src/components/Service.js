import { HiArrowNarrowRight } from 'react-icons/hi'
import { useState } from 'react'

const Service = ({ img, details, alt }) => {
  return (
    <div className='cardService'>
      <img className='cardService-Img' src={img} alt={alt} />
      <div className='cardService-Desc'>
        <div className='detailsDesc'>{details}</div>
        <div>{<HiArrowNarrowRight className='arrowDesc' />}</div>
      </div>
    </div>
  )
}
export default Service
