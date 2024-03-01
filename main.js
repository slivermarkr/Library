// create a dialog with a form that allows user to write the inputs

//set the value of inputs to the Content on the div 

//add card-class to display the input



const addBtn = document.querySelector('.add')
const cardContainer = document.querySelector('.card-container');
const dialog = document.querySelector('#dialog');
const inputs = document.querySelectorAll("input[type='text']");
const confirmBtn = dialog.querySelector('#confirmBtn');

console.log(inputs)

// let title = dialog.querySelector("#title");

// title.addEventListener('input', () => {
//  console.log(title.value)
// })


const myLibrary = [];

function Book(title,author,pages,status) {
 this.title = title;
 this.author = author;
 this.pages = pages;
 this.status = status;
}
// Book.prototype.info = function() { 
//  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`}
 
 function addBookToLibrary() { 
  let title;
  let author;
  let pages;
  let status
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
 
 
 addBtn.addEventListener('click' , () => {
  dialog.showModal();
 })
 
 
 function getInputvalue(title,author,pages ,status){
  switch (this.id) {
   case "title":
   title = this.value;
    break;
    
   case "author":
   author = this.value;
    break;
     
   case "pages":
   pages = this.value;
    break;
      
   case "status":
   status = this.value;
    break;
}

confirmBtn.addEventListener('click' , (e) => {
 e.preventDefault();
 inputs.forEach(input => {
  
  input.addEventListener('input', getInputvalue)
 })

})
     