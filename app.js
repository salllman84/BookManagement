function fetchBooks() {
    fetch('http://localhost:5000/api/books')  // Call the backend API
        .then(response => response.json())
        .then(books => {
            // Clear existing content
            mainContent.innerHTML = '';

            // Display books
            books.forEach(book => {
                const bookCard = document.createElement('div');
                bookCard.classList.add('book-card');
                bookCard.innerHTML = `
                    <h3>${book.title}</h3>
                    <p>Author: ${book.author}</p>
                    <p>Year: ${book.year}</p>
                `;
                mainContent.appendChild(bookCard);
            });
        })
        .catch(error => {
            console.error('Error fetching books:', error);
        });
}
