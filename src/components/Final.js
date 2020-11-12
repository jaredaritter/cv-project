import React from 'react';

function Final(props) {
  function getAllSections() {
    const general = JSON.parse(localStorage.getItem('general'));
    const education = JSON.parse(localStorage.getItem('education'));
    const practical = JSON.parse(localStorage.getItem('practical'));
    console.log(general, education, practical);
  }

  return (
    <div className={props.className}>
      <button type="button" onClick={getAllSections}>
        Log to Console
      </button>
    </div>
  );
}

export default Final;
