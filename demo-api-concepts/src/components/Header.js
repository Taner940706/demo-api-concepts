import React from 'react'
import mainImage from '../assets/images/rest-api.svg'

export default function Header() {
  return (
    <header>
        <img src={mainImage} alt='Main image'/>
        <h1>Main concepts of Rest API</h1>
      </header>
  )
}
