import React from 'react';
import PostItem from './PostItem';

const PostList = ({posts, remove}) => {

  if(posts.length == 0){
    return <h1 style={{textAlign: 'center'}}>
      There is no posts...
    </h1>
  }

  return (
    <div className="postList">
 		<h1 style={{textAlign: "center"}}>Список постов</h1>
 		{posts.map((post, index) => 
 			<PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
 		)}
    </div>
  )
}

export default PostList;