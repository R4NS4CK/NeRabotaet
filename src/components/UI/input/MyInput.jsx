import React from 'react';
import clasess from './MyInput.module.css';

const MyInput = (props) => {
  return (
    <input {...props} className={clasess.myInput}/>
  )
}

export default MyInput;