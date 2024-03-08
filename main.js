const addBtn = document.querySelector('.add')
const cardContainer = document.querySelector('.card-container');
const dialog = document.querySelector('#dialog');
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
  let title = this.querySelector('[id=title]').value;
  let author = this.querySelector('[id=author]').value;
  let pages = this.querySelector('[id=pages]').value;
  
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
       <li>${input.pages}</li>
       <li>
      <button>${input.status}</button>
       </li>
       </ul>
       </div>
       `
      }).join("");
      
      dialog.close();

   }
   
   function removeCard(e)  {
      if(!e.target.className.includes('rmBtn')) return;

      const index = e.target.getAttribute('data-btn');
      myLibrary.splice(index,1);
      createCard(myLibrary,cardContainer);
   }
   
   function clearTextInputField() {
      const inputs = document.querySelectorAll('.clear');
      inputs.forEach(input => {
         input.value = "";
      })
   }
   
   addBtn.addEventListener('click' , () => {
      dialog.showModal();
      clearTextInputField()
   })
   
   form.addEventListener('submit', addBookToLibrary);
   
   cardContainer.addEventListener('click',removeCard);

   const statusDiv = document.querySelector('.status');
   let read = document.querySelector('#read');
   let notRead = document.querySelector('#not');

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