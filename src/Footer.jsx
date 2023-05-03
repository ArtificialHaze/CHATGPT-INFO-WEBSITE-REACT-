import React from 'react';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request early access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src="logo" alt="Logo" />
          <p>Lorem ipsum dolor sit amet. </p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Lorem, ipsum</p>
          <p>Lorem, ipsum. lorem</p>
          <p>Lorem, ipsum. Lorem, ipsum.</p>
          <p>Lorem</p>
        </div>
         <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Lorem, ipsum</p>
          <p>Lorem, ipsum. lorem</p>
          <p>Lorem, ipsum. Lorem, ipsum.</p>
          <p>Lorem</p>
        </div>
         <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Lorem@ipsum</p>
          <p>Lorem: +555 555 555</p>
          <p>Lorem, ipsum. Lorem, ipsum.</p>
          <p>Lorem</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>
          &copy; 2023 by DreamDevs. all rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer;