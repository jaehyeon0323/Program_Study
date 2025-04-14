import './App.css';
import { Header } from './components/Header';
import { TodoEditor } from './components/TodoEditor';
import { TodoList } from './components/TodoList';
import { useCallback, useEffect, useMemo, useReducer } from 'react';
import { reducer } from './store/reducer';
import { TodoStateContext, TodoDispatchContext } from './store/context'
import { TodoDispatches } from './store/types';
import { createTodoList, deleteTodoList, getTodoList, updateTodoItem } from './api/TodoApi';


function App() {
  const [todo, dispatch] = useReducer(reducer,[]);


  useEffect(() => {
    getTodoList()
      .then((list) => {
        dispatch({type: 'SET', todoList: list.map(item => ({
            ...item, createdDate: new Date(item.createdDate).getTime(),
          }))
        });
      })
      .catch(console.error);
  }, []);

  const onCreate = (content: string): void => {
    const dto = {
      content,
      isDone: false,
      createdDate: new Date().toISOString(), // 또는 서버에서 처리하도록 생략해도 됨
    };
  
    createTodoList(dto)
      .then((newItem) => {
        dispatch({
          type: 'CREATE',
          newItem: {
            ...newItem,
            createdDate: new Date(newItem.createdDate).getTime(), // 서버에서 온 string을 number로
          },
        });
      })
      .catch((err) => {
        console.error('생성 실패', err);
        alert('추가 실패');
      });
  };

  const onUpdate = useCallback((targetId: number): void => {
    const target = todo.find(t => t.id === targetId);
    if (!target) return;
  
    const updatedItem = {
      id: target.id,
      content: target.content,
      isDone: !target.isDone,
      createdDate: new Date(target.createdDate).toISOString(),
    };
  
    updateTodoItem(targetId, updatedItem)
      .then(() => {
        dispatch({ type: 'UPDATE', targetId });
      })
      .catch((err) => {
        console.error('업데이트 실패', err);
        alert('업데이트 실패');
      });
  }, [todo]);
  
  const onDelete = useCallback((targetId: number): void => {
    const confirmDelete = window.confirm('정말 삭제하시겠습니까?');
    if (!confirmDelete) return;
  
    deleteTodoList(targetId)
      .then(() => {
        dispatch({ type: 'DELETE', targetId });
        alert('삭제 성공');
      })
      .catch((err) => {
        console.error('삭제 실패', err);
        alert('삭제 실패');
      });
  }, []);
  
  
  const memoizedDispatches: TodoDispatches = useMemo(
    () => ({ onCreate, onUpdate, onDelete }),[]);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todo}>
        <TodoDispatchContext.Provider value={memoizedDispatches}>
          <TodoEditor />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
