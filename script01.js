document.addEventListener('DOMContentLoaded', () => {
    const bookForm = document.getElementById('new-book-form');
    const bookList = document.getElementById('books');

    bookForm.addEventListener('submit', event => {
        event.preventDefault();
        
        const title = event.target.title.value;
        const author = event.target.author.value;
        const price = event.target.price.value;
        
        if (title && author && price) {
            const bookItem = document.createElement('li');
            bookItem.textContent = `${title} by ${author} - $${price}`;
            bookList.appendChild(bookItem);
            
            bookForm.reset();
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const bookForm = document.getElementById('new-book-form');
    const bookList = document.getElementById('books');

    // Example data
    const exampleBooks = [
        { title: 'The Good Parts', author: 'Pooja', price: 20 },
        { title: 'Eloquent', author: 'Varsha', price: 15 },
        { title: 'You Don\'t ', author: 'Bharath', price: 25 }
    ];

    // Function to add a book to the list
    const addBookToList = (title, author, price) => {
        const bookItem = document.createElement('li');
        bookItem.textContent = `${title} by ${author} - $${price}`;
        bookList.appendChild(bookItem);
    };

    // Add example books to the list on page load
    exampleBooks.forEach(book => addBookToList(book.title, book.author, book.price));

    bookForm.addEventListener('submit', event => {
        event.preventDefault();
        
        const title = event.target.title.value;
        const author = event.target.author.value;
        const price = event.target.price.value;
        
        if (title && author && price) {
            addBookToList(title, author, price);
            bookForm.reset();
        }
    });
});

