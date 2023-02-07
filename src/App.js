import React, {useState, useRef, useMemo} from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MySelect from './components/UI/select/MySelect';
import MyModal from './components/UI/mymodal/MyModal';
import './styles/App.css'

function App() {
    const [posts, setPosts] = useState([
      {id: "1", title: "JavaScript 1", body: "description about js"},
      {id: "2", title: "JavaScript 2", body: "description about js"},
      {id: "3", title: "JavaScript 3", body: "description about js"},
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})

    const [modal, setModal] = useState(false)

    const sortedPosts = useMemo(() => {
      if (filter.sort) {
        return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
      } else {
        return posts;
      }
    }, [filter.sort,posts])

    const sortedAndSearchedPosts = useMemo(() => {
      return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [sortedPosts,filter.query]) 

    function createPost(newPost) {
      setPosts([...posts, newPost])
      setModal(false)
    }

    function removePost(id) {
      setPosts(posts.filter(elem => elem.id !== id))
    }

    return (
      <div className="App">
        <MyButton style={{marginTop: '30px'}} onClick={e => setModal(true)}>Create post</MyButton>
        <MyModal visible={modal} setVisible={setModal}><PostForm create={createPost} posts={posts}/></MyModal>      
        <hr style={{margin: '15px 0px'}}/>
        <PostFilter 
        filter={filter}
        setFilter={setFilter}
        />
        <PostList remove={removePost} posts={sortedAndSearchedPosts}/>         
      </div>
      );
  }

  export default App;