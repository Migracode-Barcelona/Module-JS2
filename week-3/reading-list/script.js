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
function readingList(books) {
  const bookListContainer = document.getElementById("reading-list");
  books.forEach((book) => {
    const itemList = document.createElement("li");
    itemList.classList.add("book-item");
    itemList.style.backgroundColor = book.alreadyRead ? "green" : "red";

    const titleOfBooks = document.createElement("h3");
    titleOfBooks.textContent = book.title;

    const nameOfAuthor = document.createElement("p");
    nameOfAuthor.textContent = `Author:${book.author}`;

    const imageOfBooks = document.createElement("img");
    imageOfBooks.src = book.bookCoverImage;
    imageOfBooks.alt = book.title;
    imageOfBooks.classList.add("book-cover");

    itemList.appendChild(titleOfBooks);
    itemList.appendChild(nameOfAuthor);
    itemList.appendChild(imageOfBooks);

    bookListContainer.appendChild(itemList);
  });
}
readingList(books);
