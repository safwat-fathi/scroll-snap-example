// set the active index of current element
let activeIndex = 0;

// grab ui elements
const container = document.querySelector(".container");
const elements = [...document.querySelectorAll(".child")];
const dots = [...document.querySelectorAll("nav ul li")];

// handle intersection event with the current viewport
function handleIntersect(entries) {
  const currEntry = entries.find((el) => el.isIntersecting);

  if (currEntry) {
    const currIndex = elements.findIndex((el) => el === currEntry.target);
    activeIndex = currIndex;
  }
}

// scroll observer to get current element displayed in viewport
const scrollObserver = new IntersectionObserver(handleIntersect, {
  root: container,
  rootMargin: "0px",
  threshold: 0.75,
});

// attache scrollObserver to every element
elements.forEach((el) => {
  scrollObserver.observe(el);
});

function handleScrollToElement(index) {
  // closure to pass event object to handler function
  return function (event) {
    // set active index
    activeIndex = index;

    // scroll to element within current viewport
    elements[activeIndex].scrollIntoView(true, {
      block: "start",
      behavior: "smooth",
    });

    // scroll to top of the element
    elements[activeIndex].scrollTop = 0;
  };
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", handleScrollToElement(index));
});
