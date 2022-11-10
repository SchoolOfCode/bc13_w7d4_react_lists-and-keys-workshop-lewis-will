import React from 'react';

import './index.css';

function Post({key, title, date, author, text, highlights, image}) {
  return <article id={key} title={title} date={date} author={author} highlights={highlights} img={image}>
    <h3>{title}</h3><h5>{author}</h5><h6>{date}</h6>
    <h4>{highlights}</h4>
    <img src={image.link} alt={image.alt}></img>
    
    {text}
  </article>;
}

export default Post;
