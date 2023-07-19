document.addEventListener("DOMContentLoaded", function () {
  const MAX_WIDTH_1024PX = "70%";
  const MAX_WIDTH_768PX = "80%";
  const MAX_WIDTH_425PX = "100%";

  const cities = document.querySelectorAll(".city");
  const citiesContainer = document.querySelector(".cities");
  const card = document.querySelector(".sir-card");

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

  switch (cities.length) {
    case 1:
      applyStyles("10%", MAX_WIDTH_1024PX, "center");
      break;
    case 2:
      if (window.matchMedia("(max-width: 425px)").matches) {
        applyStyles("50%", MAX_WIDTH_425PX, "center", "800px");
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
