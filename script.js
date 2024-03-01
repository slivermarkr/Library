const dialog = document.querySelector('#dialog');
console.log(dialog)

const myLibrary = [
 
]

function Book(title,author,pages,status) {
 this.title = title
 this.author = author
 this.pages= pages
 this.status = status
}
let newBook = new Book("a","a","a","a");
myLibrary.push(newBook)
console.log(myLibrary)


function addBookToLibrary(){
 
}