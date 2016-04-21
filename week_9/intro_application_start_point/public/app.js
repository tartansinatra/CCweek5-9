window.onload = function(){

var quotes = [];

var Quote = function(quote, author){
  this.quote = quote;
  this.author = author;
}

quote1 = new Quote('A mystery, locked in a riddle, inside an enigma.','Churchill');
quote2 = new Quote('Choose Life', 'Renton');
quote3 = new Quote('de do do do, de dah dah dah', 'Sting');
quote4 = new Quote('What\'s New Pussycat?', 'Tom Jones')
quotes.push(quote1);
quotes.push(quote2);
quotes.push(quote3);
quotes.push(quote4);

var quotesSection = document.querySelector('section');

  for (var i = 0; i < quotes.length; i++) {

    var quoteArticle = document.createElement('article');  
    var blockquote = document.createElement('blockquote');
    var cite = document.createElement('cite'); 

    blockquote.innerText = quotes[i].quote + " (" +quotes[i].author +")";

    quoteArticle.appendChild(blockquote);  
    quoteArticle.appendChild(cite);
    quotesSection.appendChild(quoteArticle); 
  }




    // <form id='quote-form'>
    // <input type="text" id="quote-text-input" size="40" placeholder="quote text">
    // <input type="button" id="add-button" value="Add Quote">
    // </form>

// // this creates a new line in the webpage
//   var tagline = document.getElementById('tagline');
//   tagline.innerText = "New Tagline";

// // this changes the background colour to tomator on all elements where the selector is 'article'
//   var articles = document.querySelectorAll('article')
//   for (var i = 0; i < articles.length; i++) {
//     articles[i].style.backgroundColor = "tomato";
//   };

// // Create a new article in the webpage, following the same format...
//   var quoteArticle = document.createElement('article');
//   quoteArticle.classList.add('quote');

//   var blockquote = document.createElement('blockquote');
//   blockquote.innerText = "New Quote, shiny! ";

//   var cite = document.createElement('cite');
//   cite.innerText = 'Some dude.'

// // the following now joins the cite variable to the blockquote element
//   blockquote.appendChild(cite);

// // the following now joins the blockquote variable to the quoteArticle element
//   quoteArticle.appendChild(blockquote);

// // the following now joins the quotes into the Section element
//   var quotes = document.querySelector('section');
  // quotes.appendChild(quoteArticle)

//   // We can also add the new Article into the top of the Section with the following... 
//   // quotes.insertBefore(quoteArticle,quotes.firstChild);

//   var articles = document.querySelectorAll('article')
//   for (var i = 0; i < articles.length; i++) {
//       if(i % 2 === 0) { // index is even numbers...
//         articles[i].style.backgroundColor = "tomato";
//         articles[i].style.color = "wheat";
//       }else{ // index is odd numbers...
//         articles[i].style.backgroundColor = "wheat";
//         articles[i].style.color = "tomato";
//         }
//       };


// // Changing the name of "Quote of the Day" to "Featured Quotes"
// var tagline = document.getElementsByTagName('h2')[0];
// tagline.innerText = "Featured Quotes";


// // Create a new tag or element called article.
var quoteArticle = document.createElement('article');
quoteArticle.classList.add('quote');

// // Create a new tag or element called blockquote.
var blockquote = document.createElement('blockquote');
blockquote.innerText = "This is mental! ";

// // Create a new tag or element called cite.
var cite = document.createElement('cite');
cite.innerText = 'Another dude'

// // Link cite into the blockquote element.
  blockquote.appendChild(cite);

// // Link blockquote into the (brand new) quoteArticle element.
  quoteArticle.appendChild(blockquote);

// // Create a new section, with the variable quotes.
  var quotes = document.querySelector('section');
// Link quoteArticle into the (brand new) quotes section.
  quotes.appendChild(quoteArticle)




}



