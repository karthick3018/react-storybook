import React from 'react';
import './input.css';

export const InputBox = ({label,name,type,placeholder,...props}) => {
  return(
    <div className="input-div">
      {label && <label>{label}</label>}
      <input
        className="input-element-1"
        name = {name}
        type ={type}
        placeholder={placeholder}
        onChange={()=>{}}
        {...props}
      />
    </div>
  )
}

InputBox.defaultProps = {
  name:'name',
  type:'string',
};

 