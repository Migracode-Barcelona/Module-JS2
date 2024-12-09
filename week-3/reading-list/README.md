# Reading List

First off, once you've branched off `main`, then update the title element in `index.html` to "Reading list app"

The function **readingList** takes an array of book objects:

```js
const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    bookCoverImage: 'https://blackwells.co.uk/jacket/l/9780465050659.jpg',
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    bookCoverImage:
      'https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg',
  },
  ...
];
```

Render the list of books on the page. Each book should have a title, author and image and a background colour that is set dependent on whether we have read the book or not.

## 🧭 Strategy
1. find the place in the HTML to put the list
2. find a structure for each list item
3. think about how to access item
4. set background color depending on object in css

Try and outline your strategy / approach for solving this problem before you get started. There is also a test suite provided to help you meet the acceptance criteria in the issue.

The end result should look something like this

![reading-list](reading-list.png)



Here are some checklist-style acceptance criteria for the reading list problem:

A <ul> element is created to contain the list of books
For each book object in the books array:

A <li> element is created
The book title is displayed in a <p> element
The book author is displayed in a <p> element
An <img> element is added with the source set to the book’s cover image URL
The <ul> containing the book list is added to the DOM inside the element with id “content”
Books that have already been read have a green background
Books that have not yet been read have a red background
The completed list matches the provided design example
No errors occur when iterating through the books array
The page is visually appealing