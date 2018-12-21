const router = require('express').Router();

const BOOKS = [
    { id: 1, title: 'Jewels of Nizam', author: 'Geeta Devi', description: 'Short story', keywords: ['short', 'book', 'tale'], rating: 5, price: 100, published: new Date(2011, 12) },
    { id: 2, title: 'Cakes & Bakes', author: 'Sanjeev Kapoor', description: 'Long story', keywords: ['long', 'book', 'tale'], rating: 4, price: 100, published:  new Date(2012, 13) },
    { id: 3, title: 'Jamie’s Kitchen', author: 'Jamie Oliver', description: 'Interesting story', keywords: ['long', 'book', 'tale'], rating: 5, price: 100, published: new Date(2010, 3) },
    { id: 4, title: 'Inexpensive Family Meals', author: 'Simon Holst', description: 'Boring', keywords: ['long', 'book', 'tale'], rating: 1, price: 100, published: new Date(2002, 10) },
    { id: 5, title: 'Paleo Slow Cooking', author: 'Chrissy Gower', description: 'DSKJDHK', keywords: ['long', 'book', 'tale'], rating: 3, price: 100, published: new Date(2000, 5) },
    { id: 6, title: 'Cook Like an Italian', author: 'Tobie Puttock', description: 'MBJBJ', keywords: ['long', 'book', 'tale'], rating: 0, price: 100, published: new Date(2005, 4) },
    { id: 7, title: 'Suneeta Vaswani', author: 'Geeta Devi', description: 'MBJBJ', keywords: ['long', 'book', 'tale'], rating: 0, price: 100, published: new Date(2005, 4) },
    { id: 8, title: 'Jamie Does', author: 'Jamie Oliver', description: 'MBJBJ', keywords: ['long', 'book', 'tale'], rating: 0, price: 100, published: new Date(2005, 4) },
    { id: 9, title: 'Jamie’s italy', author: 'Jamie Oliver', description: 'MBJBJ', keywords: ['long', 'book', 'tale'], rating: 0, price: 100, published: new Date(2005, 4) },
    { id: 10, title: 'Vegetables Cookbook', author: 'Matthew Biggs', description: 'MBJBJ', keywords: ['long', 'book', 'tale'], rating: 0, price: 100, published: new Date(2005, 4) }
];

router.get('/', (req, res) => {
    res.json({ payload: BOOKS });
});

router.post('/addBook/', (req, res) => {
    var book = req.body.book;
    book.id = BOOKS[BOOKS.length - 1].id + 1
    BOOKS.push(book);
    res.json({});
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    res.json({ payload: BOOKS.find((book) => book.id === +id) });
});

module.exports = router;