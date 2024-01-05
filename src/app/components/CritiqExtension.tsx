import React, { useEffect } from "react";

import Header from "./Header";
import Body from "./Body";

const CritiqExtension: React.FC = () => {

    const [summary, setSummary] = React.useState<string>(
        "End the google search query with '?' to see the Critiq summary."
    );
    const [searchQuery, setSearchQuery] = React.useState<string>("");
    const [isControversial, setIsControversial] = React.useState<boolean>(false);

    useEffect(() => {
        handleTextarea();
    }, []);

    const handleTextarea = () => {
        const googleSearchFieldElement = document.getElementById(
            "APjFqb"
        ) as HTMLTextAreaElement | null;

        if (googleSearchFieldElement) {
            const googleSearchQuery: string = googleSearchFieldElement.value;

            if (googleSearchQuery.length > 0 && googleSearchQuery.endsWith("?")) {
                let showDialog = checkForControversialTopics(googleSearchQuery);

                if (showDialog) {
                    setSearchQuery(googleSearchQuery);
                    chrome.runtime.sendMessage(
                        {
                            action: "queryReady",
                            text: googleSearchQuery,
                        },
                        handleResponse
                    );
                } else {
                    console.log("Not showing content for non-controversial topics");
                }
            } else {
                console.log("Google Search Field element not found");
            }
        }
    };

    const checkForControversialTopics = (searchTopic: string): boolean => {
        // TODO: use LLM model to determine whether topic is controversial
        const isControversy = searchTopic.length > 4;
        setIsControversial(isControversy);
        return isControversy;
    };

    const handleResponse = (perplexityResponse: any) => {
        console.log("Summary from Perplexity API: ", perplexityResponse);
        setSummary(perplexityResponse);
    };

    return <>
        {isControversial &&
            <div className="max-w-md mx-auto  bg-[#0d1117] rounded-md shadow-md p-6 text-white">
                <Header />
                <Body query={searchQuery} summary={summary} />
            </div >
        }
    </>;
}

export default CritiqExtension;