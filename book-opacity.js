const books = document.getElementsByClassName("book");
const booksImg = document.getElementsByClassName("book-img");
const infotexts = document.getElementsByClassName("infotext");

// Assuming you want to add the event listener to each book element
for (let i = 0; i < books.length; i++) {
  books[i].addEventListener("mouseover", function () {
    booksImg[i].style.opacity = 0;
    infotexts[i].style.opacity = 1;
  });

  books[i].addEventListener("mouseout", function () {
    booksImg[i].style.opacity = 1;
    infotexts[i].style.opacity = 0;
  });
}
