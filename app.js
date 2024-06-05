const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// add book to the Library
function addBookToLibrary(title, author, pages, read){
    const newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);
    displayLibrary();
}

// display Library
function displayLibrary() {
    const library = document.getElementById('library');
    library.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookItem =  document.createElement('div');
        bookItem.classList.add('book-card')
        
        const titleText = document.createElement('p');
        titleText.classList.add('title');
        titleText.textContent = `Title: ${book.title}`;
        bookItem.appendChild(titleText)

        const authorText = document.createElement('p');
        authorText.classList.add('author');
        authorText.textContent = `Author: ${book.author}`;
        bookItem.appendChild(authorText);

        const pagesText = document.createElement('p');
        pagesText.classList.add('pages');
        pagesText.textContent = `Pages: ${book.pages}`;
        bookItem.appendChild(pagesText)

        // Read Button
        const readBtn = document.createElement('button');
        readBtn.classList.add('readBtn');
        readBtn.textContent = book.read ? 'Read' : 'Not Read';
        readBtn.classList.add(book.read ? 'read' : 'not-read')
        readBtn.addEventListener('click', () => {
            book.read = !book.read;
            displayLibrary();
        })

        // Remove Button
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('removeBtn');
        removeBtn.textContent = 'Delete';
        removeBtn.addEventListener('click', () => {
            const confirmed = confirm(`Are you sure you want to remove "${book.title}"?`);
            if (confirmed) {
                myLibrary.splice(index, 1);
                displayLibrary();
            }
        });

        const btns = document.createElement('div');
        btns.classList.add('btns');
        btns.appendChild(readBtn);
        btns.appendChild(removeBtn);
        

        bookItem.appendChild(btns);
        library.appendChild(bookItem);
    });
}


// modal handling

const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const span = document.getElementsByClassName('close')[0];

openModalBtn.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}


// form submission handling
document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    addBookToLibrary(title, author, pages, read);
    document.getElementById('bookForm').reset();
    modal.style.display = 'none';
});

addBookToLibrary('Rich Dad Poor Dad', 'Robert Kiyosaki', 289, true);
addBookToLibrary('1984', 'George Orwell', 328, false);
addBookToLibrary('Your Money or Your Life', 'Vicki Robin and Joe Dominguez', 245, false);
addBookToLibrary('The Intelligent Investor', 'Benjamin Graham', 400, true);
addBookToLibrary('The Barefoot Investor', 'Scott Pape', 354, true);
addBookToLibrary('The Millionaire Next Door', 'Thomas J Stanley', 321, true);
addBookToLibrary('The Barefoot Investor', 'Scott Pape', 354, true);
addBookToLibrary('The Total Money Makeover', ' Dave Ramsey', 354, true);
displayLibrary();