import React, { useState } from 'react'
import { navLinks } from "../Constants"
import { styles } from "../style"
import { Link } from "react-router-dom"
import { logo, menu, close } from "../assets"
const Navbar = () => {
  const [Active, setActive] = useState("")
  const [toggle, settoggle] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary `}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto '>
        <Link className='flex items-center gap-2 ' onClick={() => {
          setActive(true)
          window.scrollTo(0, 0)
        }}>
          <img src={logo} className="w-9 h-9 object-contain" />
          <p className='text-white text-[18px] font-bold cursor-pointer'>Aniket Suryavanshi</p>
        </Link>
        <ul className='list-none hidden  sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li onClick={() => setActive(link.title)} key={link.id} className={`${Active === link.title ? "text-white" : "text-secondary"}`}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => {
            settoggle(!toggle)
          }} />
          {
            toggle && (
              <div className='p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl'>
                <ul className='list-none flex justify-end flex-col gap-4 items-start'>
                  {navLinks.map((link) => (
                    <li onClick={() => setActive(link.title)} key={link.id} className={`${Active === link.title ? "text-white" : "text-secondary"}`}>
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar