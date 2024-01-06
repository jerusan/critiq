const getSummaryFromPerplexity = async (query: string) => {
	try {
	  const response = await fetch(`http://127.0.0.1:5000/process-chat?query=${encodeURIComponent(query)}`, {
		method: 'GET',
		headers: {
		  'Content-Type': 'application/json',
		},
	  });

	  if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	  }

	  const data = await response.json();
	  return data
	} catch (error) {
	  console.error('Error fetching data:', error);
	}
  };

chrome.runtime.onInstalled.addListener(() => {
	console.log("Critiq Extension installed");
});

chrome.runtime.onConnect.addListener((port) => {
    port.onMessage.addListener(async (request) => {
        console.log("Background script received message:", request);

        if (request.action === "queryReady") {
            console.log("Search query ready: ", request.text);

            try {
                const resp = await getSummaryFromPerplexity(request.text);
                console.log(resp);
                port.postMessage(resp.summary);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    });
});