; (function () {
  let swiper_slide = document.querySelectorAll('.swiper-slide');
  console.log(swiper_slide);
  
  let page1 = document.querySelector('.page1');
  let page2 = document.querySelector('.page2');
  let page3 = document.querySelector('.page3');
  let page4 = document.querySelector('.page4');
  let page5 = document.querySelector('.page5');
  let page6 = document.querySelector('.page6');
  let page7 = document.querySelector('.page7');

  let btn_page1 = document.querySelector('.btn_page1');
  let btn_page2 = document.querySelector('.btn_page2');
  let btn_page3 = document.querySelector('.btn_page3');
  let btn_page4 = document.querySelector('.btn_page4');
  let btn_page5 = document.querySelector('.btn_page5');
  let btn_page6 = document.querySelector('.btn_page6');
  let btn_page7 = document.querySelector('.btn_page7');

  page1.addEventListener('click', click_page1);
  page2.addEventListener('click', click_page2);
  page3.addEventListener('click', click_page3);
  page4.addEventListener('click', click_page4);
  page5.addEventListener('click', click_page5);
  page6.addEventListener('click', click_page6);
  page7.addEventListener('click', click_page7);
  
  $(".thumb_content").on("click",".page1",function(){
    btn_page1.click()
  });
  
  function click_page1() {
    btn_page1.click()
  }
  function click_page2() {
    btn_page2.click()
  }
  function click_page3() {
    btn_page3.click()
  }
  function click_page4() {
    btn_page4.click()
  }
  function click_page5() {
    btn_page5.click()
  }
  function click_page6() {
    btn_page6.click()
  }
  function click_page7() {
    btn_page7.click()
  }

  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  $('.modal').on('hidden.bs.modal', function (e) {
    galleryThumbs.update();
  })

  let targetIndex;
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 50,
    slidesPerView: 6,
    direction: 'vertical',
    // preventClicksPropagation:false,
    simulateTouch: true,
    clickable: true,
    slideToClickedSlide: true,
    // preventClicks: false,
    centeredSlides: true,
    initialSlide: 0,
    autoplay: {
      delay: 2000
    },
    observer: true,
    observeParents: true,
    loop: true
  });

  var galleryTop = new Swiper('.gallery-top', {
    effect: 'fade',
    initialSlide: 0
  });

  galleryThumbs.on("slideChangeTransitionStart", function () {
    targetIndex = Number(galleryThumbs.realIndex);
    galleryTop.slideTo(targetIndex, 700, true);
  })

  galleryThumbs.on('click', function () {
    targetIndex = Number(galleryThumbs.realIndex);
    galleryTop.slideTo(targetIndex, 700, true);
  })
 
  $(".swiper-wrapper").on("click",".swiper-slide",function(){
});
  
// $(".swiper-wrapper").delegate("swiper-slide","click",function(){
  

// });
})();