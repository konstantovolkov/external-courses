function Model() {
    this.books = [];
    this.onAddBook = new EventEmitter();
}

Model.prototype.loadBooks = function() {
    fetch('/api/books', ).then((res) => {
        if (res.ok) {
            return res.json();
        }
    }).then((data) => {
        this.books = data.payload;
        console.log(this.books);
    }); 
}

Model.prototype.add = function (book) {
    /*fetch('/api/books', {
        method: 'POST',
        body: JSON.stringify({
            title: book.title,
            author: book.author,
            rating: book.rating,
        }),
    })*/
    this.books = this.books.concat(book);
    this.onAddBook.notify(this.books);
}

Model.prototype.init = function (initialBooks) {
    this.books = this.books.concat(initialBooks);
    this.onAddBook.notify(this.books);
}