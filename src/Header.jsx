import React from 'react'; 
// import people from './people';
// import ai from './ai';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Lorem, ipsum dolor sit amet consectetur adipisicing.</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos alias deleniti impedit enim libero. Dignissimos iste quidem pariatur nostrum ex?</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder='Email..' />
          <button type='button'>Get started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={"people"} alt="peopleImage" />
          <p>1583 ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      <div className="gpt3__header-image">
          <img src={"ai"} alt="AIImage" />
        </div>
    </div>
  )
}

export default Header