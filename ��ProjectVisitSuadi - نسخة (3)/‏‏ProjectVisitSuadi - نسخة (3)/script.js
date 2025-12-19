document.querySelector(".bars-menu").addEventListener("click", () => {
  document.querySelector(".nav-items").classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-link");
for (const item of navLinks) {
  item.addEventListener("click", () => {
    document.querySelector(".nav-items").classList.toggle("active");
  });
}

document.getElementById("submit-review").addEventListener("click", () => {
  const name = document.getElementById("review-name").value.trim();
  const rating = document.getElementById("review-rating").value;
  const review = document.getElementById("review-text").value.trim();
  const reviewList = document.getElementById("review-list");

  if (name && review) {
    const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
    const reviewBox = document.createElement("div");
    reviewBox.style.borderTop = "1px solid #ddd";
    reviewBox.style.padding = "1rem 0";
    reviewBox.innerHTML = `
      <strong>${name}</strong><br>
      <span style="color: gold; font-size: 1.2rem;">${stars}</span>
      <p>${review}</p>
    `;
    reviewList.prepend(reviewBox);

    document.getElementById("review-name").value = "";
    document.getElementById("review-rating").value = "5";
    document.getElementById("review-text").value = "";
  } else {
    alert("Please enter your name and review.");
  }
});

const favIcon = document.getElementById("fav-icon");
let isFavorite = false;

const favorite = {
  title: document.getElementById("place-title").textContent,
  price: document.getElementById("price").textContent,
  img: document.getElementById("place-img").src
};

const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
for (const f of savedFavorites) {
  if (f.title === favorite.title) {
    favIcon.classList.remove("far");
    favIcon.classList.add("fas");
    favIcon.style.backgroundColor = "black";
    favIcon.style.color = "white";
    isFavorite = true;
    break;
  }
}

function filterEvents(category) {
  const cards = document.querySelectorAll(".event-card");
  for (const card of cards) {
    if (category === "all" || card.dataset.category === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
}