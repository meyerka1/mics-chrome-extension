import {getPageType} from "./utils"

let getSegments = document.getElementById("getSegments");

let pageType;
const regex = /.*/

// if(url.match(regex)) pageType = "segments";

getSegments.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    pageType = getPageType(tab.url);
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setSegmentIds,
      args: [pageType]
    });
  });
  


  function setSegmentIds(pageType) {
      
      // if (pageType === "segments") {
          let rows = document.getElementsByTagName("tr");
          for (const row of rows) {
              row.innerHTML+= pageType
              // row.innerHTML+= row.getAttribute("data-row-key");
          }
      // }
  }

  