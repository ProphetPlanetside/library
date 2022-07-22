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

let myLibrary = [];

function addBookToLibrary() {
    let book = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
    myLibrary.push(book);
    displayBooks();
}

// Remove a book from the myLibrary array.
// THIS IS REMOVING THE LAST BOOK ONLY, NOT THE SPECIFIC BOOK YOU CLICK ON
function removeBook(bookNumber) {
    console.log(bookNumber);
    myLibrary.splice(bookNumber, 1);
    displayBooks();
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

        const btn = document.createElement('button');
        btn.textContent = 'REMOVE';
        // THIS IS REMOVING THE LAST BOOK ONLY, NOT THE SPECIFIC BOOK YOU CLICK ON
        btn.addEventListener('click', function() {removeBook(i-1);});
        book.appendChild(btn);

        display.appendChild(book);
    }

    // Creates the NEW BOOK button and places it after the last book displayed.
    const newBookBtn = document.createElement('button');
    newBookBtn.classList.add('new-book-button');
    newBookBtn.textContent = 'NEW BOOK';
    newBookBtn.addEventListener('click', function() {addBookToLibrary();});
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
