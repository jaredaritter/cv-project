function addToLocalStorage(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

function checkStorageAndUpdate(name, setter) {
  if (localStorage.getItem(name)) {
    const storedData = JSON.parse(localStorage.getItem(name));
    setter(storedData);
  }
}

module.exports = {
  addToLocalStorage,
  checkStorageAndUpdate,
};
