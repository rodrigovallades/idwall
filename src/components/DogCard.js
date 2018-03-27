import React from 'react'
import './DogCard.css'

export default props => (
  <div className='dog'>
    <img src={props.image} className='dog__image' alt="dog" />
  </div>
)
