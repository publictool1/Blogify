import React, { useState, useEffect } from 'react';
import './Main.css';
import Buttons from '../UI/buttons/Buttons';
import Modal from '../modal/Modal';
import PostList from '../postList/PostList';
import NoPostList from '../noPostList/NoPostList';
import GetFetchApi from '../../API/GetPosts';
import Loader from '../UI/loader/Loader';
import GetComm from '../../API/GetComments';
import Comments from '../comments/Comments';
import { Parallax } from 'react-scroll-parallax';

const Main = () => {
  const [articles, setArticles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [likedArticles, setLikedArticles] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [activePage, setActivePage] = useState(1);
  const [isPostLoading, setIsPostLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [randomComments, setRandomComments] = useState([]);
  const [scrollY, setScrollY] = useState(0);
  const [fadeInPosts, setFadeInPosts] = useState(false);

  useEffect(() => {
    getFetch();
  }, []);

  useEffect(() => {
    getComments();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > 0) {
      setFadeInPosts(false);
    } else {
      setFadeInPosts(true);
    }
  }, [scrollY]);

  async function getFetch() {
    setIsPostLoading(true);
    setTimeout(async () => {
      const response = await GetFetchApi.getAll();
      setArticles(response);
      setIsPostLoading(false);
    }, 1900);
  }

  async function getComments() {
    const response = await GetComm.getComments();
    setComments(response);
    console.log(response);
  }

  const addNewBlog = (newTitle, newBody) => {
    const newArticle = {
      id: articles.length + 1,
      title: newTitle,
      body: newBody,
    };
    setIsModalOpen(false);
    setArticles([...articles, newArticle]);
  };

  function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const openComment = () => {
    const shuffledComments = shuffle(comments);
    const randomComments = shuffledComments.slice(0, 5);
    setRandomComments(randomComments);
    setShowComments(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const deletePost = (articleToDelete) => {
    const deleteArticle = articles.filter((article) => article.id !== articleToDelete.id);
    setArticles(deleteArticle);
  };

  const like = (articleId) => {
    setLikedArticles((prevLikedArticles) => {
      const newLikedArticles = new Set(prevLikedArticles);
      newLikedArticles.add(articleId);
      return newLikedArticles;
    });
  };

  const unlike = (articleId) => {
    setLikedArticles((prevLikedArticles) => {
      const newLikedArticles = new Set(prevLikedArticles);
      newLikedArticles.delete(articleId);
      return newLikedArticles;
    });
  };

  const isArticleLiked = (articleId) => {
    return likedArticles.has(articleId);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setActivePage(pageNumber);
  };

  const backToPosts = () => {
    setShowComments(false);
    setRandomComments([]);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(articles.length / postsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container">
      {currentPosts.length > 0 && (
        <div className={`add__container ${fadeInPosts ? 'fade-in' : ''}`}>
          <Buttons onClick={openModal}>Create a new Post</Buttons>
        </div>
      )}
      <div className="main__content">
        {isPostLoading ? (
          <div>
            <Loader />
          </div>
        ) : showComments ? (
          <>
            <Comments comments={randomComments} backToPosts={backToPosts} />
          </>
        ) : currentPosts.length > 0 ? (
          <>
            <PostList
              articles={currentPosts}
              deletePost={deletePost}
              isArticleLiked={isArticleLiked}
              like={like}
              unlike={unlike}
              likedArticles={likedArticles}
              openComment={openComment}
              fadeOutPosts={!fadeInPosts}
            />
            <div className="pagination">
              {pageNumbers.map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={number === activePage ? 'active' : ''}
                >
                  {number}
                </button>
              ))}
            </div>
            {isModalOpen && <Modal onClose={closeModal} onAddPost={addNewBlog} />}
          </>
        ) : (
          <NoPostList />
        )}
      </div>
    </div>
  );
};

export default Main;
