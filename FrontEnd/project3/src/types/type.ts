
export interface DiaryItem {
  id: string | number;
  date: number;        // timestamp로 처리
  content: string;
  emotionId: number;
}


export type Action =
  | { type: 'CREATE'; data: DiaryItem }
  | { type: 'UPDATE'; data: DiaryItem }
  | { type: 'DELETE'; id: string }
  | { type: 'INIT'; data: DiaryItem[] };
