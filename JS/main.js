var quotes =[
   {
      quote:"Be yourself; everyone else is already taken.",
      character:"Oscar Wilde",
   },
   {
      quote:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
      character:"Marilyn Monroe",
   },{
      quote:"So many books, so little time.",
      character:"Frank Zappa",
   },{
      quote:"NO RISK NO FUN",
      character:"Osama Omran",
   },{
      quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      character:"Albert Einstein",
   },{
      quote:"A room without books is like a body without a soul.",
      character:"Marcus Tullius Cicero",
   },{
      quote:"You only live once, but if you do it right, once is enough.",
      character:"Mae West",
   },{
      quote:"Be the change that you wish to see in the world.",
      character:"Mahatma Gandhi",
   },
]
var desk =``
function newquote() {
   for(var i=1 ; i<quotes.length ; i++)
      var random = Math.floor((Math.random() * 8) + 1);
      desk = ` <div class="screen">
      <h2>${quotes[random].quote}</h2>
              <p>${quotes[random].character}</p>
             </div>`
      

document.getElementById("screen").innerHTML = desk;
}