// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

function renderReadingList(books) {
  const readingList = document.getElementById("reading-list");

  books.forEach((book) => {
    // Create the list item
    const bookItem = document.createElement("li");
    bookItem.className = book.alreadyRead ? "book-read" : "book-unread";

    // Create the book image
    const bookImage = document.createElement("img");
    bookImage.src = book.bookCoverImage;
    bookImage.alt = `${book.title} cover`;

    // Create the title
    const bookTitle = document.createElement("h3");
    bookTitle.textContent = book.title;

    // Create the author
    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = `by ${book.author}`;

    // Append all elements to the list item
    bookItem.appendChild(bookImage);
    bookItem.appendChild(bookTitle);
    bookItem.appendChild(bookAuthor);

    // Append the list item to the reading list
    readingList.appendChild(bookItem);
  });
}

// Render the reading list
renderReadingList(books);
