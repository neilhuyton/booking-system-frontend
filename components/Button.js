import React from "react";

const Button = 
({ active, children, clickHandler, cssClass }) => (
  <button onClick={clickHandler} disabled={active} className={cssClass}>
    {children}
  </button>
);

export default Button;
