import React from 'react'

const TextArea = ({ placeholder, onChange, name }) => {
  return (
    <>
      <textarea
        className="textareax-box"
        name={name}
        rows="4"
        cols="50"
        onChange={onChange}
        placeholder={placeholder}
      ></textarea>
    </>
  )
}

export default TextArea
