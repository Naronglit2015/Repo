import React, { createContext, useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'

const ProductContext = createContext()

function ProductContextProvider(props) {

  const [searchText, setSearchText] = useState('')
  const urlApi = 'https://dummyjson.com/products/search?q='

  const data = useFetch(urlApi,searchText)
  // const [data, setData] = useState({})

  // useEffect( ()=>{
  //   fetch('https://dummyjson.com/products/search?q=' + searchText)
  //   .then( resp => resp.json())
  //   .then( rs => {
  //     setData(rs)
  //   })
  // }, [searchText] )

  return (
    <ProductContext.Provider value={{searchText, setSearchText, data}}>
      {props.children}
    </ProductContext.Provider>
  )
}

export { ProductContextProvider }
export default ProductContext

// สร้าง ProductContext เพื่อ share ข้อมูล products ให้กับทุก component
// share data : product ที่ fetch มา , searchText
// 13:05
