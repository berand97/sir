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
      } else {
        applyStyles("50%", MAX_WIDTH_1024PX, "center");
      }
      break;
    case 3:
      if (window.matchMedia("(max-width: 425px)").matches) {
        applyStyles("60%", MAX_WIDTH_425PX, undefined, "1200px");
      } else {
        applyStyles("60%", MAX_WIDTH_1024PX, "center");
      }
      break;
    default:
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
