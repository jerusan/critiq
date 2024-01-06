import React, { ReactNode } from 'react';
import { IconContext } from "react-icons";

interface DisplayTextWithIconProps {
  icon?: ReactNode;
  iconUrl?: string;
  text?: string;
}

const DisplayTextWithIcon: React.FC<DisplayTextWithIconProps> = ({ iconUrl, icon, text }) => (
  <div className="flex items-center">
    {iconUrl && <img src={chrome.runtime.getURL(iconUrl)} alt="Icon" width="26" height="26" className="bg-gray-300 border border-black rounded-3xl" />}
    {icon && <IconContext.Provider value={{ size: '22' }}>
      {icon}
    </IconContext.Provider>}
    {text && <div className="mx-1" />}
    {text && <div className="text-center font-semibold text-xl">{text}</div>}
  </div>
)

export default DisplayTextWithIcon; 
