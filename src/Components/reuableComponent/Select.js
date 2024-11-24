import React from 'react'

const Select = ({ data, selectcss, Placeholder, Icon }) => {
  const handleChange = (event) => {
    // let selectedValue = event.target.value
    // this.props.onSelectChange(selectedValue)
  }

  let options = data.map((data) => (
    <option key={data.id} value={data.id}>
      {data.name}
    </option>
  ))
  return (
    <>
      <div className="d-flex position-relative">
        <select name={'suman'} className={selectcss} onChange={handleChange}>
          <option className="place-css">{Placeholder}</option>
          {options}
        </select>
        <div>{Icon}</div>
      </div>
    </>
  );
}

export default Select;
