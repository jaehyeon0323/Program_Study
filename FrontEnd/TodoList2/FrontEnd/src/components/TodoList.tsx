import { TodoItem }  from './TodoItem';
import { useMemo, useState} from 'react';
import './TodoList.css'
import { useTodoState } from '../hooks/useTodo';
import { InputChangeEvent } from '../types/react-events';

export const TodoList = () =>{
  const  todo  = useTodoState();
  const [search, setSearch] = useState<string>('');
  
  const onChangeSearch = (e:InputChangeEvent): void =>{
    setSearch(e.target.value);
  }

  const getSearchResult = () =>{
    if (!todo) return [];

    return search.trim() === ""
    ? todo
    : todo.filter((it)=>
      it.content.toLowerCase().includes(search.toLowerCase()));
  }
  
  const analyzeTodo = useMemo(() => {
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]);
  
  const {totalCount, doneCount, notDoneCount} = analyzeTodo;

  return(
    <div className = "TodoList">
      <h4>Todo List 🌿</h4>
      <div>
        <div>총 개수:{totalCount}</div>
        <div>완료된 할 일:{doneCount}</div>
        <div>아직 완료하지 못한 할 일일:{notDoneCount}</div>
      </div>
      <input 
        value={search}
        onChange={onChangeSearch}
        className = "searchbar" 
        placeholder = "검색어를 입력하세요"/>
      <div className = "list_wrapper">
        {getSearchResult().map((it) => (
            <TodoItem key = {it.id} {...it}/>
          ))}
      </div>
    </div>
  );
};
