const newQuote = document.getElementById("new-quote");

		const bookQuoteArr = [
			{text: 'We can never give up longing an dwishing while we are thoroughly alive. There are certain things we feel to be beautiful and good, and we must hungerafter them.', book: 'The Mill on the Floss', author: 'George Elliot'},
			{text: 'How wonderful it is that nobody need wait a single moment before starting to improve the world.', book: 'The Diary of a Young Girl', author: 'Anne Frank'},
			{text: 'There will be little rubs and dissapointments everywhere , and we are all apt to expect too much; but then , if one scheme of happiness fails, human nature turns to another; if the first calculation is wrong, we make a second better: we find comfort somewhere', book: 'Mansfield Park', author: 'Jane Austen'},
			{text: 'Fight till the last gasp', book: 'Henry VI', author: 'William Shakespeare'},
			{text: 'Get busy living or get busy dying', book: 'The Shawshank Redemption', author: 'Stephen King'},
			{text: 'We are all in the gutter, but some of us are looking at the stars.', book: 'Lady Windermere\'s Fan', author: "Oscar Wilde"},
			{text: "The reasonable man adapts himself to the world: the unreasonable one persists in trying to adapt the world to hmself. Therefore all progress depends on the unreasonable man.", book: 'Man and Superman', author: 'George Bernard Shaw'},
			{text: 'I can\'t go back to yesterday because I was a different person then', book: 'Alice in Wonderland', author: 'Lewis Carroll'},
			{text: 'I don\'t like work--no man does--but I like what is in the work--the chance to find yourself. Your own reality---for yourself not for others--what no other man can ever know. They can only see the mere show, and enver can tell what it really means.', book: 'Heart of Darkness', author: 'Joseph Conrad'},
			{text: 'Not all those who wander are lost', book: 'The Lord of the Rings', author: 'J.R.R. Tolkien'},
			{text: 'The mystery of life isn\'t a problem to solve, but a reality to experience.', book: 'Dune', author: 'Frank Herbert'},
			{text: 'Man is only truly great when he acts from the passions; never irresistible but when he appeals to the imagination', book: 'Coningsby', author: 'Benjamin Disraeli'},
			{text: 'Don\'t feel sorry for yourself. Only assholes do that.', book: 'Norwegian Wood', author: 'Haruki Murakami'}
		];
		console.log("hello");

		 generateQuote = () =>{
			let index = Math.floor(Math.random()*bookQuoteArr.length);
			let quote = bookQuoteArr[index];
			return quote;
		}
		

		renderQuote = () => {
			let quote = generateQuote();
			let quoteText = quote.text;
			let quoteBook = quote.book;
			let quoteAuthor = quote.author;
			document.getElementById("text").innerHTML = '\"'+ quoteText +'\"';
			document.getElementById("author").innerHTML = '<i>' + quoteBook + '</i>' + ' by ' + quoteAuthor;
			document.getElementById("tweet-quote").href= "https://twitter.com/intent/tweet?text=\"" + quoteText + "\"" + " %23" + quoteBook + " %23" + quoteAuthor;
			console.log(document.getElementById("tweet-quote").href);

		}

		window.onload = renderQuote;
		newQuote.onclick = renderQuote;
