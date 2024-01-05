const makeChatRequest = (text: string) => {
	// TODO: Call perplexity API
	let textContent = 'Medicine 3.0 is an emerging philosophy in medicine that shifts the model of care from a focus on disease treatment to prevention, with a longevity lens. It focuses on the individual and treats the body as a whole, rather than a collection of organs and systems. Medicine 3.0 gets people to an optimal state using testing, technology, and focusing on root causes. It is highly personalized and aims to figure out the root cause of chronic conditions. Medicine 3.0 doctors prescribe lifestyle changes, such as boosting exercise levels, focusing on upping micronutrients, and other alternative tests and emerging technology to offer patients a glimpse at how to take charge of their own health. Medicine 3.0 envisions a future where healthcare goes beyond treating diseases to promoting longevity through evidence-informed guidelines and absurdly early preventative measures for chronic conditions. Medicine 3.0 is still in transition, and the adoption of these practices might be slowed by concerns of health equity and limited access to unprocessed, nutrient-rich foods.';
	
	if(text == 'Is ozempic bad?')
		textContent = "The adoption of the anti-obesity drug Ozempic in 2023 has seen a significant increase. According to electronic health records, 1.7% of people in the U.S. have been prescribed either Wegovy or Ozempic this year. The drug's rising popularity has raised concerns for food companies, as it has the potential to significantly impact food consumption patterns. However, the widespread adoption of such weight loss drugs faces challenges, including concerns about side effects, the high cost of the medication, and the need for more comprehensive studies. Despite its potential, the adoption of Ozempic and other anti-obesity drugs is not without obstacles, and their impact on public health and various industries remains a topic of ongoing discussion and evaluation.";
	
	return textContent;
}

chrome.runtime.onInstalled.addListener(() => {
	console.log("Critiq Extension installed");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	console.log("Background script received message:", request);

	if (request.action === "queryReady") {
		console.log("Search query ready!");
		console.log(request.text);
		const resp = makeChatRequest(request.text);
		sendResponse(resp);
	}
});
