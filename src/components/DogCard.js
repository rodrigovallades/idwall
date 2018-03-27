import React from 'react'

export default props => (
  <div className={`small-box bg-${props.color}`}>
    <div className='inner'>
      <h3>{props.name}</h3>
      <p>Dog</p>
    </div>
    <div className='icon'>
      <i className={`fa fa-${props.icon}`}></i>
    </div>
  </div>
)
