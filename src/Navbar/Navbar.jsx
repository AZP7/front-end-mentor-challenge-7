import React, { useState,useEffect } from 'react'
import './Navbar.css'
import close from '../assets/images/icon-close.svg'
import hamburger from '../assets/images/icon-hamburger.svg'



export default function Navbar() {


  const [openNav,SetopenNav] = useState(false)
  const [isDesktop,SetisDesktop] = useState(false)

  const HandelResize = ()=>{
    SetisDesktop(window.innerWidth > 1000)
  }
  useEffect ( () =>{
    HandelResize();
    window.addEventListener('resize',HandelResize)
    return()=>{
      window.removeEventListener('resize',HandelResize)
    }
  },[])

  return (
    <div className="header">
        <h1>room</h1>

        {
          isDesktop ? 
          <nav className="desk_nav">
                  <ul className="desk_ul">
                    <li className="desk_li">home</li>
                    <li className="desk_li">shop</li>
                    <li className="desk_li">about</li>
                    <li className="desk_li">contact</li>
                  </ul>
              </nav>
          :
          <>
          <img src={hamburger} alt="" onClick={()=>SetopenNav(!openNav)} className={openNav ? 'rotate' : ''} />
              <nav className={`mobilenav ${openNav ? 'display_Nav' : 'hide_Nav'}`}>
                  <img src={close} alt="" onClick={()=>SetopenNav(!openNav)} />

                  <ul className="mobile_ul">
                      <li className="mobile_li">home</li>
                      <li className="mobile_li">shop</li>
                      <li className="mobile_li">about</li>
                      <li className="mobile_li">contact</li>
                  </ul>

              </nav>
          </>
        }
          </div>
  )
}
