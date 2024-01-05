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
        <div className="bg-black rounded-md border border-bg-zinc-500">
            <div className="bg-zinc-700 border border-bg-zinc-500 rounded-md p-2">
                <DisplayTextWithIcon icon={<SiGooglebigquery />} text={query} />
            </div>
            <div className="text-base break-words p-2">{summary}</div>

            <ButtonWithIcon icon={<RxOpenInNewWindow />} text="Delve into Counterpoints" onClick={() => window.open(`https://www.perplexity.ai/search?q=${query}`, '_blank')} />
        </div>
    );
};

export default Body;