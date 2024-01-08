import React, { useEffect } from "react";

import Header from "./Header";
import Body from "./Body";

const CritiqExtension: React.FC = () => {
    const [summary, setSummary] = React.useState<string>("");
    const [searchQuery, setSearchQuery] = React.useState<string>("End the google search query with '?' to see the Critiq summary.");

    useEffect(() => {
        handleTextarea();
    }, []);

    const handleTextarea = async () => {
        const googleSearchFieldElement = document.getElementById(
            "APjFqb"
        ) as HTMLTextAreaElement | null;

        if (googleSearchFieldElement) {
            const googleSearchQuery: string = googleSearchFieldElement.value;

            if (googleSearchQuery.endsWith("?")) {
                setSearchQuery(googleSearchQuery);

                const port = chrome.runtime.connect({ name: 'content-script' });
                port.postMessage({
                    action: 'queryReady',
                    text: googleSearchQuery,
                });

                port.onMessage.addListener((perplexityResponse) => {
                    console.log('Got response to content script query');
                    console.log(perplexityResponse);
                    if (perplexityResponse && perplexityResponse.summary !== "") {
                        setSummary(perplexityResponse.summary);
                        setSearchQuery(perplexityResponse.controversialQuery);
                    }
                });
            } else {
                console.log("Google Search Field element not found");
            }
        }
    };

    return <>
        <div className="bg-main-background max-w-md mx-auto rounded-md shadow-md p-2">
            <Header />
            <Body query={searchQuery} summary={summary} />
        </div>
    </>;
}

export default CritiqExtension;