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
            bookForm[i].value = "";
        }
        if(bookForm[i].id == "author") {
            author = bookForm[i].value;
            bookForm[i].value = "";
        }
        if(bookForm[i].id == "pages") {
            if(bookForm[i].value <= 0) {
                alert('For Pages, please enter a value of 1 or greater.');
                return;
            }
            numPages = bookForm[i].value;
            bookForm[i].value = "";
        }
    }
    let readYesOrNo;
    for (const radioButton of radioButtons) {
        if(radioButton.checked) {
            readYesOrNo = radioButton.value;
            radioButton.checked = false;
            break;
        }
    }
    if(readYesOrNo == "yes")
        read = true;
    if(readYesOrNo == "no")
        read = false;
    if(title == "" || author == "" || numPages == "" || read == null) {
        alert('Please fill in all 4 values to create the new book.');
        return;
    }
    addBookToLibrary(title, author, numPages, read);
}

function addBookToLibrary(bookTitle, bookAuthor, numPages, read) {
    // Create a new Book object
    let book = new Book(bookTitle, bookAuthor, numPages, read, myLibrary.length);
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

// Create some books to initially populate the display, for testing purposes.
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary('The Return of the King', 'J.R.R. Tolkien', 295, false);
