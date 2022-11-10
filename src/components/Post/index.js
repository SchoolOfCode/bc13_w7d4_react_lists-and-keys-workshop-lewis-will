import React from 'react';

import './index.css';

function Post({key, title, date, author, text, highlights, image}) {
  return <article id={key} className={'pigeon'}>
    <h2>{title}</h2><h5>{author}</h5><h6>{date}</h6>
        {text}
    <img src={image.link} alt={image.alt}></img>
    {highlights.map((highlight) => {
      return <li>{highlight}</li> 
    })}
  </article>;
}

export default Post;
