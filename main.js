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
//   const status = this.querySelector('[id=status]').value;
  
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
       <div class="status-container">
          <label for="status"><span>Status:</span</label>
          <input type="checkbox" id="status-${i}" class="checked"> </input>
       </div>
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
   console.log(statusDiv)
   function getStatus(e) {
      if(!e.target.className.includes("readStatus")) return;
      console.log(e.target.name);
   }
   statusDiv.addEventListener('click', getStatus);
