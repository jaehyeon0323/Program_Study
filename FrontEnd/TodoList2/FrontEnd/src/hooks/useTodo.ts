import { useContext } from 'react';
import { TodoStateContext, TodoDispatchContext } from '../store/context';
import { TodoDispatches } from '../store/types';
import { TodoItemProps } from '../store/types';

export const useTodoState = (): TodoItemProps[] => {
  const context = useContext(TodoStateContext);
  if (!context) throw new Error('TodoStateContext.Provider 누락!');
  return context;
};

export const useTodoDispatch = (): TodoDispatches => {
  const context = useContext(TodoDispatchContext);
  if (!context) throw new Error('TodoDispatchContext.Provider 누락!');
  return context;
};
