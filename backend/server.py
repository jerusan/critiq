import requests
import os
import time
from openai import OpenAI

def get_opposing_view_query(query: str):
    client = OpenAI()

    ASSISTANT_ID = os.environ.get("OPENAI_CRITIQ_ASSISTANT_ID")
    thread = client.beta.threads.create()

    message = client.beta.threads.messages.create(
        thread_id=thread.id,
        role="user",
        content=query,
    )

    run = client.beta.threads.runs.create(
        thread_id=thread.id,
        assistant_id=ASSISTANT_ID,
    )

    print("Waiting for assistant's response...")
    while True:
        run = client.beta.threads.runs.retrieve(thread_id=thread.id, run_id=run.id)

        if run.status == "completed":
            print("done!")
            messages = client.beta.threads.messages.list(thread_id=thread.id)

            print("messages: ")
            for message in messages:
                assert message.content[0].type == "text"
                print({"role": message.role, "message": message.content[0].text.value})
                return message.content[0].text.value.strip('"')
        else:
            print("in progress...")
            time.sleep(5)

def get_opposing_view_summary(query: str):
    PERPLEXITY_API_KEY = os.environ.get("PERPLEXITY_API_KEY")

    url = "https://api.perplexity.ai/chat/completions"
    
    payload = {
        "model": "pplx-70b-online",
        "messages": [
            {
                "role": "system",
                "content": "Be precise and concise."
            },
            {
                "role": "assistant",
                "content": "if the user query is controversial return the response else return only \"Not a controversial topic\""
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
        "authorization": "Bearer {}".format(PERPLEXITY_API_KEY)
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
