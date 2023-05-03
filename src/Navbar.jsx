import React, { useState } from 'react';
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri';
// import logo from './logo';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={'logo'} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT-3?</a></p>
          <p><a href="#possibility">OpenAi</a></p>
          <p><a href="#newfeatures">Case studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggle?(
          <RiCloseLine color='#fff' size={27} onClick={()=>setToggle(false)}/>
        ):<RiMenu3Line color='#fff' size={27} onClick={()=>setToggle(true)} />}
        {toggle&&(
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className="gpt3__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#wgpt3">What is GPT-3?</a></p>
              <p><a href="#possibility">OpenAi</a></p>
              <p><a href="#newfeatures">Case studies</a></p>
              <p><a href="#blog">Library</a></p>
            </div>
             <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type='button'>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
 
export default Navbar