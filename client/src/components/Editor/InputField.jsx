import React from 'react'
import '../../styles/Forms.css'

const InputField = (props) => {
  return (
    <div>
      {/* <label>{props.label}</label> */}
      <input
        className="input__underline "
        value={props.val}
        name={props.name ? props.name : `${props.val}`}
        onChange={(e) => props.handleChange(e, e.target.name, e.target.value)}
        type={props.type ? props.type : 'text'}
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default InputField
