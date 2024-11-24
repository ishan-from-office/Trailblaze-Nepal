import React from 'react'

const InputField = ({ type, Placeholder, name, inputCss, label, onChange }) => {
  return (
    <>
      <div className="input-box">
        <input
          type={type}
          name={name}
          placeholder={Placeholder}
          className={inputCss}
          onChange={onChange}

        />
        <label htmlFor="">{label}</label>
      </div>
    </>
  )
}

export default InputField
