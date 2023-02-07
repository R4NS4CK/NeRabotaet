import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';


const PostFilter = ({filter,setFilter}) => {
  return (
    <div>
          <MyInput 
          value={filter.query}
          placeholder="Поиск..."
          onChange={e => setFilter({...filter, query: e.target.value})}
          />
          <MySelect 
          value={filter.sort}
          defaultValue="Сортировка по"
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
            {value: 'id', name: 'По id'}
            ]}
          />
        </div>
  )
}

export default PostFilter;