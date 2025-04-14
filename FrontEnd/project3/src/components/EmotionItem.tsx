import './EmotionItem.css';

export interface EmotionItemProps {
  id: number;
  name: string;
  img: string;
  onClick: (emotionId: number) => void;
  isSelected: boolean;
}

export const EmotionItem = ({ id, img, name, onClick, isSelected}: EmotionItemProps) => {
  
  const handleOnClick = () =>{
    onClick(id);
  }
  return(
    <div 
      onClick={handleOnClick}
      className = {["EmotionItem", isSelected ? `EmotionItem_on_${id}` : `EmotionItem_off`,].join(" ")}>
      <img alt={`emotion${id}`} src={img}/>
      <span>{name}</span>
    </div>
  );
};