import React, { useEffect } from "react";
import { RxOpenInNewWindow } from "react-icons/rx";
import ButtonWithIcon from './util/ButtonWithIcon';
import { SiGooglebigquery } from "react-icons/si";
import DisplayTextWithIcon from "./util/DisplayTextWithIcon";

interface SearchProps {
    query: string;
    summary: string;
}

const Body: React.FC<SearchProps> = ({ query, summary }) => {

    return (
        <div className="bg-black bg-accent rounded-md">
            <div className="bg-white text-black rounded-md p-2">
                <DisplayTextWithIcon icon={<SiGooglebigquery />} text={query} />
            </div>
            <div className="text-base font-serif break-words p-2 whitespace-pre-line">{summary}</div>

            <div className="flex justify-end">
                <ButtonWithIcon icon={<RxOpenInNewWindow />} text="Delve into Counterpoints" onClick={() => window.open(`https://www.perplexity.ai/search?q=${query}`, '_blank')} />
            </div>
        </div>
    );
};

export default Body;


