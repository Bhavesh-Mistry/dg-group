$(document).ready(function () {
  // Show the preloader initially
  // $("#page-preloader").show();

  // Hide the preloader 
  // setTimeout(function () {
  //   $("#page-preloader").hide();
  //   $("body").css("visibility", "visible");
  // }, 2000);

  /*Image Gallery slider */
  $(".ts-items-bx").slick({
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  /*testimonials slider */
  $(".cst-slider").slick({
    dots: false,
    infinite: false,
    speed: 1800,
    autoplay: false,
    autoplaySpeed: 1800,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    arrows: true,
    fade: true,
    // responsive: [
    //   {
    //     breakpoint: 1199,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 991,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 575,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  });

  /* back to top */
  $("#toTop").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 1200);
  });
});

/*sticky header*/
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 50) {
    $("header.navbar").addClass("darkHeader");
    $(".btnBacktotop").addClass("active");
  } else {
    $("header.navbar").removeClass("darkHeader");
    $(".btnBacktotop").removeClass("active");
  }
});

