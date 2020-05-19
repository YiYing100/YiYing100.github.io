; (function () {
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })
    let donshi_new = document.querySelector('.donshi_new');
    let wulin = document.querySelector('.wulin');
    let shinse = document.querySelector('.shinse');
    let guguan = document.querySelector('.guguan');
    let donshi_bug = document.querySelector('.donshi_bug');
    let donshi_new2 = document.querySelector('.donshi_new2');
    let wulin2 = document.querySelector('.wulin2');;
    let shinse2 = document.querySelector('.shinse2');
    let guguan2 = document.querySelector('.guguan2');
    let donshi_bug2 = document.querySelector('.donshi_bug2');
    let page1 = document.querySelector('.page1');
    let page2 = document.querySelector('.page2');
    let page3 = document.querySelector('.page3');
    let page4 = document.querySelector('.page4');
    let page5 = document.querySelector('.page5');

    donshi_new2.addEventListener('click', click_page1);
    wulin2.addEventListener('click', click_page2);
    shinse2.addEventListener('click', click_page3);
    guguan2.addEventListener('click', click_page4);
    donshi_bug2.addEventListener('click', click_page5);
    donshi_new.addEventListener('click', click_page1);
    wulin.addEventListener('click', click_page2);
    shinse.addEventListener('click', click_page3);
    guguan.addEventListener('click', click_page4);
    donshi_bug.addEventListener('click', click_page5);
    
    function click_page1() {
        page1.click()
    }
    function click_page2() {
        page2.click()
    }
    function click_page3() {
        page3.click()
    }
    function click_page4() {
        page4.click()
    }
    function click_page5() {
        page5.click()
    }
})();