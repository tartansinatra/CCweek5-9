var init = function(){
  console.log('app started');


//  JSON.parse will give us back an object (from a string) called fileAppList.
  var films = JSON.parse(localStorage.getItem('filmAppList') ) || [];
  console.log('got films', films);

  var createFilmItem = function(filmName){
    var li = document.createElement('li');
    li.innerText = filmName;
    var ul = document.getElementById('film-list');
    ul.appendChild(li);
  }

  for(filmName of films){
    createFilmItem(filmName);
    // var li = document.createElement('li');
    // li.innerText = filmName;
    // var ul = document.getElementById('film-list');
    // ul.appendChild(li);
  }


  var button = document.getElementById('add-button');
  var handleClick = function(){
    console.log('Woah I was got clicked')
    var textInput = document.getElementById('film-text-input')
    var filmName = textInput.value;
    console.log('film name', filmName);

    createFilmItem(filmName);

    films.push(filmName);
    localStorage.setItem('filmAppList', JSON.stringify(films) );
  }
  button.onclick = handleClick;
};

window.onload = init;
