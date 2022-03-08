import React from 'react'

function Title({ title, description }) {
  return (
    <div className="mb-3">
      <h3 className={`mb-0 title`}>{title}</h3>
      <small>{description}</small>
    </div>
  )
}

export default Title
