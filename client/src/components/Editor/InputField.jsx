import React from 'react'

const InputField = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input
        value={props.val}
        name={props.name ? props.name : `${props.val}`}
        onChange={(e) =>
          props.handleChangeEditor(e, e.target.name, e.target.value)
        }
        type={props.type ? props.type : 'text'}
      />
    </div>
  )
}

export default InputField
