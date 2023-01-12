import React from 'react'
import Favorite from '../components/Favorite'

const NewVilain = () => {
  return (
    <div>
      {foodItems.map(vilain => (
        <Favorite isFavorite={vilain.isFavorite} />
      ))}
    </div>
  )
}

export default NewVilain
