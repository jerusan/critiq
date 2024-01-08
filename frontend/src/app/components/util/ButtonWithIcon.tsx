import React, { ReactNode } from 'react';

interface ButtonWithIconProps {
  icon: ReactNode;
  rightSideDivider?: boolean;
  style: string;
  label?: string;
  text?: string;
  onClick?: () => void;
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ icon, label, text, onClick, style, rightSideDivider }) => (
    <div className='flex items-center'>
    <button className= {style} type="button" onClick={onClick} title={label}>
      {icon}
    </button>
    {text && <span>{text} </span>}
   
    {rightSideDivider && <div className="text-2xl text-white cursor-default">|</div>}

    </div>
)

export default ButtonWithIcon;