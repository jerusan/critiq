import React, { ReactNode } from 'react';

interface ButtonWithIconProps {
  icon: ReactNode;
  label?: string;
  text?: string;
  onClick?: () => void;
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ icon, label, text, onClick }) => (

    <button
      type="button"
      title={label}
      className="md:hover:bg-offsetPlus p-1 border border-white bg-accent rounded-md bg-gray-600"
      onClick={onClick}
    >
      <div className="flex items-center">
        {icon}
        <div className="mx-1"> </div>
        {text && <div className="text-align-center">{text}</div>}
      </div>
  
    </button>
  
)

export default ButtonWithIcon;