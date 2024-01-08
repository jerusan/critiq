
import React, { useEffect } from "react";

import Header from "./Header";
import Body from "./Body";

const CritiqExtension: React.FC = () => {
    const [summary, setSummary] = React.useState<string>("");
    const [searchQuery, setSearchQuery] = React.useState<string>("End the google search query with '?' to see the Critiq summary.");
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
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
                setIsLoading(true);      
                const port = chrome.runtime.connect({ name: 'content-script' });
                
                port.postMessage({
                    action: 'queryReady',
                    text: googleSearchQuery,
                });

                port.onMessage.addListener((perplexityResponse) => {
                    console.log('Got response to content script query');
                    console.log(perplexityResponse);
                    setIsLoading(false);
                    if (!perplexityResponse) {
                      console.error('Invalid response received');
                      return;
                    }
                  
                    if (perplexityResponse.error) {
                      console.error(`Error: ${perplexityResponse.error}`);
                      return;
                    }

                    if (perplexityResponse.isControversial) {
                        setSummary(perplexityResponse.summary);
                        setSearchQuery(perplexityResponse.controversialQuery);
                    } else {
                        setSearchQuery("Not a controversial topic");
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
            <Body query={searchQuery} summary={summary} isLoading={isLoading} />
        </div>
    </>;
}

export default CritiqExtension;