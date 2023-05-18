import React from 'react';
import './Comments.css'

const Comments = ({ comments, backToPosts }) => {


    return (
        <div className="container__coments">
            {comments.map((comment) => {
                return (
                    <div key={comment.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">Text: {comment.body}</h5>
                            <p className="card-text">Email: {comment.email}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Who Posted: {comment.name}</small>
                        </div>
                    </div>

                );
            })}
            <button onClick={backToPosts}>Back</button>
        </div>
    );
};

export default Comments;
