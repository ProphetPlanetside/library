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
    // This while loop removes all children of display so that the display is
    // "cleared." This prevents duplicate books from being displayed if you try
    // to displayBooks twice or more in a row.
    var child = display.lastElementChild;
    while(child) {
        display.removeChild(child);
        child = display.lastElementChild;
    }

    // Creates a new DOM element book, adds textContent to it equal to the current
    // book from the myLibrary array, then appends the element as a child to the
    // display element.
    for(i = 0; i < myLibrary.length; i++) {
        const book = document.createElement('div');
        book.classList.add('book');
        book.textContent = myLibrary[i].info();
        display.appendChild(book);
    }

    // Creates the NEW BOOK button and places it after the last book displayed.
    const newBookBtn = document.createElement('button');
    newBookBtn.classList.add('new-book-button');
    newBookBtn.textContent = 'NEW BOOK';
    display.appendChild(newBookBtn);
}

const display = document.querySelector('#display');

addBookToLibrary();
addBookToLibrary();
addBookToLibrary();
addBookToLibrary();
addBookToLibrary();
addBookToLibrary();
addBookToLibrary();
addBookToLibrary();
displayBooks();
