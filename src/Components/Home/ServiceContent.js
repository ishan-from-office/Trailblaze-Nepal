import React from 'react'

const ServiceContent = ({ title, icon, content }) => {
  return (
    <>
      <div className="service-content d-flex">
        <div>{icon}</div>
        <div>
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
      </div>
    </>
  )
}

export default ServiceContent
