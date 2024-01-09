import React,{ useEffect, useState} from 'react'
import useProduct from '../hooks/useProduct'

export default function SearchBar() {
  const { setSearchText } = useProduct()
  const [input, setInput] = useState('')
  
    useEffect( ()=>{
      console.log('UseEffect start')
      const timer = setTimeout( ()=>{
        setSearchText(input)
      }, 1000 )
      return ()=> {
        console.log('UseEffect return')
        clearTimeout(timer)
      }
    }, [input])

  return (
    <div className="search-bar">
      <input type="text" value={input} onChange={e=>setInput(e.target.value)} />
    </div>
  )
}
