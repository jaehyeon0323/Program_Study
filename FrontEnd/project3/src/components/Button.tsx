import "./Button.css";

interface ButtonProps{
  text: string;
  type?: string;
  onClick?: () => void;
}


export const Button = ({ text, type, onClick }: ButtonProps) => {
  const btnType = type && ["positive", "negative"].includes(type) ? type : "default";

  return (
    <button
      className={["Button", `Button_${btnType}`].join(" ")}
      onClick={onClick}>
      {text}
    </button>
  );
}

