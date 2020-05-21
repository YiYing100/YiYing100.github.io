(function () {
    // 按鈕事件
    var current_page = 0;
    $('#btn_next').click(function () {
        switch (current_page) {
            case 0:
                $('.hardcover_front').addClass('turn');
                current_page++;
                break;
            case 1:
                $('#page1').addClass('turn')
                current_page++;
                break;
            case 2:
                $('#page2').addClass('turn')
                current_page++;
                break;
            case 3:
                $('#page3').addClass('turn')
                current_page++;
                break;
            // case 4:
            //     $('#page4').addClass('turn')
            //     current_page++;
            //     break;
            // case 5:
            //     $('#page5').addClass('turn')
            //     current_page++;
            //     break;
        }

    })
    $('#btn_perv').click(function () {
        switch (current_page) {
            case 1:
                $('.hardcover_front').removeClass('turn');
                current_page--;
                break;
            case 2:
                $('#page1').removeClass('turn')
                current_page--;
                break;
            case 3:
                $('#page2').removeClass('turn')
                current_page--;
                break;
            case 4:
                $('#page3').removeClass('turn')
                current_page--;
                break;
            // case 5:
            //     $('#page4').removeClass('turn')
            //     current_page--;
            //     break;
            // case 6:
            //     $('#page5').removeClass('turn')
            //     current_page--;
            //     break;
        }
    })


    window.setTimeout((begin_event), 5000)



    function begin_event() {

        document.querySelector('.bookspace').classList.add('moving')
        document.querySelector('.bookspace').classList.remove('start')
        document.querySelector('.bookspace').addEventListener('transitionend', remove_moving)
        function remove_moving(e) {

            if ((' ' + e.target + ' ').indexOf('bookspacke')) {
                window.setTimeout(() => { document.querySelector('.bookspace').classList.remove('moving') }, 2000)
                document.querySelector('.bookspace').removeEventListener('transitionend', remove_moving)
            }
        }

        document.querySelector('.hardcover_back').click()
    }

    let begin_tab = document.querySelector('.begin_tab')
    let tab_his = document.querySelector('.tab_his')
    let tab_1 = document.querySelector('.tab_1')
    let tab_2 = document.querySelector('.tab_2')
    let tab_3 = document.querySelector('.tab_3')
    let page = document.querySelector('.page')
    // **************下一頁***************
    document.querySelector('.hardcover_back').addEventListener('click', function () {
        switch (current_page) {
            case 0:
                $('.hardcover_front').addClass('turn');

                document.querySelector('.bookspace').classList.add('moving')
                document.querySelector('.bookspace').classList.remove('start')

                begin_tab.classList.add('changing')
                begin_tab.classList.add('hidding')
                begin_tab.addEventListener('transitionend', page_hidding_end0)
                function page_hidding_end0() {
                    begin_tab.classList.add('hide')
                    begin_tab.classList.remove('changing')
                    document.querySelector('.bookspace').classList.remove('moving')
                    begin_tab.removeEventListener('transitionend', page_hidding_end0)
                }

                current_page++;

                tab_his.classList.add('changing')
                tab_his.classList.remove('hide')
                window.setTimeout(() => { tab_his.classList.remove('hidding') }, 1)

                tab_his.addEventListener('transitionend', page_hidding_end0_1)
                function page_hidding_end0_1() {
                    tab_his.classList.remove('changing')
                    tab_his.removeEventListener('transitionend', page_hidding_end0_1)
                }
                break;
            case 1:
                $('#page1').addClass('turn')

                tab_his.classList.add('changing')
                tab_his.classList.add('hidding')
                tab_his.addEventListener('transitionend', page_hidding_end1)
                function page_hidding_end1() {
                    tab_his.classList.add('hide')
                    tab_his.classList.remove('changing')
                    tab_his.removeEventListener('transitionend', page_hidding_end1)
                }

                current_page++;

                tab_1.classList.add('changing')
                tab_1.classList.remove('hide')
                window.setTimeout(() => { tab_1.classList.remove('hidding') }, 1)

                tab_1.addEventListener('transitionend', page_hidding_end1_1)
                function page_hidding_end1_1() {
                    tab_1.classList.remove('changing')
                    tab_1.removeEventListener('transitionend', page_hidding_end1_1)
                }

                break;
            case 2:
                $('#page2').addClass('turn')

                tab_1.classList.add('changing')
                tab_1.classList.add('hidding')
                tab_1.addEventListener('transitionend', page_hidding_end2)
                function page_hidding_end2() {
                    tab_1.classList.add('hide')
                    tab_1.classList.remove('changing')
                    tab_1.removeEventListener('transitionend', page_hidding_end2)
                }

                current_page++;

                tab_2.classList.add('changing')
                tab_2.classList.remove('hide')
                window.setTimeout(() => { tab_2.classList.remove('hidding') }, 1)

                tab_2.addEventListener('transitionend', page_hidding_end2_1)
                function page_hidding_end2_1() {
                    tab_2.classList.remove('changing')
                    tab_2.removeEventListener('transitionend', page_hidding_end2_1)
                }
                break;
            case 3:
                $('#page3').addClass('turn')

                tab_2.classList.add('changing')
                tab_2.classList.add('hidding')
                tab_2.addEventListener('transitionend', page_hidding_end3)
                function page_hidding_end3() {
                    tab_2.classList.add('hide')
                    tab_2.classList.remove('changing')
                    tab_2.removeEventListener('transitionend', page_hidding_end3)
                }

                current_page++;

                tab_3.classList.add('changing')
                tab_3.classList.remove('hide')
                window.setTimeout(() => { tab_3.classList.remove('hidding') }, 1)

                tab_3.addEventListener('transitionend', page_hidding_end3_1)
                function page_hidding_end3_1() {
                    tab_3.classList.remove('changing')
                    tab_3.removeEventListener('transitionend', page_hidding_end3_1)
                }
                break;
        }
    })
    // **************上一頁***************
    document.querySelector('.hardcover_front').addEventListener('click', function () {
        switch (current_page) {
            case 1:
                $('.hardcover_front').removeClass('turn');

                document.querySelector('.bookspace').classList.add('moving')
                document.querySelector('.bookspace').classList.add('start')
                tab_his.classList.add('changing')
                tab_his.classList.add('hidding')
                tab_his.addEventListener('transitionend', page_hidding_end_b1)
                function page_hidding_end_b1() {
                    tab_his.classList.add('hide')
                    tab_his.classList.remove('changing')
                    document.querySelector('.bookspace').classList.remove('moving')
                    tab_his.removeEventListener('transitionend', page_hidding_end_b1)
                }
                current_page--;

                begin_tab.classList.add('changing')
                begin_tab.classList.remove('hide')
                window.setTimeout(() => { begin_tab.classList.remove('hidding') }, 1)

                begin_tab.addEventListener('transitionend', page_hidding_end_b1_2)
                function page_hidding_end_b1_2() {
                    begin_tab.classList.remove('changing')
                    begin_tab.removeEventListener('transitionend', page_hidding_end_b1_2)
                }

                break;
            case 2:
                $('#page1').removeClass('turn')

                tab_1.classList.add('changing')
                tab_1.classList.add('hidding')
                tab_1.addEventListener('transitionend', page_hidding_end_b2)
                function page_hidding_end_b2() {
                    tab_1.classList.add('hide')
                    tab_1.classList.remove('changing')
                    tab_1.removeEventListener('transitionend', page_hidding_end_b2)
                }
                current_page--;

                tab_his.classList.add('changing')
                tab_his.classList.remove('hide')
                window.setTimeout(() => { tab_his.classList.remove('hidding') }, 1)

                tab_his.addEventListener('transitionend', page_hidding_end_b2_2)
                function page_hidding_end_b2_2() {
                    tab_his.classList.remove('changing')
                    tab_his.removeEventListener('transitionend', page_hidding_end_b2_2)
                }

                break;
            case 3:
                $('#page2').removeClass('turn')

                tab_2.classList.add('changing')
                tab_2.classList.add('hidding')
                tab_2.addEventListener('transitionend', page_hidding_end_b3)
                function page_hidding_end_b3() {
                    tab_2.classList.add('hide')
                    tab_2.classList.remove('changing')
                    tab_2.removeEventListener('transitionend', page_hidding_end_b3)
                }
                current_page--;

                tab_1.classList.add('changing')
                tab_1.classList.remove('hide')
                window.setTimeout(() => { tab_1.classList.remove('hidding') }, 1)

                tab_1.addEventListener('transitionend', page_hidding_end_b3_2)
                function page_hidding_end_b3_2() {
                    tab_1.classList.remove('changing')
                    tab_1.removeEventListener('transitionend', page_hidding_end_b3_2)
                }
                break;
            case 4:
                $('#page3').removeClass('turn')


                tab_3.classList.add('changing')
                tab_3.classList.add('hidding')
                tab_3.addEventListener('transitionend', page_hidding_end_b4)
                function page_hidding_end_b4() {
                    tab_3.classList.add('hide')
                    tab_3.classList.remove('changing')
                    tab_3.removeEventListener('transitionend', page_hidding_end_b4)
                }
                current_page--;

                tab_2.classList.add('changing')
                tab_2.classList.remove('hide')
                window.setTimeout(() => { tab_2.classList.remove('hidding') }, 1)

                tab_2.addEventListener('transitionend', page_hidding_end_b4_2)
                function page_hidding_end_b4_2() {
                    tab_2.classList.remove('changing')
                    tab_2.removeEventListener('transitionend', page_hidding_end_b4_2)
                }
                break;
        }
    })

    // more按鈕
    document.querySelectorAll('.buttom_area').forEach(element => {
        element.addEventListener('click', function () {

            document.querySelector('.nav_pic_text').classList.add('show')
            document.querySelector('.nav_pic').classList.add('show')
            document.querySelector('.nav').classList.add('full')
            window.setTimeout(function () {
                switch (element.dataset.btn) {
                    case 'tab_1':
                        document.location.href = "../swiper1/swiper1.html"
                        break;
                    case 'tab_2':
                        document.location.href = "../swiper2/swiper2.html"
                        break;
                    case 'tab_3':
                        document.location.href = "../swiper3/swiper3.html"
                        break;
                }
            }, 1000)
        })
    })
    // 手機more按鈕
    document.querySelectorAll('.tab .left_area .bottom_block .btn_more').forEach(element => {
        element.addEventListener('click', function () {
            document.querySelector('.phone_list').classList.remove('hide')
            document.querySelector('.phone_list').classList.add('longer')

            window.setTimeout(function () {
                document.querySelector('.phone_list').classList.remove('hidding')
            }, 10)
            window.setTimeout(function () {
                switch (element.dataset.btn) {
                    case 'tab_1':
                        document.location.href = "../swiper1/swiper1.html"
                        break;
                    case 'tab_2':
                        document.location.href = "../swiper2/swiper2.html"
                        break;
                    case 'tab_3':
                        document.location.href = "../swiper3/swiper3.html"
                        break;
                }
            }, 1000)
        })
    })


    // 書本大小改變
    resize_book()
    $(window).resize(resize_book);

    function resize_book() {
        if (document.body.clientWidth > 1400) {
            // console.log($('.tab .left_area').width());
            if (document.body.clientWidth * 0.292 < 540) {
                $(".bookspace").css("width", document.body.clientWidth * 0.292);
                $(".bookspace").css("height", document.body.clientWidth * 0.292 * 0.738);
            }
        } else if (document.body.clientWidth > 1200) {
            $(".bookspace").css("width", 425)
            $(".bookspace").css("height", 279)
        } else if (document.body.clientWidth > 768) {
            $(".bookspace").css("width", 372)
            $(".bookspace").css("height", 260)
        } else if (document.body.clientWidth > 500) {
            $(".bookspace").css("width", 302)
            $(".bookspace").css("height", 211)
        } else if (document.body.clientWidth <= 500) {
            $(".bookspace").css("width", 171)
            $(".bookspace").css("height", 120)
        }
    }
})()