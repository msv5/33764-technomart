function onSearchInputMouseLeave() {
  let searchInput = document.getElementById("searchInput");
  let searchButton = document.getElementById("searchButton");

  searchInput.classList.add('visually-hidden');
  searchInput.classList.remove('visually-available');

  searchButton.classList.remove('visually-hidden');
  searchButton.classList.add('visually-available');

  searchInput.value = "";

}

function onSearchButtonClick() {
  let searchInput = document.getElementById("searchInput");
  let searchButton = document.getElementById("searchButton");

  searchButton.classList.add('visually-hidden');
  searchButton.classList.remove('visually-available');

  searchInput.classList.remove('visually-hidden');
  searchInput.classList.add('visually-available');
}
