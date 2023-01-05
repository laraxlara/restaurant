import React, { useState } from 'react'
import Menu from '../food/menu'
import MenuItem from './MenuItem'

import '../styles/Menu.css'

const MenuFilter = () => {
  const [items, setItems] = useState(Menu)

  const filterItem = (categItem) => {
    const updatedItems = Menu.filter((curentElem) => {
      return curentElem.category === categItem
    })

    setItems(updatedItems)
  }

  return (
    <>
      <div className='menu-container'>
        <div className='menu-wrapper'>
          <h1>Menu</h1>
          <div className='menu-tabs'>
            <button className='menu-tab' onClick={() => filterItem('breakfast')}>Breakfast</button>
            <button className='menu-tab' onClick={() => filterItem('salad')}>Salads</button>
            <button className='menu-tab' onClick={() => filterItem('main')}>Main</button>
            <button className='menu-tab' onClick={() => filterItem('pizza')}>Pizza</button>
            <button className='menu-tab' onClick={() => filterItem('dessert')}>Dessert</button>
          </div>

          <div className='menu-section'>
            <div className='menu-items'>
            {items.map((item) => {
              const {id, image, name, price, description } = item

              return (
                <div key={id}>
                  <MenuItem img={image} name={name} price={price} description={description} />
                </div>
                )
            })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuFilter
