function Book(title, author, numPages, readYet) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.readYet = readYet;
    this.bookNumber = myLibrary.length;
    this.info = function() {
        if(this.readYet) {
            return (title + ' by ' + author + ', ' + numPages + 
            ' pages, ' + 'read');
        }
        else {
            return (title + ' by ' + author + ', ' + numPages + ' pages, ' + 
            'not read yet');
        }
    }

    // the code below creates the dom element displaying the book inside of
    // the object creator function.

    // const book = document.createElement('div');
    // book.classList.add('book');
    // // this #id will be used later when we have to delete specific books
    // book.id = this.bookNumber;
    // book.textContent = this.info();
    // const btn = document.createElement('button');
    // btn.textContent = 'REMOVE';
    // // when you click the REMOVE button, execute the removeBook() function.
    // // btn.addEventListener('click', () => {removeBook(this);});
    // // btn.addEventListener('click', () => {removeBook(book.id);});
    // btn.addEventListener('click', () => {removeBook(this.bookNumber);});
    // book.appendChild(btn);
    // display.appendChild(book);
}

function addBookToLibrary(bookTitle) {
    // Create a new Book object
    let book = new Book(bookTitle, 'J.R.R. Tolkien', 295, false, myLibrary.length);
    // Add the new book to the myLibrary array
    myLibrary.push(book);
    displayBooks();
}

// Remove a book from the myLibrary array AND from the DOM/display.
function removeBook(bookID) {
    // Removes the DOM element corresponding to the 'book' parameter.
    // const element = document.getElementById(book.bookNumber);
    const element = document.getElementById(bookID);
    element.remove();
    // remove the Book from the myLibrary array as well
    // myLibrary.splice(book.bookNumber, 1);
    myLibrary.splice(bookID, 1);
    displayBooks();
}

function readBook (bookID) {
    if(myLibrary[bookID].readYet == true) {
        myLibrary[bookID].readYet = false;
        // console.log(myLibrary[bookID].readYet);
    }
    else {
        myLibrary[bookID].readYet = true;
        // console.log(myLibrary[bookID].readYet);
        // console.log('hi');
    }
    displayBooks();
    // myLibrary[bookID].bookNumber = 15;
    // console.log(myLibrary[bookID].bookNumber);
}

// THIS FUNCTION is messing up. There is a glitch where if you remove first book,
// add a new book, then remove that new book, the book in the first position is
// removed.
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
        // const book = document.createElement('div');
        // book.classList.add('book');
        // book.textContent = myLibrary[i].info();

        // const btn = document.createElement('button');
        // btn.textContent = 'REMOVE';
        // // THIS IS REMOVING THE LAST BOOK ONLY, NOT THE SPECIFIC BOOK YOU CLICK ON
        // // btn.addEventListener('click', function() {removeBook(i-1);});
        // btn.addEventListener('click', function() {removeBook(myLibrary[i-1]);});
        // // console.log(i-1);
        // book.appendChild(btn);

        // display.appendChild(book);

        // This updates each book's bookNumber so that the book.id below is
        // up to date.
        myLibrary[i].bookNumber = i;

        const book = document.createElement('div');
        book.classList.add('book');
        // this #id will be used later when we have to delete specific books
        book.id = myLibrary[i].bookNumber;
        book.textContent = myLibrary[i].info();

        const btnRemove = document.createElement('button');
        btnRemove.textContent = 'REMOVE';
        // when you click the REMOVE button, execute the removeBook() function.
        btnRemove.addEventListener('click', () => {removeBook(book.id);});

        const btnRead = document.createElement('button');
        btnRead.textContent = 'READ';
        btnRead.addEventListener('click', () => {readBook(book.id);});

        book.appendChild(btnRemove);
        book.appendChild(btnRead);
        display.appendChild(book);
    }

    // NO LONGER NEEDED. The button is created in the HTML now, and
    // the button is given an event listener in the code below this function.
    // // Creates the NEW BOOK button and places it after the last book displayed.
    // const newBookBtn = document.createElement('button');
    // newBookBtn.classList.add('new-book-button');
    // newBookBtn.textContent = 'NEW BOOK';
    // newBookBtn.addEventListener('click', function() {addBookToLibrary('The Hobbit');});
    // display.appendChild(newBookBtn);
}

let myLibrary = [];

// Create the DOM element pointing to the display div
const display = document.querySelector('#display');

// Add the event listener to the NEW BOOK button, and have it create a new book.
const newBookBtn = document.getElementById('new-book-button');
newBookBtn.addEventListener('click', function() {addBookToLibrary('The Hobbit');});

// Create some books to initially populate the display, for testing purposes.
// myLibrary[0] = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
// myLibrary[1] = new Book('The Return of the King', 'J.R.R. Tolkien', 295, false);
addBookToLibrary('The Hobbit');
addBookToLibrary('The Return of the King');

// addBookToLibrary('The Hobbit');
// addBookToLibrary('The Great Gatsby');
// addBookToLibrary('The Fellowship of the Ring');
// addBookToLibrary('The Two Towers');
// addBookToLibrary('The Return of the King');
// addBookToLibrary('Star Wars');
// addBookToLibrary('The Empire Strikes Back');
// addBookToLibrary('Return of the Jedi');
// displayBooks();
