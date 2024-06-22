import React from 'react'
import "../css/file.css"
const File = ({fileName}) => {
    // alert(fileName)
  return (
    <div className="fileDiv">
        <p>🗄 {fileName} </p>
    </div>
  )
}

export default File