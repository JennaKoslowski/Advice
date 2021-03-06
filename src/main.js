const buttons = document.getElementById('buttons');
const adviceBubble = document.getElementById('adviceBubble');
const adviceTime = document.createElement('p');
adviceBubble.appendChild(adviceTime);

function changeVisibility() {
  adviceBubble.style.visibility = 'visible';
}

buttons.onclick = function giveAdvice() {
  fetch('https://api.adviceslip.com/advice', {
    method: 'GET',
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      // return information if response status is 200
      }
      throw new Error('Resource not found');
    // throw error if response status fails
    })
    .then((data) => {
      const adviceReq = data.slip.advice;
      // set advice to variable for ease
      adviceTime.textContent = adviceReq;
      // display advice on page
    });
  changeVisibility();
};
