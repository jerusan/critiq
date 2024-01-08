import React from "react";
import '../../style.css';
import ButtonWithIcon from "./util/ButtonWithIcon";
import { MdOutlineManageSearch } from "react-icons/md";
import { RxOpenInNewWindow } from "react-icons/rx";

interface SearchProps {
    query: string;
    summary: string;
}

const Body: React.FC<SearchProps> = ({ query, summary }) => {

    return (
        <>
             <div>
              <div className="bg-query-background flex text-black text-xl px-4 py-2 rounded-xl">
                  <ButtonWithIcon icon={<MdOutlineManageSearch />} style="flex text-3xl text-black text-semibold cursor-default" text={query} />            </div>
                <div className="pb-1"></div>
                <p className="bg-summary-background bg-accent rounded-md text-white text-semibold px-6 py-8 whitespace-pre-line h-full">{summary}</p>
              </div>
              <div className="flex justify-end pt-2">
                <div  >
                  <button type="button" className="bg-button-background text-white hover:opacity-80 font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap flex text-base px-md font-medium h-8" onClick={() => window.open(`https://www.perplexity.ai/search?q=${query}`, '_blank')} >
                  <RxOpenInNewWindow />
                    <div className="flex items-center leading-none justify-center w-full gap-xs">
                      <div className="text-align-center relative">Delve into Counterpoints</div>
                    </div>
                    
                  </button>
                </div>
              </div>
        </>

    );
};

export default Body;


