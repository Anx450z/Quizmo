import React from 'react';

const GlowCard = (props:any) => {
  const updateMouseMovement = (e:any) => {
    for (const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
      (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
      (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return <>
  <div className={`card ${props.className}`} onMouseMove={e => updateMouseMovement(e)}>
    <div className="card-content">
      {props.children}
    </div>
  </div>
 </>;
};

export default GlowCard;
