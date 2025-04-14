import { ReactNode } from 'react';
import './Header.css'

interface HeaderProps{
  title: string;
  leftChild?: ReactNode;
  rightChild?: ReactNode;
}

// type ReactNode =
//   | ReactElement
//   | string
//   | number
//   | boolean
//   | null
//   | undefined
//   | ReactNode[];

export const Header = ({title, leftChild, rightChild}: HeaderProps) =>{
  return(
    <div className="Header">
      <div className="header_left">{leftChild}</div>
      <div className="header_title">{title}</div>
      <div className="header_right">{rightChild}</div>
    </div>
  );
};