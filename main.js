// create a dialog with a form that allows user to write the inputs

//set the value of inputs to the Content on the div 

//add card-class to display the input



const addBtn = document.querySelector('.add')
const cardContainer = document.querySelector('.card-container');
const dialog = document.querySelector('#dialog');
const inputs = document.querySelectorAll("input[type='text']");
const confirmBtn = dialog.querySelector('#confirmBtn');
const form = document.querySelector('.form-container');

console.log(inputs)

// let title = dialog.querySelector("#title");

// title.addEventListener('input', () => {
//  console.log(title.value)
// })

const myLibrary = [
];

function Book(title,author,pages,status) {
 this.title = title;
 this.author = author;
 this.pages = pages;
 this.status = status;
}
 
// let firstBook = new Book("The Hobbit","JRR Tolkien",300,"read");
// myLibrary.push(firstBook);
// createCard();

 function addBookToLibrary(e) { 
  e.preventDefault();
  const title = this.querySelector('[id=title]').value;
  const author = this.querySelector('[id=author]').value;
  const pages = this.querySelector('[id=pages]').value;
  const status = this.querySelector('[id=status]').value;
  
  const newBook = new Book(title,author,pages,status);
  myLibrary.push(newBook);
  console.log(newBook);
  createCard(myLibrary, cardContainer);
 }

 form.addEventListener('submit', addBookToLibrary);
 // btn.addEventListener('click',addBookToLibrary);
 
 
 
//  function createCard() {
//   let card = document.createElement("div")
//   card.classList = "card";
//   cardContainer.appendChild(card);
//   let title = document.createElement("div");
//   let author = document.createElement("div");
//   let pages = document.createElement("div");
//   let status = document.createElement("div");
  
//   myLibrary.forEach(book => {
//    for(let key in book) {
//       console.log(book);
//     title.textContent = `Title:${book.title}`
//     card.appendChild(title);
//     author.textContent = `Author:${book.author}`
//     card.appendChild(author)
//     pages.textContent = `No. of Pages:${book.pages}`
//     card.appendChild(pages)
//     status.textContent = `Status:${book.status}`
//     card.appendChild(status)
//    }
//   })
//  }

function createCard(bookArray = [], inputList) {
inputList.innerHTML = bookArray.map((input) => {
   return `
<div class="card">   
<ul>
   <li>${input.title}</li>
   <li>${input.author}</li>
   <li>${input.pages}</li>
   <li>${input.status}</li>
</ul>
</div>
   `
}).join("");
}
 
 
 addBtn.addEventListener('click' , () => {
  dialog.showModal();
 })
confirmBtn.addEventListener('click', () => {
   dialog.close();
})

