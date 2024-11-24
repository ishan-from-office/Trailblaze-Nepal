import React from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const DatePickerComponent = ({
  style,
  placeholderText,
  Icon,
  selected,
  name,
  onChange,
}) => {

  return (
    <>
      <div className="d-flex align-items-center position-relative">
        <DatePicker
          name={name}
          selected={selected}
          onChange={onChange}
          className={style}
          dateFormat="yyyy-dd-MM"
          placeholderText={placeholderText}
        />
        <div>{Icon}</div>
      </div>
    </>
  )
}

export default DatePickerComponent
