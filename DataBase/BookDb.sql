CREATE TABLE Books (
    id INT PRIMARY KEY IDENTITY(1,1), -- Auto-increment ID
    title VARCHAR(255),               -- Book title
    author VARCHAR(255),              -- Book author
    year INT                          -- Publication year
);

INSERT INTO Books (title, author, year)
VALUES 
    ('The Great Gatsby', 'F. Scott Fitzgerald', 1925),
    ('1984', 'George Orwell', 1949),
    ('To Kill a Mockingbird', 'Harper Lee', 1960);

SELECT * FROM Books;

	
