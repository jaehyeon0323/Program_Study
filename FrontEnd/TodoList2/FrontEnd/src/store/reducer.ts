import { Action, TodoItemProps } from "./types";

export const reducer = (state: TodoItemProps[], action: Action): TodoItemProps[] => {
  switch (action.type) {
    case 'SET':
      return action.todoList;

    case 'CREATE':
      return [action.newItem, ...state];
    case 'UPDATE':
      return state.map((it) =>
        it.id === action.targetId ? { ...it, isDone: !it.isDone } : it
      );
      
    case 'DELETE':
      return state.filter((it) => it.id !== action.targetId);
    default:
      return state;
  }
};
