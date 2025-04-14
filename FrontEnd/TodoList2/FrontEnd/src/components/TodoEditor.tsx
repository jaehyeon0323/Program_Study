import { useContext, useRef, useState } from 'react';
import './TodoEditor.css';
import { TodoDispatchContext } from '../store/context';
import { useTodoDispatch } from '../hooks/useTodo';
import { InputChangeEvent, KeyboardInputEvent } from '../tpyes/react-events';

export const TodoEditor = () => {
  const [content, setContent] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useContext(TodoDispatchContext);
  
  if (!dispatch) {
    throw new Error('TodoDispatchContext.Provider가 누락되었습니다.');
  }
  
  const { onCreate } = useTodoDispatch();

  const onChangeContent = (e:InputChangeEvent): void => {
    setContent(e.target.value);
  };

  const onSubmit = (): void => {
    if (!content.trim()) {
      inputRef.current?.focus();
      return;
    }
    onCreate(content);
    setContent('');
  };

  // Enter키를 누르면 onSubmit 함수 실행
  const onKeyDown = (e: KeyboardInputEvent): void => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return(
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 ✏️</h4>
      <div className = "editor_wrapper">
        <input 
          ref={inputRef}
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          placeholder = "새로운 Todo ..."
          />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
}