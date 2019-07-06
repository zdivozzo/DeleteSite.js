// Number of milliseconds inbetween each node removal
const deleteInterval = 1000;

// An HTMLCollection of all nodes on the current page
let allNodes = document.getElementsByTagName("*");

// Function to delete nodes
const deleteNode = () => {
  // Select a random node for deletion
  let randomNode = allNodes[Math.floor(Math.random() * allNodes.length)];

  // See how many child nodes this node has. If more than 2, we'll skip it so we don't accidentally catch
  // a big container and delete too many nodes at once.
  let numberOfChildNodes = randomNode.getElementsByTagName("*").length;

  if (numberOfChildNodes <= 2) {
    randomNode.remove();
    // Get an updated list of nodes currently in the DOM
    allNodes = document.getElementsByTagName("*");
  } else {
    // Try again
    deleteNode();
  }
};

// Delete a node every xx milliseconds
const deleteNodes = setInterval(
  () => (allNodes.length === 0 ? clearInterval(deleteNodes) : deleteNode()),
  deleteInterval
);
