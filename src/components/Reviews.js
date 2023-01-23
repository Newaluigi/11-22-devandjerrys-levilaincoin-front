import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import { HiArrowNarrowRight } from 'react-icons/hi'

const reviews = () => {
  return (
    <div className='reviewsBlock'>
      <h2>X Commentaires</h2>
      <div>
        <div className='firstReview'>1er review</div>
        <div className='secondReview'>2e review</div>
      </div>
      <HiArrowNarrowRight className='logoArrow' />
    </div>
  )
}

export default reviews
