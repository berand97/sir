var textAnimation = anime.timeline({
  autoplay: true,
  easing: "easeInOutSine",
});

textAnimation.add({
  targets: "#textAnimation p",
  opacity: [0, 1],
  translateY: ["-20px", 0],
  duration: 1000,
});
