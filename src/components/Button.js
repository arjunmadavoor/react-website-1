import React from 'react';
const Button = ({ varient, btnName }) => {
  return (
    <div>
      <button className={varient}>{btnName}</button>
    </div>
  );
};
export default Button;
