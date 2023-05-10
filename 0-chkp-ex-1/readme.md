const books = [
{ title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
{ title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
{ title: '1984', author: 'George Orwell', year: 1949 },
{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
{ title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', year: 1967 },
{ title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
{ title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937 },
{ title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
{ title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', year: 1954 },
{ title: 'Animal Farm', author: 'George Orwell', year: 1945 }
];

Create a class called Book, that has three properties, _title, _author, and _year.
Create another class called Bookshelf, which has an array property called "_books".
Write getters and setters for all the properties.

In the class Book:

write a method called "getDescription", which returns a string in the format "The book TITLE was written by AUTHOR in YEAR."

use destructuring to get the values of title, author, and year in the method getDescription

In the class Bookshelf:

write a method called "addBook", which receives a Book object and adds it to the _books array.

write a method called "removeBook", which receives a Book object and removes it from the _books array.

write a method called "getAuthorBooks", which receives an author name and returns an array of books written by that author. Use the filter() method.

use the typeof operator to check the type of the input parameter in all methods.

Create an instance of Bookshelf and add all the books from the array "books" to it.

Call the "getAuthorBooks" method for the author "J.R.R. Tolkien" and console.log the result.

Call the "getDescription" method for at least one book and console.log the result.

Convert the Bookshelf object to JSON, and then convert the JSON back to a regular Bookshelf object.