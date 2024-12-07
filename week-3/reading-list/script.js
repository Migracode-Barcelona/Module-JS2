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
// Function to render the reading list
function readingList(books) {
  const readingListElement = document.getElementById("reading-list");

  books.forEach((book) => {
    // Create a list item for each book
    const listItem = document.createElement("li");
    listItem.style.border = "1px solid #ccc";
    listItem.style.padding = "10px";
    listItem.style.marginBottom = "10px";
    listItem.style.listStyleType = "none";

    // Set the background color based on whether the book has been read
    listItem.style.backgroundColor = book.alreadyRead ? "#DFFFD6" : "#FFD5D5";

    // Create the content for the list item
    listItem.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <img src="${book.bookCoverImage}" alt="${book.title} cover" style="max-width: 300px; display: block; margin-top: 10px;">
    `;

    // Append the list item to the reading list
    readingListElement.appendChild(listItem);
  });
}

// Call the function to render the books
readingList(books);
