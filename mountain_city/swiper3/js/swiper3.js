(function () {
  var bg = document.querySelector(".item-bg");
  var items = document.querySelectorAll(".news__item");
  var item = document.querySelector(".news__item");

  // function cLog(content) {
  //   console.log(content);
  // }

  if ($(window).width() > 800) {
    $(document).on("mouseover", ".news__item", function (_event, _element) {
      var newsItem = document.querySelectorAll(".news__item");
      newsItem.forEach(function (element, index) {
        element.addEventListener("mouseover", function () {
          var x = this.getBoundingClientRect().left;
          var y = this.getBoundingClientRect().top;
          var width = this.getBoundingClientRect().width;
          var height = this.getBoundingClientRect().height;

          $(".item-bg").addClass("active");
          $(".news__item").removeClass("active");
          // $('.news__item').removeClass('active');

          bg.style.width = width + "px";
          bg.style.height = height + "px";
          bg.style.transform =
            "translateX(" + x + "px ) translateY(" + y + "px)";
        });

        element.addEventListener("mouseleave", function () {
          $(".item-bg").removeClass("active");
          $(".news__item").removeClass("active");
        });
      });
    });
  }

  var swiper = new Swiper(".news-slider", {
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    keyboard: true,
    spaceBetween: 0,
    slidesPerView: "auto",
    speed: 300,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 3,
      slideShadows: false,
    },
    breakpoints: {
      480: {
        spaceBetween: 0,
        // centeredSlides: true,
      },
    },
    simulateTouch: true,
    navigation: {
      nextEl: ".news-slider-next",
      prevEl: ".news-slider-prev",
    },
    pagination: {
      el: ".news-slider__pagination",
      clickable: true,
    },
    resizeReInit: true,
    on: {
      init: function () {
        var activeItem = document.querySelector(".swiper-slide-active");
        var sliderItem = activeItem.querySelector(".news__item");
        $(".swiper-slide-active .news__item").addClass("active");
        var x = sliderItem.getBoundingClientRect().left;
        var y = sliderItem.getBoundingClientRect().top;
        var width = sliderItem.getBoundingClientRect().width;
        var height = sliderItem.getBoundingClientRect().height;
        $(".item-bg").addClass("active");
        bg.style.width = width + "px";
        bg.style.height = height + "px";
        bg.style.transform = "translateX(" + x + "px ) translateY(" + y + "px)";
      }
    },
  });

 

  swiper.on("touchEnd", function () {
    $(".news__item").removeClass("active");
    $(".swiper-slide-active .news__item").addClass("active");

    
  });

  swiper.on("slideChange", function () {
    $(".news__item").removeClass("active");
  });

  swiper.on("slideChangeTransitionEnd", function () {
    $(".news__item").removeClass("active");
    var activeItem = document.querySelector(".swiper-slide-active");
    var sliderItem = activeItem.querySelector(".news__item");
    $(".swiper-slide-active .news__item").addClass("active");
    var x = sliderItem.getBoundingClientRect().left;
    var y = sliderItem.getBoundingClientRect().top;
    var width = sliderItem.getBoundingClientRect().width;
    var height = sliderItem.getBoundingClientRect().height;
    $(".item-bg").addClass("active");
    bg.style.width = width + "px";
    bg.style.height = height + "px";
    bg.style.transform = "translateX(" + x + "px ) translateY(" + y + "px)";
  });

  let third_6 = document.querySelector(".third_6");
  let third_7 = document.querySelector(".third_7");
  let third_8 = document.querySelector(".third_8");
  let third_9 = document.querySelector(".third_9");
  let third_10 = document.querySelector(".third_10");
  let third_5 = document.querySelector(".third_5");
  let third_content = document.querySelectorAll(".third_content");
  third_content[0].addEventListener("click", third_content6);
  third_content[1].addEventListener("click", third_content7);
  third_content[2].addEventListener("click", third_content8);
  third_content[3].addEventListener("click", third_content9);
  third_content[4].addEventListener("click", third_content10);
  third_content[5].addEventListener("click", third_content5);
  third_content[6].addEventListener("click", third_content6);
  third_content[7].addEventListener("click", third_content7);
  third_content[8].addEventListener("click", third_content8);
  third_content[9].addEventListener("click", third_content9);
  third_content[10].addEventListener("click", third_content10);
  third_content[11].addEventListener("click", third_content5);
  third_content[12].addEventListener("click", third_content6);
  third_content[13].addEventListener("click", third_content7);
  third_content[14].addEventListener("click", third_content8);
  third_content[15].addEventListener("click", third_content9);
  third_content[16].addEventListener("click", third_content10);
  third_content[17].addEventListener("click", third_content5);

  function third_content6() {
    third_6.click();
  }
  function third_content7() {
    third_7.click();
  }
  function third_content8() {
    third_8.click();
  }
  function third_content9() {
    third_9.click();
  }
  function third_content10() {
    third_10.click();
  }
  function third_content5() {
    third_5.click();
  }
})();
