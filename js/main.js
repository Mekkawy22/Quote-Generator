//Use an array to hold the value of the quotes
var Quotes = [
    {'author': 'Oscar Wilde', 
     'quote': ' “Be yourself; everyone else is already taken.” '
    },
    {'author': 'Frank Zappa', 
     'quote': ' “So many books, so little time.” '
    },
    {'author': 'Albert Einstein', 
     'quote': ` “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” `
    },
    {'author': 'Marcus Tullius Cicero', 
     'quote': '“A room without books is like a body without a soul.”'
    },
    {'author': 'Mae West', 
     'quote': '“You only live once, but if you do it right, once is enough.”'
    },
    {'author': 'Mahatma Gandhi', 
     'quote': '“Be the change that you wish to see in the world.”'
    },
];
function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * Quotes.length);
    return Quotes[randomIndex];
}

cartona=''
document.getElementById('new-quote-btn').addEventListener('click', () => {
    var randomQuote = getRandomQuote();
    cartona=`
            <p id="quote-text" class="fst-italic text-muted">${randomQuote.quote}</p>
            <div id="quote-author" class="text-muted mb-3">${randomQuote.author}</div>
    `
    document.getElementById('QuoteContant').innerHTML = cartona;
});