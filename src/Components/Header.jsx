import React from 'react'
import Logo from './Logo'
import Counter from "./Counter"

const Header = ({totalNumbersOfItems,numberOfItemsChecked}) => {
  return (
    <header>
        <Logo/>
        <Counter numberOfItemsChecked={numberOfItemsChecked} totalNumbersOfItems ={totalNumbersOfItems} />
    </header>
  )
}

export default Header