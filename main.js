const addBtn = document.querySelector('.add')
const cardContainer = document.querySelector('.card-container');
const dialog = document.querySelector('#dialog');

addBtn.addEventListener('click' , () => {
 dialog.showModal();
})
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
 createCard()
}
// btn.addEventListener('click',addBookToLibrary);



function createCard() {
 let card = document.createElement("div")
 card.classList = "card";
 cardContainer.appendChild(card);
 let title = document.createElement("div");
 let author = document.createElement("div");
 let pages = document.createElement("div");
 let status = document.createElement("div");

 myLibrary.forEach(book => {
  for(let key in book) {
   title.textContent = `Title:${book.title}`
   card.appendChild(title);
   author.textContent = `Author:${book.author}`
   card.appendChild(author)
   pages.textContent = `No. of Pages:${book.pages}`
   card.appendChild(pages)
   status.textContent = `Status:${book.status}`
   card.appendChild(status)
  }
 })
}