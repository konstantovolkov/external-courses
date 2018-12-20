

function View(model, controller) {
    this.model = model;
    this.ctrl = controller;

    this.bookList = document.getElementById('books-list')
    this.form = document.getElementById('form');
    this.modal = document.getElementById('book-form');
}

View.prototype.init = function () {

    this.model.onAddBook.subscribe((books) => {
        this.renderBooks(books);
    });

    this.form.addEventListener('submit', (event) => {
        event.preventDefault();
        this.ctrl.addBook();
    });
}

View.prototype.renderBooks = function (books) {

    while (this.bookList.lastChild) {
        this.bookList.removeChild(this.bookList.lastChild);
    }

    var writeRating = (rating) => {
        var stars = '';
        var i;
         if (rating !== 0){
             for (i = 1; i <= rating; i++) {
                 stars += '★';
             };
         }
         for (i = rating; i < 5; i++) {
             stars += '☆'
         }
         return stars;
     }

    var renderBook = (book) => {      
        const bookTpl = document.getElementById('book-tpl').content.cloneNode(true);
        bookTpl.querySelector('.book-image > img').setAttribute('src', '../images/book-cover-' + book.id + '.png');
        bookTpl.querySelector('.book-title').textContent = book.title;
        bookTpl.querySelector('.book-author').textContent = 'by '+ book.author;
        bookTpl.querySelector('.book-rating').textContent = writeRating(book.rating);
        this.bookList.append(bookTpl);
    }

    books.forEach((book) => {
        renderBook(book);
    })
    
}
/*
View.prototype.closeModal = function () {
    this.modal:target = 'none';
}*/