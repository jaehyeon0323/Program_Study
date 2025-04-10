import React, { useContext } from 'react';
import './TodoItem.css';
import { TodoContext } from '../App';

const TodoItem = ({id, content, isDone, createdDate}) =>{
  console.log(`${id} 업데이트`)
  const {onUpdate, onDelete} = useContext(TodoContext);
  const onChangeCheckbox = () =>{
    onUpdate(id);
  }

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <div className = "TodoItem">
      <div className = "heckbox_col">
        <input checked = {isDone} type = "checkbox" onChange={onChangeCheckbox}/>
      </div>
      <div className = "title_col">{content}</div>
      <div className = "date_col">{new Date(createdDate).toLocaleString()}</div>
      <div className = "btn_col">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
}

export default React.memo(TodoItem);