function readingList(books) {
  const list = document.getElementById("reading-list");

  books.forEach((book) => {
    const bookList = document.createElement("li");
    bookList.style.listStyle = "none";

    if (book.alreadyRead) {
      bookList.style.backgroundColor = "#d4edda";
    } else {
      bookList.style.backgroundColor = "#f8d7da";
    }

    const title = document.createElement("h2");
    title.innerText = book.title;
    bookList.appendChild(title);

    const author = document.createElement("p");
    author.innerText = `Author: ${book.author}`;
    bookList.appendChild(author);

    const image = document.createElement("img");
    image.src = book.bookCoverImage;
    image.alt = `Cover of ${book.title}`;
    image.style.width = "100px";
    image.style.height = "auto";
    bookList.appendChild(image);

    list.appendChild(bookList);
  });
}

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

readingList(books);
