
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
    alreadyRead: false,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
  {
    title: "The Second Sex",
    author: "Simone de Beauvoir",
    alreadyRead: false,
    bookCoverImage:
      "https://m.media-amazon.com/images/I/71t0P8IUWrL.jpg",
  },
  {
    title: "The Book Thief",
    author: "Markus Zusak",
    alreadyRead: true,
    bookCoverImage: "https://m.media-amazon.com/images/I/71H2SJik5AL._AC_UF894,1000_QL80_.jpg"

  },
  {
    title: "A Room of One's Own",
    author: "Virginia Woolf",
    alreadyRead: false,
    bookCoverImage:
      "https://m.media-amazon.com/images/I/81nYAOd3IXL._AC_UF894,1000_QL80_.jpg",
  },
  {
    title: "Shuggie Bain",
    author: "Douglas Stuart",
    alreadyRead: false,
    bookCoverImage:
      "https://m.media-amazon.com/images/I/71wfg-FbHiL._UF1000,1000_QL80_.jpg",
  },
  {
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    alreadyRead: true,
    bookCoverImage:
      "https://m.media-amazon.com/images/I/81CA-WqU+lL._AC_UF894,1000_QL80_.jpg",
  },
  {
    title: "Giovanni's Room",
    author: "James Baldwin",
    alreadyRead: true,
    bookCoverImage:
      "https://images.cdn2.buscalibre.com/fit-in/360x360/4d/8a/4d8a670255b0a192264a66097f668e7f.jpg",
  },
  {
    title: "A Thousand Splendid Suns",
    author: "Khaled Hosseini",
    alreadyRead: true,
    bookCoverImage:
      "https://m.media-amazon.com/images/I/81O1dootJ8L._AC_UF894,1000_QL80_.jpg",
  },
  {
    title: "Intermezzo",
    author: "Sally Rooney",
    alreadyRead: true,
    bookCoverImage:
      "https://m.media-amazon.com/images/I/71HMRBlIEDL._AC_UF894,1000_QL80_.jpg",
  },
];

const list = document.getElementById("reading-list");



document.addEventListener("DOMContentLoaded", () => {
  renderBooks(books);

});function renderBooks(books) { for (let i= 0; i< books.length; i++) {

  let title = books[i].title
  let author = books[i].author
  let status = books[i].alreadyRead
  let cover = books[i].bookCoverImage


var entry = document.createElement('li');
entry.innerHTML = ` 
<h3 id="title-author"> ${title} written by ${author}</h3>
 <img id="bookcover" src= "${cover}"></img>
`
if (status) {
  entry.classList.add('read');
} else {
  entry.classList.add('unread');
}
list.appendChild(entry);

}          
}


