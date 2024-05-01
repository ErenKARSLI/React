import React from 'react'

const jsx1 = () => {
    const message = 
    "Class isimleri className icinde olmali"

  return (
    <ul>
        <li>Tum companentler tek bir root icinde olmali</li>
        <li className='title' > {message} </li>
    </ul>
  )
}

export default jsx1