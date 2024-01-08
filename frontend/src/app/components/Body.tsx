import React from "react";
import '../../style.css';
import ButtonWithIcon from "./util/ButtonWithIcon";
import { MdOutlineManageSearch } from "react-icons/md";
import { RxOpenInNewWindow } from "react-icons/rx";

interface SearchProps {
  query: string;
  summary: string;
  isLoading: boolean;
}

const Loader = () => {
  return (
    <div className="flex space-x-8">
      <ButtonWithIcon icon={<MdOutlineManageSearch />} style="flex" />
      <div>
        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    </div>
  );
}

const Body: React.FC<SearchProps> = ({ query, summary, isLoading }) => {

  return (
    <>
      <div>
        <div className="bg-query-background flex text-black text-xl px-4 py-2 rounded-xl">
          {isLoading ? <Loader /> : <ButtonWithIcon icon={<MdOutlineManageSearch />} style="flex text-3xl text-black text-semibold cursor-default" text={query} />}
        </div>
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


