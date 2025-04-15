import './DiaryList.css';
import { Button } from "./Button";
import { useEffect, useState } from 'react';
import { SelectChangeEvent } from '../types/react-events';
import { useNavigate } from 'react-router-dom';

export const DiaryList = ({data}) => {
  const [sortType, setSortType] = useState("latest");
  const [sortedData, setSortedData] = useState([]);

  const navigate = useNavigate();

  const onClickNew = () =>{
    navigate("/new");
  }
  
  const onChangeSortType = (e : SelectChangeEvent) => {
    setSortType(e.target.value);
  }
  const sortOptionList = [
    { value: "latest", name:"최신순" },
    { value: "oldest", name:"오래된 순" }
  ]

  useEffect(() => {
    const compare = (a, b) => {
      if (sortType ==="latest"){
      return Number(b.date) - Number(a.date);
      } else{
        return Number(a.date) - Number(b.date);
      }
      };
      const copyList = JSON.parse(JSON.stringify(data));
      copyList.sort(compare);
      setSortedData(copyList);
    },[sortType,data])
  
  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <select value={sortType} onChange={onChangeSortType}>
            {sortOptionList.map((e, idx)=>(
              <option key={idx} value={e.value}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
        <div className="right_col"> 
          <Button type={"positive"} text = "새 일기 쓰기" onClick={onClickNew}/>
        </div>
      </div>
    </div>
  );
}