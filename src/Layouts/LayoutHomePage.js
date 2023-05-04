import React from 'react'
import HeaderHomePage from '../Components/Header/HeaderHomePage/HeaderHomePage'

export default function LayoutHomePage({ Components }) {
  return (
    <>
        <HeaderHomePage />
        <div className='flex-grow'>
            <Components />
        </div>
    </>
  )
}
