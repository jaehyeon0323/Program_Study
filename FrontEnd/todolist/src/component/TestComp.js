import { useReducer } from "react";

export const reducer = (state, action) =>{
  switch (action.type){
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    case "INIT":
      return 0;
    default:
      return state;
  }
}

export const TestComp = () =>{
  const [count, dispatch] =useReducer(reducer, 0);


  return(
    <div>
      <h4>테스트 컴포넌트</h4>
      <div>
        <strong>{count}</strong>
      </div>
      <button onClick={()=> dispatch({ type: "INCREASE", data: 1})}>+</button>
      <button onClick={()=> dispatch({ type: "DECREASE", data: 1})}>-</button>
      <button onClick={()=> dispatch({ type: "INIT"})}>0으로 초기화</button>
    </div>
  );
}