import React from "react";
import { DiaryItem } from "../types/type";

export type DiaryDispatch = {
  onCreate: (item: Omit<DiaryItem, 'id'>) => void;
  onUpdate: (item: DiaryItem) => void;
  onDelete: (id: string) => void;
};

export const DiaryStateContext = React.createContext<DiaryItem [] | null> (null);
export const DiaryDispatchContext = React.createContext<DiaryDispatch | null> (null);