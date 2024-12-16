// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
const year = new Date().getFullYear();
date.textContent = year;

// ********** close links ************
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const toggleBtn = document.querySelector(".nav-toggle");

toggleBtn.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  console.log(linksHeight);
  if (linksContainerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = "0px";
  }
});

// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topBtn = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
  if (window.scrollY > navbar.getBoundingClientRect().height) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if (window.scrollY > 600) {
    topBtn.classList.add("show-link");
  } else {
    topBtn.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const id = link.getAttribute("href");
    const element = document.querySelector(id);

    let navHeight = navbar.getBoundingClientRect().height;
    console.log(navHeight);

    let linksContainerHeight = linksContainer.getBoundingClientRect().height;
    let positionFixed = navbar.classList.contains("fixed-nav");
    console.log(positionFixed);

    let position = element.offsetTop - navHeight;
    if (!positionFixed) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + linksContainerHeight;
    }
    window.scrollTo({ left: 0, top: position });
    linksContainer.style.height = 0;
  });
});
