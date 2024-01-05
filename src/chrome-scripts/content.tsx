import React from "react";
import ReactDOM from "react-dom/client";

import '../style.css';
import CritiqExtension from "../app/components/CritiqExtension";

const appendCrtiqUIToSearchPage = () => {
  const newElement = document.createElement("section");
  newElement.id = "critiq-ui-sidebar";

  // Google search results container element
  const googleResultPageElement = document.getElementById('rcnt');

  if (googleResultPageElement) {
    console.log("Appending Critiq UI to Google Search website");
    googleResultPageElement.appendChild(newElement);
  }

  // Google search bar text field element
  const googleSearchFieldElement = document.getElementById('APjFqb') as HTMLTextAreaElement | null;

  if (googleSearchFieldElement) {
    ReactDOM.createRoot(newElement).render(
      <React.StrictMode>
        <CritiqExtension />
      </React.StrictMode>
    );
  } else {
    console.log('Google Search Field element not found');
  }
};

appendCrtiqUIToSearchPage();

