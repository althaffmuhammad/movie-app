import React, { useState } from 'react'
import { styled } from 'styled-components';
import logo from '../assets/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
import {FaPowerOff, FaSearch} from 'react-icons/fa'
import './Style.css'


const Navbar = ({isScrolled}) => {


    const [showSearch,setShowSearch]=useState(false)
    const [inputHover,setInpuHover]=useState(false)

  
  return (
    <Container>
        <nav className={`flex ${isScrolled?"scrolled":""} nav`}>
            <div className="left flex a-center ">
                 <div className="brand felx a-center j-center">
                    <img src={logo} alt="logo" />
                 </div>
            </div>
            <div className="right flex a-center">
                <div className={`search ${showSearch?"show-search":""}`}>
                    <button className='src' onFocus={()=>setShowSearch(true)} onBlur={()=>{if (!inputHover) {setShowSearch(false)}}}><FaSearch/></button>
                    <input  type="text" placeholder='Search' id="" onMouseEnter={()=>setInpuHover(true)} onMouseLeave={()=>setInpuHover(false)} onBlur={()=>{
                        setShowSearch(false)
                        setInpuHover(false)
                    }}/>
                </div>
                <button className='signout' ><FaPowerOff/></button>
            </div>
        </nav>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
  .scrolled {
    background-color: black;
  }
  
`;