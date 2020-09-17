import React from 'react';
import './input.css';

export const InputBox = ({label,name,type,placeholder,additionalClass,...props}) => {
  return(
    <div className="input-div">
      {label && <label>{label}</label>}
      <input
        className={`input-element-1 ${additionalClass}`}
        name = {name}
        type ={type}
        placeholder={placeholder}
        onChange={()=>{}}
        {...props}
      />
      {additionalClass&& <span className="prefix">+91</span>}
    </div>
  )
}

InputBox.defaultProps = {
  name:'name',
  type:'string',
  additionalClass:''
};

 