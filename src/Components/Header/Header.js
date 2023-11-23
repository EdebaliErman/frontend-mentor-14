import React from 'react'
import "./Header.css"
function Header({data}) {
  return (
    <header>
      <h1>{data.headTitle}</h1>
      <h2>{data.subtitle}</h2>
      <h3>{data.paragraph}</h3>
    </header>
  )
}

export default Header
