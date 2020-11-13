function addToLocalStorage(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

function checkStorageAndUpdate(name, setter) {
  const defaultValue = {
    general: {
      name: 'Jared',
      email: 'awesome@email.com',
      phone: '555-555-5555',
    },
    education: [
      {
        name: 'University of Awesome',
        study: 'Awesomeness',
        startDate: '2000',
        endDate: 'current',
      },
    ],
    practical: {
      name: 'Awesome Inc.',
      position: 'Engineer of Awesomeness',
      responsibilities: 'Making things awesome.',
      startDate: '2005',
      endDate: 'current',
    },
  };

  if (localStorage.getItem(name)) {
    const storedData = JSON.parse(localStorage.getItem(name));
    setter(storedData);
  } else {
    setter(defaultValue[name]);
  }
}

module.exports = {
  addToLocalStorage,
  checkStorageAndUpdate,
};
