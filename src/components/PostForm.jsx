import React, {useState, useRef, useMemo} from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const PostForm = ({create, props, posts}) => {	

  	const [post, setPost] = useState({title: '', body: ''});

  	function addNewPost(e) {
  		e.preventDefault()
        let cur = 0;
        const emparr = [];
        if(posts.length == 0) {
            cur = 0;
        } else {
            for(let i = 0; i < posts.length; i++){
                emparr.push(posts[i].id)
        }              
        cur = parseInt(emparr.sort((a,b) => a - b)[emparr.length - 1]) + 1;            
        }
    	const newPost ={
    		...post, id: cur.toString() 
    	}
    	create(newPost)
    	setPost({title: '', body: ''})
    }

  return (
    <form>
        <MyInput 
        value={post.title}
        type="text" 
        placeholder="Введите Заголовок"
        onChange={e => setPost({...post, title: e.target.value})}
        />
        <MyInput 
        value={post.body}
        type="text" 
        placeholder="Введите Описание"
        onChange={e => setPost({...post, body: e.target.value})}
        />      
        <MyButton onClick={addNewPost}>Create</MyButton>
      </form>
  )
}

export default PostForm;