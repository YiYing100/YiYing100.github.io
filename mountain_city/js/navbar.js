(function () {

    //剛進入頁面如果NAVBAR是FULL的話收起來
    // PC版
    if ($('.nav').hasClass('full')) {
        document.querySelector('.nav_pic_text').classList.add('show')
        document.querySelector('.nav_pic').classList.add('show')
    }
    window.setTimeout(() => {
        if ($('.nav').hasClass('full')) {
            $('.nav').removeClass('full')
            document.querySelector('.nav').addEventListener('transitionend', remove_show)

            function remove_show() {
                document.querySelector('.nav_pic_text').classList.remove('show')
                document.querySelector('.nav_pic').classList.remove('show')
                document.querySelector('.nav').removeEventListener('transitionend', remove_show)
            }
        }
    }, 300)

    // 平板版
    window.setTimeout(() => {
        if ( !$('.phone_list').hasClass('hide')) {
            // 加長，不然動畫時會露出後面畫面
            document.querySelector('.phone_list').classList.add('longer')
            $('.phone_list').addClass('hidding')

            if (document.body.offsetWidth > 768){
                $('.phone_list').addClass('hide')
                $('.phone_list').removeClass('longer')
            }
 

            document.querySelector('.phone_list').addEventListener('transitionend', add_hide)
            function add_hide(e) {
                if (e.propertyName == 'transform') {
                    $('.phone_list').addClass('hide')
                    document.querySelector('.phone_list').removeEventListener('transitionend', add_hide)
                }
            }
            // 移除加長
            document.querySelector('.phone_list').addEventListener('transitionend', remove_longer)

        }
    }, 500)




    // 展開
    document.querySelector('.ham_bar').addEventListener('click', function () {
        document.querySelector('.nav').classList.add('open')
        document.querySelector('.ham_bar').classList.add('hide')
        document.querySelector('.nav_back').classList.add('show')

        document.querySelector('.phone_list').classList.remove('hidding')
        document.querySelector('.phone_list').classList.remove('hide')
        $('.phone_bar_line').addClass('close')
    })
    // 縮起
    document.querySelector('.nav_back').addEventListener('click', function () {
        document.querySelector('.nav').classList.remove('open')
        document.querySelector('.ham_bar').classList.remove('hide')
        document.querySelector('.nav_back').classList.remove('show')
        
        document.querySelector('.phone_list').classList.add('hidding')
        document.querySelector('.phone_list').classList.add('hide')
        $('.phone_bar_line').removeClass('close')
    })

    document.querySelectorAll('.nav ul li').forEach(element => {
        element.addEventListener('click', function () {
            document.querySelector('.nav_pic_text').classList.add('show')
            document.querySelector('.nav_pic').classList.add('show')
            document.querySelector('.nav').classList.add('full')

            document.querySelector('.nav').addEventListener('transitionend', function (e) {
                // width動畫結束才跳頁
                if (e.propertyName === 'width') {
                    switch (element.dataset.item) {
                        case '1':
                            document.location.href = "./index.html"
                            break;
                        case '2':
                            document.location.href = "./page2.html"
                            break;
                        case '3':
                            document.location.href = ""
                            break;
                        case '4':
                            document.location.href = ""
                            break;
                        default:
                            document.location.href = "./index.html"
                            break;
                    }
                }
            })
        })
    })



    //----------------------------手機板NAV-----------------------------------
    document.querySelector('.phone_ham_bar').addEventListener('click', function () {
        if ($('.phone_list').hasClass("hide")) {
            // 加長，不然動畫時會露出後面畫面
            document.querySelector('.phone_list').classList.remove('hide')
            document.querySelector('.phone_list').classList.add('longer')
            
            window.setTimeout(function () {
                document.querySelector('.phone_list').classList.remove('hidding')
            }, 10)

            // 移除加長
            document.querySelector('.phone_list').addEventListener('transitionend', remove_longer)
            $('.phone_bar_line').addClass('close')
        } else {
            // 加長，不然動畫時會露出後面畫面
            document.querySelector('.phone_list').classList.add('longer')
            document.querySelector('.phone_list').classList.add('hidding')
            document.querySelector('.phone_list').addEventListener('transitionend', add_hide)

            function add_hide(e) {
                if (e.propertyName == 'transform') {
                    document.querySelector('.phone_list').classList.add('hide')
                    document.querySelector('.phone_list').removeEventListener('transitionend', add_hide)
                }
            }
            // 移除加長
            document.querySelector('.phone_list').addEventListener('transitionend', remove_longer)
            $('.phone_bar_line').removeClass('close')
        }
    })
    document.querySelector('.phone_nav .nav_back').addEventListener('click', function () {

        // 加長，不然動畫時會露出後面畫面
        document.querySelector('.phone_list').classList.add('longer')
        document.querySelector('.phone_list').classList.add('hidding')
        document.querySelector('.phone_list').addEventListener('transitionend', add_hide)
        function add_hide(e) {
            console.log(e)
            if (e.propertyName == 'transform') {
                document.querySelector('.phone_list').classList.add('hide')
                document.querySelector('.phone_list').removeEventListener('transitionend', add_hide)
            }
        }

        // 移除加長
        document.querySelector('.phone_list').addEventListener('transitionend', remove_longer)
        $('.phone_bar_line').removeClass('close')
    })


    document.querySelectorAll('.phone_nav ul li').forEach(element => {
        element.addEventListener('click', function () {
            console.log(element)
            switch (element.dataset.item) {
                case '1':
                    document.location.href = "./index.html"
                    break;
                case '2':
                    document.location.href = "./page2.html"
                    break;
                case '3':
                    document.location.href = ""
                    break;
                case '4':
                    document.location.href = ""
                    break;
                default:
                    document.location.href = "./index.html"
                    break;
            }
        })
    })


    // 移除加長
    function remove_longer(e) {
        if (e.propertyName == 'transform') {
            console.log(e)
            document.querySelector('.phone_list').classList.remove('longer')
            document.querySelector('.phone_list').removeEventListener('transitionend', remove_longer)
        }
    }

})()