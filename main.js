const btn = document.querySelector('.add')
const cardContainer = document.querySelector('.card-container');

const myLibrary = [];

function Book(title,author,pages,status) {
 this.title = title;
 this.author = author;
 this.pages = pages;
 this.status = status;
}
Book.prototype.info = function() { 
 return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`}



function addBookToLibrary() {
 let title = prompt("Title:")
 let author = prompt("Author:")
 let pages = prompt("Pages:")
 let status = prompt("Have you read it yet?")

 let newBook = new Book(title,author,pages,status)
 myLibrary.push(newBook);
}
btn.addEventListener('click',addBookToLibrary);



myLibrary.forEach(book => {
 for(let key in book) {
  console.log(`${key}:${book[key]}`)
 }
})