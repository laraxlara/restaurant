import React from 'react'

import '../styles/MenuItem.css'

const MenuItem = ({ key, img, name, price, description, alt }) => {
  return (
    <>
      <div key={key} className='meal-wrapper'>
        <div className='image-container'>
            <img src={img} alt={alt} />
        </div>
        <div className='meal-info'>
            <h3 className='meal-name'>{name}</h3>
            <p className='meal-description'>{description}</p>
            <p className='meal-price'>{price} &#x20AC;</p>
        </div>
      </div>
    </>
  )
}

export default MenuItem
