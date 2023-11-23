import React from 'react'
import "./InfoBox.css"
function InfoBox({box}) {
  return (
    <div className='InfoBox'>
      <h1>{box.headTitle}</h1>
      <h2>{box.subtitle}</h2>
    </div>
  )
}

export default InfoBox
