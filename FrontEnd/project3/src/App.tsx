import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { New } from './pages/New';
import { Diary } from './pages/Diary';
import { Edit } from './pages/Edit';
import { useEffect, useReducer, useRef, useState } from 'react';
import { reducer } from './stores/reducer';
import { DiaryItem } from './types/type';
import { MockData } from './stores/mock';
import { DiaryDispatchContext, DiaryStateContext } from './stores/context';

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const idRef = useRef(0);

  useEffect(() => {
    dispatch({
      type: "INIT",
      data: MockData,
    });
    setIsDataLoaded(true);
  },[]);

  const onCreate = ({date, content, emotionId} : Omit<DiaryItem, 'id'>) => {
    dispatch({
      type: "CREATE",
      data:{
        id: idRef.current,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
    idRef.current += 1;
  }

  const onUpdate = ({id, date , content, emotionId} : DiaryItem) => {
    dispatch({
      type: "UPDATE",
      data:{
        id,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
  }

  const onDelete = (id : string) => {
    dispatch({
      type: "DELETE",
      id,
    });
  }

  if(!isDataLoaded){
    return <div>데이터를 불러오는 중입니다.</div>
  } else{
    return(
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider 
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}>
        <div className='App'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/new" element={<New/>} />
            <Route path="/diary" element={<Diary/>} />
            <Route path="/diary/:id" element={<Diary/>} />
            <Route path="/edit/:id" element={<Edit/>} />
          </Routes>
        </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
    );
  }
}

export default App
