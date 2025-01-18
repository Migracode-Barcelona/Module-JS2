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
// Get the 'content' div
const contentDiv = document.getElementById("content");

// Create a <ul> element to contain the book list
const bookList = document.createElement("ul");
bookList.id = "reading-list"; // Add an ID for reference

// Iterate over each book object in the books array
books.forEach((book) => {
  // Create a <li> element for the book
  const listItem = document.createElement("li");

  // Create and populate the <p> elements for title and author
  const titleElement = document.createElement("p");
  titleElement.textContent = `Title: ${book.title}`;

  const authorElement = document.createElement("p");
  authorElement.textContent = `Author: ${book.author}`;

  // Create an <img> element for the book cover
  const imageElement = document.createElement("img");
  imageElement.src = book.bookCoverImage;
  imageElement.alt = `Cover of the book ${book.title}`;
  imageElement.style.width = "150px"; // Optional styling

  // Set background color based on read status
  listItem.style.backgroundColor = book.alreadyRead
    ? "lightgreen"
    : "lightcoral";

  // Append the elements to the <li>
  listItem.appendChild(titleElement);
  listItem.appendChild(authorElement);
  listItem.appendChild(imageElement);

  // Append the <li> to the <ul>
  bookList.appendChild(listItem);
});

// Add the <ul> to the DOM inside the 'content' element
contentDiv.appendChild(bookList);
