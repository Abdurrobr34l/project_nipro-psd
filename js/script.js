// navbar search button js start it is for lg to xxl and up
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
searchButton.addEventListener("click", () => {
  searchInput.classList.toggle("hidden");
  if (!searchInput.classList.contains("hidden")) {
    searchInput.focus();
    searchInput.style.width = "150px"; // Adjust width as needed
  } else {
    searchInput.style.width = "0";
  }
});
// navbar search button js end 


/* js code for second search button in md screen start */
const onlybutton = document.getElementById("only-button");
const inputsearchcontainer = document.getElementById("input-search-container");
const inputsearch = document.getElementById("input-search");

onlybutton.addEventListener("click", () => {
  inputsearchcontainer.classList.toggle("hidden");
  if (!inputsearchcontainer.classList.contains("hidden")) {
    inputsearch.focus();
  }
});
/* js code for second search button in md screen start */
