import './TodoItem.css';
import { TodoItemProps } from '../store/types';
import { useTodoDispatch } from '../hooks/useTodo';
import React from 'react';

export const TodoItem = React.memo(({id, isDone, content, createdDate}: TodoItemProps) => {
  const {onUpdate, onDelete} = useTodoDispatch();
  const onChangeCheckbox = (): void =>{
    onUpdate(id);
  }

  const onClickDelete = (): void => {
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
})