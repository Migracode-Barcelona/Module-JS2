function readingList(books) {
  const readingListContainer = document.getElementById("reading-list");

  books.forEach((book) => {
    // Create a new list item
    const bookItem = document.createElement("li");
    bookItem.classList.add(book.alreadyRead ? "book-read" : "book-unread");

    // Add book cover image
    const bookImage = document.createElement("img");
    bookImage.src = book.bookCoverImage;
    bookImage.alt = `${book.title} cover`;

    // Add book title and author
    const bookDetails = document.createElement("div");
    const bookTitle = document.createElement("h3");
    const bookAuthor = document.createElement("p");
    bookTitle.textContent = book.title;
    bookAuthor.textContent = `by ${book.author}`;
    bookDetails.appendChild(bookTitle);
    bookDetails.appendChild(bookAuthor);
    // Append everything to the list item
    bookItem.appendChild(bookImage);
    bookItem.appendChild(bookDetails);
    // Append the list item to the reading list
    readingListContainer.appendChild(bookItem);
  });
}

readingList(books);

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
