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
}

function readForm() {
    var bookForm = document.getElementById("form1");
    const radioButtons = document.querySelectorAll('input[name="read"]');
    var title, author, numPages, read;
    for(i = 0; i < bookForm.length; i++) {
        if(bookForm[i].id == "title") {
            title = bookForm[i].value;
        }
        if(bookForm[i].id == "author") {
            author = bookForm[i].value;
        }
        if(bookForm[i].id == "pages") {
            numPages = bookForm[i].value;
        }
        // if(bookForm[i].id == "title") {
        //     title = bookForm[i].value;
        // }
        // text += bookForm[i].value;
        // bookForm[i].value = "";
    }
    console.log(title);
    console.log(author);
    console.log(numPages);
    console.log(read);
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
    myLibrary.splice(bookID, 1);
    displayBooks();
}

function readBook (bookID) {
    if(myLibrary[bookID].readYet == true) {
        myLibrary[bookID].readYet = false;
    }
    else {
        myLibrary[bookID].readYet = true;
    }
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
        btnRemove.classList.add('in-book-button');
        // when you click the REMOVE button, execute the removeBook() function.
        btnRemove.addEventListener('click', () => {removeBook(book.id);});

        const btnRead = document.createElement('button');
        btnRead.textContent = 'READ';
        btnRead.classList.add('in-book-button');
        btnRead.addEventListener('click', () => {readBook(book.id);});

        book.appendChild(btnRemove);
        book.appendChild(btnRead);
        display.appendChild(book);
    }
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
