import React from 'react'
import "../css/loader.css"
const Loader = ({liked}) => {
  return (
    <div className={`loader  ${!liked ? "rotate-border-green":"rotate-border-red"}` }></div>
  )
}

export default Loader