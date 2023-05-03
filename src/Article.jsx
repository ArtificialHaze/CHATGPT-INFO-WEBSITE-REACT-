import React from 'react';

const Article = ({imageUrl,title,date}) => { 
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={imageUrl} alt="ArticleImage" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h4>{title}</h4>
        </div>
          <p>Read full article</p>
      </div>
    </div>
  )
}

export default Article