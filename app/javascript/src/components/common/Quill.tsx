import React from 'react'
import ReactQuill from 'react-quill'

const Quill = (props:any) => {
  const modules = {
    toolbar: [
      [{ font: [] }],
      ['bold', 'italic', 'underline'],
      [{ script: 'sub' }, { script: 'super' }],
    ],
  }
  return (
    <ReactQuill readOnly value={props.value} modules={modules} theme='bubble'/>
  )
}

export default Quill
