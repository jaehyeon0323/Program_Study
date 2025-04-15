import { useEffect, useState } from 'react';
import './Editor.css';
import { emtionList, getFormattedDate } from '../util/util';
import { InputChangeEvent, TextAreaChangeEvent } from '../types/react-events';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';
import { EmotionItem } from './EmotionItem';

export const Editor = ({ initData, onSubmit }) => {
  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 3,
    content: "",
  });

  const navigate = useNavigate();

  const handleOnGoBack = ()=>{
    navigate(-1);
  }
  const handleChangeDate = (e:InputChangeEvent) => {
    setState({
      ...state,
      date: e.target.value,
    })
  }

  const handleChangeContent = (e:TextAreaChangeEvent) => {
    setState({
      ...state,
      content: e.target.value,
    })
  }

  const handleChangeEmotion = (emotionId : number) =>{
    setState({
      ...state,
      emotionId,
    })
  }
  
  const handleSubmit = () => {
    onSubmit(state);
  }
  
  useEffect(() => {
    if(initData){
      setState({
        ...initData,
        date: getFormattedDate(new Date(parseInt(initData))),
      });
    } 
  },[initData])

  return(
    <div className='Editor'>
      <div className='editor_section'>
        <div className='input_wrapper'>
          <input 
            type='date'
            value={state.date}
            onChange={handleChangeDate}
            />
        </div>
      </div>
      <div className='editor_section'>
        <div className='emotion_list_wrapper'>
        {emtionList.map((e) => (
          e.img &&
          <EmotionItem 
            key={e.id}
            {...e}
            onClick={handleChangeEmotion}
            isSelected={state.emotionId === e.id}
            />
        ))}
        </div>
      </div>
      <div className='editor_section'>
        <div>
          <textarea
            placeholder='오늘은 어떰'
            value={state.content}
            onChange={handleChangeContent}
          />
        </div>
      </div>
      <div className='editor_section bottom_section'>
        <Button text={'취소하기'} onClick={handleOnGoBack}/>
        <Button text={'작성완료'} type={'positive'} onClick={handleSubmit}/>
      </div>
    </div>
  );
};

