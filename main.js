const addBtn = document.querySelector('.add')
const cardContainer = document.querySelector('.card-container');
const dialog = document.querySelector('#dialog');
const form = document.querySelector('.form-container');
const toggleBtn = document.querySelector('.toggle-btn');
const read = document.querySelector('#read');
const notRead = document.querySelector('#not');

const myLibrary = [];

function Book(title,author,pages,status) {
 this.title = title;
 this.author = author;
 this.pages = pages;
 this.status = status;
}

function addBookToLibrary(e) { 
  e.preventDefault();
  let title = this.querySelector('[id=title]').value;
  let author = this.querySelector('[id=author]').value;
  let pages = this.querySelector('[id=pages]').value;
  let status = getStatus();
  
  const newBook = new Book(title,author,pages,status);
  myLibrary.push(newBook);
  createCard(myLibrary, cardContainer);
 }

function createCard(bookArray = [], inputList) {
    inputList.innerHTML = bookArray.map((input, i) => {
       return `
       <div class="card" data-index=${i}>   
       <button data-btn=${i} class="rmBtn">Remove</button>
       <ul>
       <li>${input.title}</li>
       <li>${input.author}</li>
       <li>${input.pages} pages</li>
       <li>
      <button class="toggle-btn" data-toggle=${i}>${input.status}</button>
       </li>
       </ul>
       </div>
       `
      }).join("");
      
      dialog.close()
   }
   
   function removeCard(e)  {
      if(!e.target.className.includes('rmBtn')) return;
      
      if(confirm("You want to remove this book?")){
      const index = e.target.getAttribute('data-btn');
      myLibrary.splice(index,1);
      createCard(myLibrary,cardContainer);}
   }

   function toggleButton (e){
      if(!e.target.className.includes('toggle-btn'))return;
   
      const index = e.target.getAttribute('data-toggle');
   
      if(e.target.textContent === "Read"){
         myLibrary[index].status = "Not read yet"
      }else if(
         e.target.textContent === "Not read yet"){
         myLibrary[index].status = "Read";
         }
         
      createCard(myLibrary,cardContainer);
   }
   
   function clearTextInputField() {
      const inputs = document.querySelectorAll('.clear');
      inputs.forEach(input => {
         input.value = "";
      })
   }

   function toggleStatus(){

   read.onchange = () => {
      if(read.checked) {
         notRead.checked = false;
      }
   }
   notRead.onchange = () => {
      if(notRead.checked) {
         read.checked = false;
      }
   }
}

function getStatus() {
   if(!read.checked && !notRead.checked){
      return "Read";
   }
   if(read.checked) {
      return "Read"
   } else if (notRead.checked) {
      return "Not read yet";
   }
}

addBtn.addEventListener('click' , () => {
   dialog.showModal();
   clearTextInputField()
})
   
form.addEventListener('submit', addBookToLibrary);
cardContainer.addEventListener('click',removeCard);
cardContainer.addEventListener('click',toggleButton);
toggleStatus();

