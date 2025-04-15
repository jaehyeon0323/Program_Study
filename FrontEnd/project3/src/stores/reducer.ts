import { DiaryItem, Action } from "../types/type";

export const reducer = (state: DiaryItem[], action: Action): DiaryItem[] => {
  switch (action.type) {
    case 'INIT' : {
      return action.data;
    }
    
    case 'CREATE':{
      return [action.data, ...state];
    }

    case 'UPDATE':{
      return state.map((e)=> 
      String(e.id) === String(action.data.id) ? {...action.data} : e);
    }

    case 'DELETE':{
      return state.filter((e) => String(e.id) !== String(action.id));
    }

    
    default:
      return state;
  }
};
