import React from 'react'

export default function Layout({ children }) {

  return (
    <div id='container' className='fade-in'>
      <h1 className='title center'>Lights Out!</h1>
      { children }
    </div>
  )
}
