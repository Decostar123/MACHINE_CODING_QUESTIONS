import React from 'react'
import "../styles/card.css"
const Card = ({product}) => {
  return (
    <div className="productDiv">
        <img className="productImg" src={product.images[0]} />
    </div>
  )
}

export default Card