import requests
import os

def process_chat(query: str):

    PERPLEX_API_KEY = os.environ.get("PERPLEX_API_KEY")

    url = "https://api.perplexity.ai/chat/completions"
    
    payload = {
        "model": "pplx-70b-online",
        "messages": [
            {
                "role": "system",
                "content": "Be precise and concise."
            },
            {
                "role": "user",
                "content": query
            }
        ]
    }
    
    headers = {
        "accept": "application/json",
        "content-type": "application/json",
        "authorization": "Bearer {}".format(PERPLEX_API_KEY)
    }
   
    try:
        response = requests.post(url, json=payload, headers=headers)
        response.raise_for_status() 

        data = response.json()
        #TODO: Handle the response and error properly
        if "choices" in data and data["choices"]:
            first_choice = data["choices"][0]
            if "message" in first_choice:
                return first_choice["message"]["content"]
            else:
                return "No message content found in the first choice."

        return "No choices found in the response."

    except requests.exceptions.RequestException as err:
        print(f"Error making API request: {err}")
        raise
