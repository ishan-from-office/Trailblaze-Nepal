/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Select from 'react-select'

const style = {
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? '#fb8500' : null,
      color: '#333333',
    }
  },
  control: (base) => ({
    ...base,
    border: 0,
    borderRadius: 0,
    borderBottom: ' 1px solid #e5e5e5 !important',
    // This line disable the blue border

    '&:hover': {
      border: 0,
    },
    boxShadow: 'none',
  }),
}

const SelecteComponent = ({ options, onchange }) => {
  const [selectedOption, setSelectedOption] = useState(null)

  const renderList = () => {
    return options?.map((data) => ({ label: data.title, value: data.id }))
  }

  return (
    <>
      <Select
        // defaultValue={selectedOption}
        onChange={onchange}
        options={renderList()}
        styles={style}
      />
    </>
  )
}

export default SelecteComponent
