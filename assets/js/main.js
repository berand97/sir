document.addEventListener("DOMContentLoaded", function () {
  const cities = document.querySelectorAll(".city");

  function updateCardWidth() {
    switch (cities.length) {
      case 1:
        break;
      case 2:
        if (window.matchMedia("(min-width: 1024px)").matches) {
        }
        break;
      case 3:
        break;
      default:
        break;
    }
  }

  function setActiveCity(city) {
    cities.forEach(function (cityElement) {
      if (cityElement !== city) {
        cityElement.classList.remove("active");
      }
    });
    city.classList.add("active");
  }

  cities.forEach(function (city) {
    city.addEventListener("mouseenter", function () {
      if (!city.classList.contains("active")) {
        setActiveCity(this);
      }
    });
  });

  // Call the updateCardWidth function when the page loads and when the window is resized
  updateCardWidth();
});
