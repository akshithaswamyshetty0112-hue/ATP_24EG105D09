class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isAvailable = true;
  }

  borrow() {
    this.isAvailable = false;
  }

  returnBook() {
    this.isAvailable = true;
  }

  getInfo() {
    return this.title + " by " + this.author + " (" + this.pages + " pages)";
  }

  isLongBook() {
    return this.pages > 300;
  }
}

// Create 5 book objects
let book1 = new Book("Harry Potter", "J.K. Rowling", 350);
let book2 = new Book("1984", "George Orwell", 328);
let book3 = new Book("The Hobbit", "J.R.R. Tolkien", 310);
let book4 = new Book("The Alchemist", "Paulo Coelho", 208);
let book5 = new Book("Wings of Fire", "A.P.J Abdul Kalam", 180);

let library = [book1, book2, book3, book4, book5];

// i. Display info of all books
console.log("All Books:");
library.forEach(book => console.log(book.getInfo()));

// ii. Borrow 2 books
book1.borrow();
book3.borrow();

console.log("\nAvailability after borrowing:");
library.forEach(book => 
  console.log(book.title + " - " + (book.isAvailable ? "Available" : "Not Available"))
);

// iii. Return 1 book
book1.returnBook();

console.log("\nAfter returning one book:");
library.forEach(book => 
  console.log(book.title + " - " + (book.isAvailable ? "Available" : "Not Available"))
);

// iv. Count long books (>300 pages)
let longBooks = library.filter(book => book.isLongBook());
console.log("\nNumber of long books:", longBooks.length);

// v. List all available books
let availableBooks = library.filter(book => book.isAvailable);
console.log("\nAvailable Books:");
availableBooks.forEach(book => console.log(book.title));