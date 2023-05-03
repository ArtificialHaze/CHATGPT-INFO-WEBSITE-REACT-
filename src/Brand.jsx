import React from 'react';
// import google from './google.png';
// import slack from './slack.png';
// import assian from './assian.png';
// import dropbox from './dropbox.png';
// import shopify from './shopify.png';

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={'google'} alt="Google" />
      </div>
      <div>
        <img src={'slack'} alt="Slack" />
      </div>
      <div>
        <img src={'assian'} alt="Assian" />
      </div>
      <div>
        <img src={'dropbox'} alt="Dropbox" />
      </div>
      <div>
        <img src={'shopify'} alt="Shopify" />
      </div>
    </div>
  )
}

export default Brand