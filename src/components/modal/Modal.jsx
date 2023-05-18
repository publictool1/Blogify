import React, { useState } from 'react';
import './Modal.css';
import Buttons from '../UI/buttons/Buttons';

const Modal = (props) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeContent = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddPost(title, body);
    setTitle('');
    setBody('');
    props.onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Добавить статью</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Заголовок:</label>
          <input
            type="text"
            id="title"
            placeholder="Title of your history"
            value={title}
            onChange={changeTitle}
          />
          <label htmlFor="content">Содержание:</label>
          <textarea
            id="content"
            placeholder="Write your history"
            value={body}
            onChange={changeContent}
          ></textarea>
          <div className="contant__buttons">
            <Buttons type="submit">Добавить</Buttons>
            <Buttons onClick={props.onClose} id="close">
              Отмена
            </Buttons>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
