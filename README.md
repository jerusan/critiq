# Critiq Chrome Extension

Critiq is a Chrome Extension designed to provide users with opposing views on controversial topics when performing Google searches. The extension leverages the  OpenAI assistant to get the controversial query and Perplexity API to generate summaries of diverse perspectives on a given query. This README file guides you through the setup and running of both the backend server and the frontend extension.

## Features

- Automatically detects when you search a controversial topic on Google and appends a sidebar with an opposing perspective summary.
- Fetches opposing perspective summaries from the Perplexity AI via a backend API.
- Lets you easily open the full Perplexity search results for the opposing perspective in a new tab.
- Clean and simple UI that integrates seamlessly into Google search results page.

## Usage

1. Install the Critiq chrome extension.

2. Do a Google search on any controversial topic and end the query with a "?" (e.g. "is climate change real?").

3. Critiq will detect the controversial query and fetch an opposing perspective summary from - Perplexity. This will show up in a sidebar next to the Google results.

4. Click the "Delve into Counterpoints" button to open the full Perplexity search results for the opposing perspective in a new tab.

5. Upvote or downvote the summary quality and leave feedback to improve Critiq!

## Implementation

Critiq uses the following stack:

- Frontend: NextJs, TypeScript, Tailwind CSS
- Backend: Python, Flask
- Deployment: Makefile

It has the following components:

- Content script injected on Google search results page to detect controversial queries and display UI.

- Background script that handles messaging with content script and backend API.

- Backend API server to call Perplexity and OpenAI APIs. 

- React components for sidebar UI.

The content script detects controversial queries, sends them to the backend via the background script, and displays the summary fetched from Perplexity.


## Prerequisites

Make sure you have the following installed before proceeding:

- [Node.js](https://nodejs.org/) (for frontend)
- [Python](https://www.python.org/) (for backend)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Setup Instructions

### Backend

1. Navigate to the `backend` directory:

    ```bash
    cd backend
    ```

2. Install the Python dependencies:

    ```bash
    pip install --no-cache-dir -r requirements.txt
    ```

3. Create a virtual environment (optional but recommended):

    ```bash
    python -m venv venv
    ```

4. Activate the virtual environment:

    - **Linux/Mac:**
    
        ```bash
        source venv/bin/activate
        ```
    
    - **Windows:**
    
        ```bash
        .\venv\Scripts\activate
        ```

5. Create a `.env` file in the `backend` directory with the following content:

    ```env
    PERPLEXITY_API_KEY=<YOUR_PERPLEXITY_API_KEY>
    OPENAI_API_KEY=<YOUR_OPENAI_API_KEY>
    OPENAI_CRITIQ_ASSISTANT_ID=<YOUR_OPENAI_CRITIQ_ASSISTANT_ID>
    ```

6. Run the Flask server:

    ```bash
    flask run
    ```

### Frontend

1. Navigate to the `frontend` directory:

    ```bash
    cd frontend
    ```

2. Build and export the frontend:

    ```bash
    npm run export
    ```

## Load Extension in Chrome

1. Open Google Chrome and go to `chrome://extensions/`.

2. Enable "Developer mode" in the top-right corner.

3. Click on "Load unpacked" and select the `extension` directory from the `frontend` folder.

## Usage

1. With the extension loaded, go to the Google search page.

2. Search for a controversial topic and end your query with a question mark.

3. The Critiq UI sidebar will appear on the search results page, providing you with opposing views on the topic.

## Important Notes

- Ensure that your Perplexity API key, OpenAI API key, and OpenAI Critiq Assistant ID are correctly set in the `.env` file.

- The extension is currently designed to work on the Google search page (`https://www.google.com/`). You can modify the content script (`frontend/src/app/chrome-scripts/content.tsx`) to match different websites if needed.

- This project uses Flask for the backend and Next.js for the frontend.

Feel free to explore, modify, and contribute to enhance the functionality of Critiq! If you encounter any issues or have suggestions, please open an issue on GitHub.