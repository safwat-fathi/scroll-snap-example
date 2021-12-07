const dots = document.querySelectorAll("nav ul li");

dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    console.log(e.target);
  });
});
