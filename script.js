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

let myLibrary = [];

function addBookToLibrary() {
    let book = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
    myLibrary.push(book);
}

function displayBooks() {
    for(i = 0; i < myLibrary.length; i++) {
        const book = document.createElement('div');
        book.textContent = myLibrary[i].info();
        display.appendChild(book);
    }
}

const display = document.querySelector('#display');


addBookToLibrary();
addBookToLibrary();
displayBooks();