# Critiq Chrome Extension

## Overview

Critiq is a Chrome extension designed to help users explore opposing views on controversial topics directly within Google search results. Empower your understanding, foster open-mindedness, and navigate controversy effortlessly with Critiq.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jerusan/critiq.git
   ```

2. Navigate to the extension folder:

   ```bash
   cd critiq
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Build the extension:

   ```bash
   npm run export
   ```

2. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" in the top right.
   - Click "Load unpacked" and select the `extension` folder.

3. Perform a Google search on a controversial topic, ending the query with a '?'.

4. Critiq UI will append itself to the search results, displaying a summary of opposing views.

## Dependencies

- [Next.js](https://nextjs.org/): React framework for building web applications.
- [Webpack](https://webpack.js.org/): Module bundler for JavaScript applications.
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework.
- [React Icons](https://react-icons.github.io/react-icons/): Icons for React applications.

## Manifest Configuration

The extension's `manifest.json` file defines its structure, permissions, and background processes. Key configurations include:

- **Content Scripts**: Executes the content script (`content.js`) on Google search pages.
- **Background Script**: Utilizes a service worker (`background.js`) for background processing.
- **Web Accessible Resources**: Allows access to extension assets on all URLs.

## Components

Critiq consists of three main React components:

1. **CritiqExtension**: The main component handling the integration with Google search and displaying the UI when a controversial topic is detected.

2. **Header**: Renders the header section of the extension, displaying the Critiq logo.

3. **Body**: Displays the main content, including the search query and the summary of opposing views. It also provides a button to delve into detailed counterpoints.