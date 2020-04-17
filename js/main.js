window.addEventListener("load", function () {
  new Glider(document.querySelector(".glider"), {
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: true,
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
    // responsive: [
    //   {
    //     breakpoint: 420,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       duration: 0.25,
    //     },
    //   },
    //   {
    //     breakpoint: 800,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       duration: 0.25,
    //     },
    //   },
    //   {
    //     breakpoint: 1000,
    //     settings: {
    //       slidesToShow: 4,
    //       slidesToScroll: 4,
    //       duration: 0.25,
    //     },
    //   },
    // ],
  });
});
