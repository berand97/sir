document.addEventListener("DOMContentLoaded", function () {
  const MAX_WIDTH_1024PX = "70%";
  const MAX_WIDTH_425PX = "100%";

  const header = document.querySelector("header");
  const pageContent = document.querySelector(".page-content");
  const card = document.querySelector(".sir-card");
  const citiesContainer = document.querySelector(".cities");
  const cities = document.querySelectorAll(".city");
  const footer = document.querySelector("footer");

  function applyStyles(
    maxWidthCitiesContainer,
    maxWidthCard,
    justifyContentCard,
    containerHeight
  ) {
    citiesContainer.style.maxWidth = maxWidthCitiesContainer;
    card.style.maxWidth = maxWidthCard;
    card.style.justifyContent = justifyContentCard;
    if (containerHeight) {
      citiesContainer.style.height = containerHeight;
    }
  }

  console.log(cities.length);
  switch (cities.length) {
    case 1:
      if (window.matchMedia("(max-width: 480px)").matches) {
        citiesContainer.style.height = "200px";
        pageContent.style.height = "70vh";
        footer.style.position = "fixed";
      }
      break;
    case 2:
      if (window.matchMedia("(max-width: 480px)").matches) {
        citiesContainer.style.height = "400px";
        card.style.maxWidth = "calc(100% - 40px)";
      } else if (
        window.matchMedia("(min-width: 481px) and (max-width: 768px)").matches
      ) {
        pageContent.style.height = "80vh";
        card.style.maxWidth = "calc(100% - 400px)";
      } else {
        pageContent.style.height = "75vh";
      }
      break;
    case 3:
      if (window.matchMedia("(max-width: 480px)").matches) {
        citiesContainer.style.height = "450px";
        card.style.maxWidth = "calc(100% - 40px)";
      } else if (
        window.matchMedia("(min-width: 481px) and (max-width: 768px)").matches
      ) {
        pageContent.style.height = "80vh";
        card.style.maxWidth = "calc(100% - 100px)";
      } else {
        pageContent.style.height = "75vh";
      }
      break;
    default:
      if (window.matchMedia("(max-width: 480px)").matches) {
        citiesContainer.style.height = "600px";
        card.style.maxWidth = "calc(100% - 40px)";
      } else if (
        window.matchMedia("(min-width: 481px) and (max-width: 768px)").matches
      ) {
        pageContent.style.height = "80vh";
        card.style.maxWidth = "calc(100% - 100px)";
      } else {
        pageContent.style.height = "78vh";
      }
      break;
  }

  function setActiveCity(city) {
    cities.forEach(function (cityElement) {
      cityElement.classList.remove("active");
    });
    city.classList.add("active");
  }

  cities.forEach(function (city) {
    city.classList.remove("active");

    city.addEventListener("mouseover", function () {
      setActiveCity(this);
    });

    city.addEventListener("mouseout", function () {
      this.classList.remove("active");
    });
  });
});
