import React from 'react'

const OptionControl = (props:any) => {
  return (
    <form onSubmit={props.onSubmit}>
    <input placeholder='Add option'></input>
    <button type="submit">Add</button>
  </form>
  )
}

export default OptionControl
