import React from 'react'

export default props => (
  <div className='dog'>
    <div className='dog__image'>
      <img src={props.image} alt="dog" />
    </div>
  </div>
)
