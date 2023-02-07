import React from 'react';
import MyButton from './UI/button/MyButton';

const PostItem = (props) => {
	
  return (
        <div className="post">
           <div className="postContent">
             <strong>{props.number}. {props.post.title}</strong>
             <p>{props.post.body}</p>
           </div>
           <MyButton onClick={e => props.remove(props.post.id)} id={props.post.id}>Delete</MyButton>
        </div>
  )
}

export default PostItem;