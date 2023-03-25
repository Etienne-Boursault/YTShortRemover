// Define a function to remove shorts from the current page
function removeShorts() {
  // Get all the YouTube video elements
  const videos = document.querySelectorAll("ytd-grid-video-renderer");

  // Loop through the videos
  for (const video of videos) {
    // Check if the video is a "Short"
    const isShort = video.querySelector("span[aria-label='Shorts']") !== null;
	
    if (isShort) {
      // Remove the video element from the page
      video.remove();
    }
  }
}

// Define a function to observe changes to the DOM tree and remove shorts
function observeAndRemoveShorts() {
  // Create a new MutationObserver instance
  const observer = new MutationObserver(mutations => {
    // Loop through the mutations
    for (const mutation of mutations) {
      // Check if nodes were added to the DOM tree
      if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
        // Remove shorts from the added nodes
        removeShorts();
      }
    }
  });

  // Observe changes to the body element and all its descendants
  observer.observe(document.body, { childList: true, subtree: true });
}

// Call the observeAndRemoveShorts function to start observing changes and removing shorts
observeAndRemoveShorts();
