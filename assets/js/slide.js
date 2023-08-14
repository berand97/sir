const breakpoints = [
  { name: "sm", width: 425 },
  { name: "md", width: 768 },
  { name: "lg", width: 992 },
];

function initializeSlick(selector, config) {
  $(selector).slick(config);
}

function getBreakpointName(screenWidth) {
  let breakpointName = "sm";

  for (const breakpoint of breakpoints) {
    if (screenWidth >= breakpoint.width) {
      breakpointName = breakpoint.name;
    } else {
      break;
    }
  }

  return breakpointName;
}

function setupSlickForBreakpoint(breakpointName) {
  for (let i = 1; i <= 12; i++) {
    const slideSelector = `.slide-${breakpointName}-${i}`;

    if ($(slideSelector).length > 0) {
      const config = {
        infinite: true,
        slidesToShow: i,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };

      initializeSlick(slideSelector, config);
    }
  }
}

function setupSlick() {
  const screenWidth = window.innerWidth;
  const breakpointName = getBreakpointName(screenWidth);

  setupSlickForBreakpoint(breakpointName);
}

let resizeTimeout;

function handleResize() {
  clearTimeout(resizeTimeout);

  resizeTimeout = setTimeout(function () {
    $(".slide").slick("unslick");
    setupSlick();
  }, 300);
}

window.addEventListener("resize", handleResize);

setupSlick();
