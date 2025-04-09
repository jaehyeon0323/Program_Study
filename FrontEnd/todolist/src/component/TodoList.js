import { TodoItem } from './TodoItem';
import './TodoList.css'

export const TodoList = () =>{
  return(
    <div className = "TodoList">
      <h4>Todo List 🌿</h4>
      <input className = "searchbar" placeholder = "검색어를 입력하세요"/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
    </div>
  );
}