import React, { useEffect, useState } from 'react'
import './body.css'

import m_image1 from '../assets/images/mobile-image-hero-1.jpg'
import m_image2 from '../assets/images/mobile-image-hero-2.jpg'
import m_image3 from '../assets/images/mobile-image-hero-3.jpg'

import d_image1 from '../assets/images/desktop-image-hero-1.jpg'
import d_image2 from '../assets/images/desktop-image-hero-2.jpg'
import d_image3 from '../assets/images/desktop-image-hero-3.jpg'

import light_img from '../assets/images/image-about-light.jpg'
import dark_img from '../assets/images/image-about-dark.jpg'

import arrowbtn from '../assets/images/icon-arrow.svg'
import left from '../assets/images/icon-angle-left.svg'
import right from '../assets/images/icon-angle-right.svg'

export default function Body() {

  const M_images = [m_image1,m_image2,m_image3]
  const D_images = [d_image1,d_image2,d_image3]
  const title = [
    'Discover innovative ways to decorate',
    '  We are available all across the globe',
    '  Manufactured with the best materials'
  ]
  const description =[
    "  We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    "  With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    "  Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
  ]

  const [move,Setmove] = useState(0)

  const nextImg =()=>{
    Setmove(prev=> prev >= 2 ? 0 : prev + 1)
  }
  const prevImg = ()=>{
    Setmove(prev=> prev <= 0 ? 2 : prev-1)
  }

  const [isDesktop,SetisDesktop]=useState(false)
  const [HandleBtn,SetHandelBtn]= useState(false)

  const HandleResize = () => {
    SetisDesktop(window.innerWidth > 1000);
}
  const handelbutton = () => {
    SetHandelBtn(window.innerWidth > 1200);
}

useEffect(() => {
    HandleResize();
    window.addEventListener('resize', HandleResize);
    return () => {
        window.removeEventListener('resize', HandleResize);
    }
}, []);
useEffect(() => {
    handelbutton();
    window.addEventListener('resize', handelbutton);
    return () => {
        window.removeEventListener('resize', handelbutton);
    }
}, []);



  return (

    <div className="main_container">
        
        <div className="main">

            <div className="content_1">

                <div className="img_btn">
                    <img src={isDesktop ? D_images[move] : M_images[move]} alt="" />
                    <div className="left_right">
                        <button onClick={prevImg}>
                            <img src={left} alt="" />
                        </button>
                        <button onClick={nextImg}>
                            <img  src={right} alt="" />
                        </button>
                    </div>
                </div>

                <div className="txt">

                    <h1>{title[move]}</h1>
                    <p>{description[move]}</p>
                    <button>SHOP NOW <img src={arrowbtn} alt="" /></button>
                    {
                        HandleBtn ? 
                            <div className="leftRight">
                                <button onClick={prevImg}>
                                        <img src={left} alt="" />
                                    </button>
                                    <button onClick={nextImg}>
                                        <img  src={right} alt="" />
                                    </button>
                            </div>
                        :
                        null
                    }
                </div>

            </div>

            <div className="content_2">
                    <img src={dark_img} alt="" />
                    <div className="txt2">
                        <h2>ABOUT OUR FUNITURE</h2>
                        <p>Our multifunctional collection blends desgin and 
                            function to suit your individual taste.Make each room unique,or 
                            pick a cohesive theme that best express your interest and what inspire 
                            you.Find the funiture pieces you need, from traditional contemporary styles or anything 
                            in betweem.Product specialist are avaiable to help you to create your dream space.
                        </p>
                    </div>
                    <img src={light_img} alt="" />

            </div>

        </div>

    </div>

)
}
