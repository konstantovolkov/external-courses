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
        this.onAddBook.notify(this.books);
    }); 
}

Model.prototype.add = function (book) {
    fetch('/api/books/addBook', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ book }),
    })//.then(response => response.json()).then(result => {
       // console.log(result);
     //.then( res => {})
    this.onAddBook.notify(this.books);
}

Model.prototype.init = function () {
    this.books = this.books.concat();
    this.onAddBook.notify(this.books);
}