import React from 'react'


const Button = ({name,bgclr,clr,onClick}) => {
  return (
    <div className='my-btn'>
      <button
      style={{backgroundColor:bgclr,color:clr}}
      onClick={onClick}>{name}</button>
    </div>
  )
}

export default Button
