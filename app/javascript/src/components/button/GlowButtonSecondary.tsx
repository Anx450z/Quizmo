import React from 'react';

const GlowButtonSecondary = (props:any) => {

  const updateMouseMovement = (e:any) => {
    for(const button of document.getElementsByClassName("button")) {
      const rect = button.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      (button as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
      (button as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
    }
  }

  return(
 <>
  <div className='button bg-blue-500 text-black' onMouseMove={(e)=>updateMouseMovement(e)}>
   <button className='button-content bg-white'>
    <span>{props.children}</span>
    </button>
  </div>
 </>
  )
};

export default GlowButtonSecondary;
