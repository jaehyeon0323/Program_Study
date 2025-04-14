import { Button } from "../components/Button";
import { Editor } from "../components/Editor";
import { Header } from "../components/Header";

export const Home = () => { 

  return (
    <div>
      <Header title="Home"
        leftChild = {
        <Button 
          text="긍정 버튼" 
          type="positive" 
          onClick={
            () =>{
              alert("positive button");
            }
          }/>
        }
        rightChild = {
        <Button 
          text="부정 버튼" 
          type="negative" 
          onClick={
            () =>{
              alert("negative button");
            }
          }/>
        }/>
      <p>This is the home page.</p>
      <Editor initData={""} onSubmit={()=>{alert('동작?')}}/>
    </div>
  );
};