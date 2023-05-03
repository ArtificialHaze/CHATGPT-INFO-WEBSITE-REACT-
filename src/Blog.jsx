import React from 'react';
import Article from './Article';
// import {blog1,blog2,blog3,blog4,blog5} from './images'

const Blog = () => {
  return (
    <div id='blog' className='gpt3__blog section__padding'>
      <div className="gpt3__blog-heading">
        <h1 className='gradient__text'>Lorem ipsum dolor sit amet consectetur.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article date={''}  title={""} imageUrl={'blog1'}/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article date={''}  title={""} imageUrl={'blog2'}/>
          <Article date={''}  title={""} imageUrl={'blog3'}/>
          <Article date={''}  title={""} imageUrl={'blog4'}/>
          <Article date={''}  title={""} imageUrl={'blog5'}/>
        </div>
      </div>
    </div>
  )
}

export default Blog