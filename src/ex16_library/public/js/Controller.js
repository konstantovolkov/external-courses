function Controller() {
    this.model = new Model();
    this.view = new View(this.model, this);
}


Controller.prototype.addBook = function () {
    var formData = new FormData(document.forms.book);
    var book = {
        title: formData.get('title'),
        author: formData.get('author'),
        rating: formData.get('rating'),
        //cover: formData.get('file'),        
    };
    this.model.add(book);
    this.model.loadBooks();
}

Controller.prototype.start = function () {
    this.model.loadBooks();
    //this.model.init(this.model.books);
    this.view.init();
}