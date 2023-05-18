import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Buttons from '../UI/buttons/Buttons';
import './PostList.css'

const PostList = ({
  articles,
  deletePost,
  isArticleLiked,
  like,
  unlike,
  likedArticles,
  openComment,
  showComments
}) => {
  const handleClick = (event, articleId) => {
    event.preventDefault();
    event.stopPropagation();
    isArticleLiked(articleId) ? unlike(articleId) : like(articleId);
  };

  return (
    <div className="container">
      {!showComments && 
        articles.map((article) => (
          <div key={article.id} className="content">
            <div className="text__contant">
              <h2>{article.title}</h2>
              <p>{article.body}</p>
            </div>
            <div className="button__contant">
              <Buttons onClick={() => deletePost(article)}>Delete</Buttons>
              <button className='comments' onClick={() => openComment()}>Comments</button>
              <FontAwesomeIcon
                icon={faHeart}
                className={
                  likedArticles.has(article.id) ? 'liked' : 'unlike'
                }
                onClick={(event) => handleClick(event, article.id)}
              />
            </div>
          </div>
        ))}
    </div>
  );
};


export default PostList;
