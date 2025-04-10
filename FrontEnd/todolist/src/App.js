import './App.css';
import { Header } from './component/Header';
import { TodoEditor } from './component/TodoEditor';
import { TodoList } from './component/TodoList';
import { useRef, useState } from "react";

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getDate(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getDate(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습 하기",
    createdDate: new Date().getDate(),
  },
]

function App() {
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3);

  const onCeate = (content)=>{
    const newItem = {
      id: idRef.current,
      content,
      isDone : false,
      createdDate: new Date().getDate(),
    };
    setTodo([newItem, ...todo]);
    idRef.current +=1;
  }

  const onUpdate = (targetId) =>{
    setTodo(todo.map((it) =>
      it.id === targetId ? {...it, isDone: !it.isDone} : it
    ))}

  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.id !==targetId))
  }

  return (
    <div className="App">
      <Header />
      <TodoEditor onCeate = {onCeate} />
      <TodoList todo = {todo} onUpdate = {onUpdate} onDelete = {onDelete}/>
    </div>
  );
}

export default App;
