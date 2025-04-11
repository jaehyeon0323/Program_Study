import './App.css';
import Header from './component/Header';
// import { TestComp } from './component/TestComp';
import { TodoEditor } from './component/TodoEditor';
import { TodoList } from './component/TodoList';
import React, { useCallback, useMemo, useReducer, useRef } from "react";

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

export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

export const reducer = (state, action) => {
  switch(action.type){
    case "CREATE": {
      return [action.newItem,...state];
    }
    case "UPDATE": {
      return state.map((it) => 
        it.id === action.targetId
        ?{
          ...it,
          isDone:!it.isDone,
        }
        : it
    );
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state;
}
}


function App() {
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);

  const onCreate = (content)=>{
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createdDate: new Date().getTime(),
      },
    })
    idRef.current +=1;
  }

  const onUpdate = useCallback((targetId) =>{
    dispatch({
      type: "UPDATE",
      targetId,
    });
  },[]);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    })
  },[]);

  const memoizedDipatches = useMemo(() => {
    return{onCreate, onUpdate, onDelete}
  },[]);

  return (
    <div className="App">
      {/* <TestComp /> */}
      <Header />
      <TodoStateContext.Provider value={todo}>
        <TodoDispatchContext.Provider value={memoizedDipatches}>
          <TodoEditor/>
          <TodoList/>
        </TodoDispatchContext.Provider>      
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
