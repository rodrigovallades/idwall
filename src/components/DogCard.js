import React from 'react'
import './DogCard.css'

export default props => (
  <div className='dog'>
    <img src={props.image} id={props.id} className='dog__image' alt="dog" onClick={props.onClick} />
  </div>
)
