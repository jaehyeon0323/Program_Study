import { useContext, useRef, useState } from 'react';
import './TodoEditor.css';
import { TodoDispatchContext } from '../App';

export const TodoEditor = () => {
  const [content, setContent] = useState("");
  const inputRef = useRef();
  const { onCreate } = useContext(TodoDispatchContext);

  const onChangContent = (e) =>{
    setContent(e.target.value);
  }

  const onSubmit = () => {
    if(!content){
      inputRef.current.focus();
      return;
    }
    onCreate (content);
    setContent("");
  }

  //Enter 눌렀을 때 동작, onKeyDown 매개변수, keyCode === 13 === Enter
  const onKeyDown = (e) =>{
    if (e.keyCode === 13)
      onSubmit();
  }

  return(
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 ✏️</h4>
      <div className = "editor_wrapper">
        <input 
          ref={inputRef}
          value={content}
          onChange={onChangContent}
          onKeyDown={onKeyDown}
          placeholder = "새로운 Todo ..."
          />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
}