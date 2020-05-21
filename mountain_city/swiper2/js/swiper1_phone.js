; (function () {
    let dots = document.querySelectorAll('.dot');
    ///max-width:960px
    let section2 = document.querySelector('#section2')
    let img_scene2 = document.querySelectorAll('.img_scene2')
    let img2 = document.querySelector('.img2')
    let img_moutain2 = document.querySelector(".img_moutain2");
    let img_sea2 = document.querySelector(".img_sea2");
    let img_sky2 = document.querySelector(".img_sky2");
    let img_desert2 = document.querySelector(".img_desert2");
    let img_deepsea2 = document.querySelector('.img_deepsea2');
    let titles2 = document.querySelector('.titles2')
    let color_slide2 = document.querySelectorAll('.color_slide2')

    let mouse = { x: null, y: null };
    let last_mouse = { x: null, y: null };
    let distance_x; // 最後滑鼠x相差距離
    let distance_y;// 最後滑鼠y相差距離
    let current_page = 0

    // 取得最後座標
    section2.addEventListener('mousemove', function (e) {
        last_mouse.x = e.clientX
        last_mouse.y = e.clientY
    })

    //取得初始座標
    section2.addEventListener('mousedown', function (e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    })

    //mouseup
    section2.addEventListener('mouseup', function () {
        distance_x = last_mouse.x - mouse.x;
        if (distance_x > 10) {
            if (current_page <= 0) {
                current_page = current_page + 5
            }
            current_page--;
            img_scene2.forEach(img_scene => {
                img_scene.classList.remove('active')
            });
            img_scene2[current_page].classList.add('active');
        } else if (distance_x < 0) {
            if (current_page >= 4) {
                current_page = current_page - 5;
            }
            current_page++;
            img_scene2.forEach(img_scene => {
                img_scene.classList.remove('active')
            });
            img_scene2[current_page].classList.add('active');
        }

        //更換背景顏色,移動文字
        if (current_page === 1) {
            section2.classList.remove('brown')
            section2.classList.remove('yellow')
            section2.classList.remove('pueple')
            section2.classList.remove('deepblue')
            section2.classList.add('blue')
            titles2.classList.remove("move0");
            titles2.classList.remove("move2");
            titles2.classList.remove("move3");
            titles2.classList.remove("move4");
            titles2.classList.add("move1");
        }
        if (current_page === 2) {
            section2.classList.remove('brown');
            section2.classList.remove('blue');
            section2.classList.remove('pueple');
            section2.classList.remove('deepblue');
            section2.classList.add('yellow');
            titles2.classList.remove("move0");
            titles2.classList.remove("move1");
            titles2.classList.remove("move3");
            titles2.classList.remove("move4");
            titles2.classList.add("move2");
        }
        if (current_page === 3) {
            section2.classList.remove('brown');
            section2.classList.remove('yellow');
            section2.classList.remove('blue');
            section2.classList.remove('deepblue');
            section2.classList.add('pueple');
            titles2.classList.remove("move0");
            titles2.classList.remove("move2");
            titles2.classList.remove("move1");
            titles2.classList.remove("move4");
            titles2.classList.add("move3");
        }
        if (current_page === 4) {
            section2.classList.remove('brown');
            section2.classList.remove('yellow');
            section2.classList.remove('pueple');
            section2.classList.remove('blue');
            section2.classList.add('deepblue');
            titles2.classList.remove("move0");
            titles2.classList.remove("move2");
            titles2.classList.remove("move3");
            titles2.classList.remove("move1");
            titles2.classList.add("move4");
        }
        if (current_page === 0) {
            section2.classList.remove('blue');
            section2.classList.remove('yellow');
            section2.classList.remove('pueple');
            section2.classList.remove('deepblue');
            section2.classList.add('brown');
            titles2.classList.remove("move1");
            titles2.classList.remove("move2");
            titles2.classList.remove("move3");
            titles2.classList.remove("move4");
            titles2.classList.add("move0");
        }
        color_slide2.forEach((color_slide) => {
            color_slide.classList.remove("active");
        });
        color_slide2[current_page].classList.add("active");
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        dots[current_page].classList.add('active');
    })


}());
//mouseup