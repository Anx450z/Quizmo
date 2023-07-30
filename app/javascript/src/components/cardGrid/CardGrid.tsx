import React from 'react'

const CardGrid = (props:any) => {
  return (
    <div id='cards' >
      {props.children}
    </div>
  )
}

export default CardGrid
