;(function () {
    function change_img_moutain() {
      img_scenes.forEach((img_scene) => {
        img_scene.classList.remove("active");
      });
      section1.setAttribute("style", "background-color:#2494a3");
      img_moutain.classList.add("active");
      firstPage.dispatchEvent(new Event("click"));
      color_slides.forEach((color_slide) => {
        color_slide.classList.remove("active");
      });
      slide_brown.classList.add("active");
      circle_color = "#2494a3";
      title.classList.remove("move2");
      title.classList.remove("move3");
      title.classList.remove("move4");
      title.classList.add("move1");
      title.classList.remove("move5");
      buttons.forEach((button) => {
        button.classList.remove("active");
      });
      button_moutain.classList.add("active");
      clearInterval(interval);
    }

    function change_img_sea() {
      img_scenes.forEach((img_scene) => {
        img_scene.classList.remove("active");
      });
      section1.setAttribute("style", "background-color:#314A78");
      img_sea.classList.add("active");
      secondPage.dispatchEvent(new Event("click"));
      color_slides.forEach((color_slide) => {
        color_slide.classList.remove("active");
      });
      slide_blue.classList.add("active");
      circle_color = "#314A78";
      title.classList.remove("move1");
      title.classList.remove("move3");
      title.classList.remove("move4");
      title.classList.add("move2");
      title.classList.remove("move5");
      buttons.forEach((button) => {
        button.classList.remove("active");
      });
      button_sea.classList.add("active");
      clearInterval(interval);
    }

    function change_img_sky() {
      img_scenes.forEach((img_scene) => {
        img_scene.classList.remove("active");
      });
      section1.setAttribute("style", "background-color:#f7c443");
      img_sky.classList.add("active");
      thirdPage.dispatchEvent(new Event("click"));
      color_slides.forEach((color_slide) => {
        color_slide.classList.remove("active");
      });
      slide_purple.classList.add("active");
      circle_color = "#f7c443";
      title.classList.remove("move1");
      title.classList.remove("move2");
      title.classList.remove("move4");
      title.classList.add("move3");
      title.classList.remove("move5");
      buttons.forEach((button) => {
        button.classList.remove("active");
      });
      button_sky.classList.add("active");
      clearInterval(interval);

    }

    function change_img_dessert() {
      img_scenes.forEach((img_scene) => {
        img_scene.classList.remove("active");
      });
      section1.setAttribute("style", "background-color:#2C325A;");
      img_desert.classList.add("active");
      fourthPage.dispatchEvent(new Event("click"));
      color_slides.forEach((color_slide) => {
        color_slide.classList.remove("active");
      });
      slide_yellow.classList.add("active");
      circle_color = "#2C325A";
      title.classList.remove("move1");
      title.classList.remove("move2");
      title.classList.remove("move3");
      title.classList.add("move4");
      title.classList.remove("move5");
      buttons.forEach((button) => {
        button.classList.remove("active");
      });
      button_desert.classList.add("active");
      clearInterval(interval);

    }

    function change_img_deepsea() {
      img_scenes.forEach((img_scene) => {
        img_scene.classList.remove("active");
      });
      section1.setAttribute("style", "background-color:#56BDA3");
      img_deepsea.classList.add("active");
      circle_color = "#56BDA3";
      fifthPage.dispatchEvent(new Event("click"));
      color_slides.forEach((color_slide) => {
        color_slide.classList.remove("active");
      });
      slide_deepblue.classList.add("active");
      title.classList.remove("move1");
      title.classList.remove("move2");
      title.classList.remove("move3");
      title.classList.remove("move4");
      title.classList.add("move5");
      buttons.forEach((button) => {
        button.classList.remove("active");
      });
      button_deepsea.classList.add("active");
      clearInterval(interval);
    }

    // 擷取圖片
    let svg = document.querySelector("svg");
    let img_scenes = document.querySelectorAll(".img_scene");
    let img_moutain = document.querySelector(".img_moutain");
    let img_sea = document.querySelector(".img_sea");
    let img_sky = document.querySelector(".img_sky");
    let img_desert = document.querySelector(".img_desert");
    let img_deepsea = document.querySelector('.img_deepsea')
    let color_slides = document.querySelectorAll(".color_slide");
    let slide_brown = document.querySelector(".brown");
    let slide_blue = document.querySelector(".blue");
    let slide_purple = document.querySelector(".purple");
    let slide_yellow = document.querySelector(".yellow");
    let slide_deepblue = document.querySelector('.deepblue')
    let title = document.querySelector(".titles");



    // 擷取按鈕
    let buttons = document.querySelectorAll(".button");
    let button_moutain = document.querySelector(".button_img_moutain");
    let button_sea = document.querySelector(".button_img_sea");

    let button_sky = document.querySelector(".button_img_sky");
    let button_desert = document.querySelector(".button_img_desert");
    let button_deepsea = document.querySelector(".button_img_deepsea");




    // 切換各圖片
    button_moutain.addEventListener("click", change_img_moutain);
    button_sea.addEventListener("click", change_img_sea);
    button_sky.addEventListener("click", change_img_sky);
    button_desert.addEventListener("click", change_img_dessert);
    button_deepsea.addEventListener("click", change_img_deepsea);

    //canvas
    let width = document.body.clientWidth;
    let height = document.body.offsetHeight;
    let circle_color = "#2494a3";
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    let mouse = {
      x: 0,
      y: 0,
    };

    window.addEventListener("mousemove", (event) => {
      mouse.x = event.pageX;
      mouse.y = event.pageY;
    });

    window.addEventListener('resize', resize);
    function resize() {
      width = document.body.clientWidth;
      return width
    }
    window.addEventListener('resize', canvasWidth);
    function canvasWidth() {
      canvas.width = window.innerWidth;
      return canvas.width
    }

    window.addEventListener('resize', canvasHeight);
    function canvasHeight() {
      canvas.height = window.innerHeight;
      return canvas.height
    }


    function draw() {
      //先清掉cvanvas目前繪製的圖形
      ctx.clearRect(0, 0, canvasWidth(), canvasHeight());
      ctx.beginPath();
      ctx.arc(
        resize() / 3.1 + mouse.x / 5,
        height / 2.4 + mouse.y / 5,
        250,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = circle_color;
      ctx.fill();
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);

    let autoplay = document.querySelectorAll('.autoplay')
    autoplay[0].addEventListener('click',autoplay0)
    autoplay[1].addEventListener('click',autoplay1)
    autoplay[2].addEventListener('click',autoplay2)
    autoplay[3].addEventListener('click',autoplay3)
    autoplay[4].addEventListener('click',autoplay4)
    
    
    
    //自動輪播
    let counter = 0
    let buttonsCount = buttons.length
    interval = window.setInterval(showNext, 3000);  // 設定循環

    // 帶入目前要顯示第幾張圖 
    let showCurrent = function () {
      let itemToShow = Math.abs(counter % buttonsCount); // 取餘數才能無限循環
      autoplay[itemToShow].click();
    };
    function showNext() {
      counter++;
      showCurrent();
    }
    function showPrev() {
      counter--;
      showCurrent();
    }

    function autoplay0() {
      img_scenes.forEach((img_scene) => {
        img_scene.classList.remove("active");
      });
      section1.setAttribute("style", "background-color:#2494a3");
      img_moutain.classList.add("active");
      firstPage.dispatchEvent(new Event("click"));
      color_slides.forEach((color_slide) => {
        color_slide.classList.remove("active");
      });
      slide_brown.classList.add("active");
      circle_color = "#2494a3";
      title.classList.remove("move2");
      title.classList.remove("move3");
      title.classList.remove("move4");
      title.classList.add("move1");
      title.classList.remove("move5");
      buttons.forEach((button) => {
        button.classList.remove("active");
      });
      button_moutain.classList.add("active");
    }

    function autoplay1() {
      img_scenes.forEach((img_scene) => {
        img_scene.classList.remove("active");
      });
      section1.setAttribute("style", "background-color:#314A78");
      img_sea.classList.add("active");
      secondPage.dispatchEvent(new Event("click"));
      color_slides.forEach((color_slide) => {
        color_slide.classList.remove("active");
      });
      slide_blue.classList.add("active");
      circle_color = "#314A78";
      title.classList.remove("move1");
      title.classList.remove("move3");
      title.classList.remove("move4");
      title.classList.add("move2");
      title.classList.remove("move5");
      buttons.forEach((button) => {
        button.classList.remove("active");
      });
      button_sea.classList.add("active");

    }

    function autoplay2() {
      img_scenes.forEach((img_scene) => {
        img_scene.classList.remove("active");
      });
      section1.setAttribute("style", "background-color:#f7c443");
      img_sky.classList.add("active");
      thirdPage.dispatchEvent(new Event("click"));
      color_slides.forEach((color_slide) => {
        color_slide.classList.remove("active");
      });
      slide_purple.classList.add("active");
      circle_color = "#f7c443";
      title.classList.remove("move1");
      title.classList.remove("move2");
      title.classList.remove("move4");
      title.classList.add("move3");
      title.classList.remove("move5");
      buttons.forEach((button) => {
        button.classList.remove("active");
      });
      button_sky.classList.add("active");

    }

    function autoplay3() {
      img_scenes.forEach((img_scene) => {
        img_scene.classList.remove("active");
      });
      section1.setAttribute("style", "background-color:#2C325A;");
      img_desert.classList.add("active");
      fourthPage.dispatchEvent(new Event("click"));
      color_slides.forEach((color_slide) => {
        color_slide.classList.remove("active");
      });
      slide_yellow.classList.add("active");
      circle_color = "#2C325A";
      title.classList.remove("move1");
      title.classList.remove("move2");
      title.classList.remove("move3");
      title.classList.add("move4");
      title.classList.remove("move5");
      buttons.forEach((button) => {
        button.classList.remove("active");
      });
      button_desert.classList.add("active");
    }

    function autoplay4() {
      img_scenes.forEach((img_scene) => {
        img_scene.classList.remove("active");
      });
      section1.setAttribute("style", "background-color:#56BDA3");
      img_deepsea.classList.add("active");
      circle_color = "#56BDA3";
      fifthPage.dispatchEvent(new Event("click"));
      color_slides.forEach((color_slide) => {
        color_slide.classList.remove("active");
      });
      slide_deepblue.classList.add("active");
      title.classList.remove("move1");
      title.classList.remove("move2");
      title.classList.remove("move3");
      title.classList.remove("move4");
      title.classList.add("move5");
      buttons.forEach((button) => {
        button.classList.remove("active");
      });
      button_deepsea.classList.add("active");
    }
  }());