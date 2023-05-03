import React from 'react';
import NewFeature from './NewFeature';

const featuresData=[
    {
        title: "Lorem, ipsum",
   text:'lorem lorem ipsum'
    },
    {
        title: "Lorem, ipsum",
   text:'lorem lorem ipsum'
    },
    {
        title: "Lorem, ipsum",
   text:'lorem lorem ipsum'
    },
    {
        title: "Lorem, ipsum",
   text:'lorem lorem ipsum'
    },
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
        <div className='gpt3__features-heading'>
            <h1 className='gradient__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, quos?</h1>
            <p>Lorem, ipsum dolor.</p>
        </div>
        <div className='gpt3__features-content'>
        {featuresData.map((item,index)=>(
            <NewFeature key={index} title={item.title} text={item.text}/>
        ))}
        </div>
    </div>
  )
}

export default Features