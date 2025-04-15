import { useContext, useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { DiaryStateContext } from "../stores/context";
import { DiaryItem } from "../types/type";
import { getMonthRangeByData } from "../util/util";
import { DiaryList } from "../components/DiaryList";

export const Home = () => { 

  const [pivotDate, setPivotDate] = useState(new Date());
  const data = useContext(DiaryStateContext);
  const [filteredData, setFilteredData] = useState<DiaryItem[]>([]);

  const headerTitle = `${pivotDate.getFullYear()} 년 ${pivotDate.getMonth() +1 } 월`
  
  const onIncreaseMonth = () =>{
    setPivotDate(new Date(pivotDate.getFullYear(),pivotDate.getMonth() + 1));
  }

  const onDecreaseMonth = () =>{
    setPivotDate(new Date(pivotDate.getFullYear(),pivotDate.getMonth() - 1));
  }

  useEffect(()=>{
    if(data && data.length >= 1){
      const {beginTimeStamp, endTimeStamp} =getMonthRangeByData(pivotDate);
      setFilteredData(
        data.filter(
          (e) => beginTimeStamp <= e.date && e.date <= endTimeStamp
        )
      );
    } else{
      setFilteredData([]);
    }
  },[data, pivotDate]);

  return (
    <div>
      <Header
        title = {headerTitle}
        leftChild = {<Button text = {"<"} onClick={onDecreaseMonth}/>}
        rightChild = {<Button text = {">"} onClick={onIncreaseMonth}/>}
      />
      <DiaryList data = {filteredData} />
    </div>
  );
};