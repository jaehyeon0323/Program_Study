import { useParams } from "react-router-dom";

export const Diary = () => {

  const {id} = useParams<{ id: string }>();
  console.log(id);

  return (
    <div>
      <h1>Diary</h1>
      <h2>{id}번 페이지</h2>
      <p>This is the diary page.</p>
    </div>
  );
}