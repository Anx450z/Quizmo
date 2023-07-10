import React from 'react'

const Navbar = (props: any) => {
  return (
    <div className="navbar">
      <h1 className="text-left text-2xl font-extrabold text-indigo-600 shadow-black drop-shadow-sm">
        Quizmo
      </h1>
      {props.children}
    </div>
  )
}

export default Navbar
