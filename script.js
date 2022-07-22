function Book(title, author, numPages, readYet) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.readYet = readYet;
    this.info = function() {
        if(readYet) {
            return (title + ' by ' + author + ', ' + numPages + 
            ' pages, ' + 'read');
        }
        else {
            return (title + ' by ' + author + ', ' + numPages + ' pages, ' + 
            'not read yet');
        }
    }
}

// console.log(hobbit.info());

const display = document.querySelector('#display');
let myLibrary = [];

function addBookToLibrary() {
    let book = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
    myLibrary.push(book);
}

function displayBooks() {
    display.textContent = myLibrary[0].info();
}

addBookToLibrary(); // adds the hobbit book to myLibrary array
displayBooks(); // displays info() from the book to the screen/div