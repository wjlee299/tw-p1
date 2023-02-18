import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../style.css"

function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='bg-black text-white flex gap-9 px-9 py-8 justify-end font-roboto tracking-wide'>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/contact'}>Contact</Link>
    </div>
  )
}

export default Navbar