var deleteInterval = 1000
var randomNumber = 0
var allNodes = document.getElementsByTagName("*")
var deleteNode = function(){
  randomNumber = Math.floor(Math.random()*allNodes.length)
  // If something doesn't have more than two child nodes, just to keep things interesting
  if(allNodes[randomNumber].getElementsByTagName('*').length <= 2){
    allNodes[randomNumber].remove()
    // Get an updated list of nodes currently in the DOM
    allNodes = document.getElementsByTagName("*")
  } else {
    deleteNode()
  }
}

var deleteNodes = setInterval(function(){
  if(allNodes.length === 0){
    clearInterval(deleteNodes)
  } else {
    deleteNode()
  }
},deleteInterval)
