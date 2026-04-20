
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});


window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  nav.style.boxShadow = window.scrollY > 50 
    ? "0 2px 10px rgba(0,0,0,0.5)" 
    : "none";
});

const cards = document.querySelectorAll(".card");
const image = document.getElementById("serviceImage");
const title = document.getElementById("serviceTitle");

cards.forEach(card => {
  card.addEventListener("click", () => {
    image.src = card.getAttribute("data-img");
    title.textContent = card.textContent;
  });
});