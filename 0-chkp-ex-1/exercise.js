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

class Book {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }
    get title() {
        return this._title
    }
    set title(newTitle) {
        this._title = title
    }
    get author() {
        return this.author
    }
    set author(newAuthor) {
        this._author = author
    }
    get year() {
        return this._year
    }
    set year(newYear) {
        this._year = year
    }
    getDescription() {
        return `The book ${this._title} was written by ${this._author} in ${this._year}`
        const [title, author, year] = books
    }
    
}
const instancesOfBook = [];
for (let i = 0; i < books.length; i++) {
    
    const book = new Book(books[i].title, books[i].author, books[i].year);
    instancesOfBook.push(book)
    
}
console.log("The Book objects:")
console.log(instancesOfBook) 

class Bookshelf {
    constructor(books) {
        this._books = books;
    }
    get books() {
        return this._books
    }
    set books(newBooks) {
        this._books = books
    }
    addBook(bookObj) {
        console.log(`Type of input is: ${typeof(bookObj)}`)
        if(typeof(bookObj) === "object") {
            this._books.push(bookObj)
        } else {
            console.log("Input is not an object")
        }
        
    }
    removeBook(bookObj) {
        console.log(`Type of input is: ${typeof(bookObj)}`)
        if(typeof(bookObj) === "object") {
            this._books.splice(this._books.indexOf(bookObj), 1)
        } else {
            console.log("Input is not an object")
        }
    }
    getAuthorBooks(author) {
        console.log(`Type of input is: ${typeof(author)}`)
        if(typeof(author) === "string"){
            return this._books.filter(book => book.author === author)
        } else {
            return "Error: author must be a string"
        }
    }
}

const bookshelf1 = new Bookshelf(books)

console.log("The books for the author J.R.R. Tolkien:")
console.log(bookshelf1.getAuthorBooks("J.R.R. Tolkien"))

console.log("The description for a random book:")
console.log(instancesOfBook[Math.floor(Math.random() * instancesOfBook.length)].getDescription())

console.log("To JSON:");
const stringified = JSON.stringify(bookshelf1);
console.log(stringified);
console.log("From JSON:");
const parsed = JSON.parse(stringified);
console.log(parsed);