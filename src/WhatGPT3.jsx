import React from 'react';
import NewFeature from './NewFeature';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className="gpt3__whatgp3-feature">
        <NewFeature title={"What is GPT3?"} text={'Lorem ipsum dolor sit amet.'}/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className='gradient__text'>Lorem ipsum dolor sit.</h1>
        <p>Lorem, ipsum dolor.</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <NewFeature title={"What is Chatbox GPT3?"} text={'Lorem ipsum dolor sit.'}/>
        <NewFeature title={"What is Knowledgebase?"} text={'Lorem dolor sit amet.'}/>
        <NewFeature title={"What is Education?"} text={'dolor sit amet.'}/>
      </div>
    </div>
  )
}

export default WhatGPT3 