var init = function(){
  console.log('app started');
  var button = document.getElementById('add-button');
  console.log('button', button);
  

  // button.onclick = function(){}
  // console.log('Woh I got clicked');

// The same as above being refactored into a named (instead of unnamed) function.... makes little difference, but sometimes you want to name a function to call upon it more often.

// Get text from text box
  var handleClick = function(){
    console.log('Woh I got clicked');
    getText = document.getElementById('film-text-input').value;
    console.log('got text', getText)
  


// Set text to that from given in text box and create new list element, then display it in underneath the Film List element (section)


  var filmList = document.getElementById('film-list');

  var newFilm = document.createElement('li');
    newFilm.innerText = getText;
    filmList.appendChild(newFilm);
  }

  var form = document.getElementById('film-form');
  form.onsubmit = function(event) {
  // console.log('event', event);  // This allows the event to be logged and accessed in the Console on the browser...
    event.preventDefault();
    handleClick();
  }

  button.onclick = handleClick;
}  


window.onload = init;

