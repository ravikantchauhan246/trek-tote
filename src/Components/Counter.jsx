import React from 'react'

const Counter = ({totalNumbersOfItems,numberOfItemsChecked}) => {
  return (
    <>
      <p><b>{numberOfItemsChecked}</b>/{totalNumbersOfItems} items packed</p>
    </>
  )
}

export default Counter