const addBtn = document.querySelector('.add')
const cardContainer = document.querySelector('.card-container');
const dialog = document.querySelector('#dialog');
const confirmBtn = dialog.querySelector('#confirmBtn');
const form = document.querySelector('.form-container');

const myLibrary = [];

function Book(title,author,pages,status) {
 this.title = title;
 this.author = author;
 this.pages = pages;
 this.status = status;
}

function addBookToLibrary(e) { 
  e.preventDefault();
  const title = this.querySelector('[id=title]').value;
  const author = this.querySelector('[id=author]').value;
  const pages = this.querySelector('[id=pages]').value;
  const status = this.querySelector('[id=status]').value;
  
  const newBook = new Book(title,author,pages,status);
  myLibrary.push(newBook);
  createCard(myLibrary, cardContainer);
 }

form.addEventListener('submit', addBookToLibrary);

function createCard(bookArray = [], inputList) {
inputList.innerHTML = bookArray.map((input) => {
   return `
<div class="card">   
<ul>
   <li>${input.title}</li>
   <li>${input.author}</li>
   <li>${input.pages}</li>
   <li>
      <label for="status">${input.status}</label>
      <input type="checkbox" id="status">   </input>
   </li>
</ul>
</div>
   `
}).join("");
dialog.close();
}
 
addBtn.addEventListener('click' , () => {
   dialog.showModal();
})

