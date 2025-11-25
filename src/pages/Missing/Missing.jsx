import React from 'react'
import Error from '../../img/error.svg'

const Missing = () => {
  return (
    <div className='w-75 d-block mx-auto text-center'>
      <img src={Error} alt="" />
      <small>404 Error There is nothing here</small>
    </div>
  )
}

export default Missing