import React from "react";

import ButtonWithIcon from "./util/ButtonWithIcon";
import '../../style.css';

import { HiHandThumbUp, HiHandThumbDown } from "react-icons/hi2";
import { MdOutlineSettings } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa";

const Header: React.FC = () => {
    return (
        <div className="flex justify-between text-white">
        <div className="flex items-center">
          <img className="border-2 border-gray-200 bg-white rounded-full p-1" src={chrome.runtime.getURL("/assets/logo-arrow.png")} alt="Critiq Logo" width="32" height="32" />
          <div className="text-2xl font-bold p-2">Critiq</div>
        </div>
        <div className="flex">
          <ButtonWithIcon icon={<FaRegCopy />} style="text-xl px-2 cursor-pointer" rightSideDivider={true} label="Copy"/>
          <ButtonWithIcon icon={<HiHandThumbUp />} style="text-xl px-2 cursor-pointer" rightSideDivider={true} label="Vote up"/>
          <ButtonWithIcon icon={<HiHandThumbDown />} style="text-xl px-2 cursor-pointer rotate-360" rightSideDivider={true} label="Vote down" />
          <ButtonWithIcon icon={<MdOutlineSettings />} style="text-xl px-2 cursor-pointer" label="Settings"/>
        </div>
      </div>
    );
};

export default Header;