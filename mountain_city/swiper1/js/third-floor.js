$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

let all_contents = document.querySelectorAll('.all_content');
all_contents.forEach(content => {
  content.addEventListener('click', function () {
    var width = $(window).width();
    var bo_right_width = $('.bo_right').width();
    var bo_box_width = $('.bo_box').width();
    if (width > 991) {
      var left_width = (width / 4);
      var all_width = left_width + bo_right_width + bo_box_width + 35;
      if (all_width > (width / 2)) {
        left_width = left_width - (all_width - (width / 2));
        $('.bo_left').css('width', left_width);
      } else {
        $('.bo_left').css('width', left_width);
      }
    } else if (width <= 991 & width >= 320) {
      var left_width = (width / 2);
      var all_width = left_width + bo_right_width + bo_box_width + 35;
      if (all_width > width) {
        left_width = left_width - (all_width - width);
        $('.bo_left').css('width', left_width);
      } else {
        $('.bo_left').css('width', left_width);
      }
    } else {
      $('.bo_left').css('width', 19);
    }
  })
});



// 按鈕按下偵測螢幕寬度//
// $('.all_content').click(function () {
//   if (width > 991) {
//     var left_width = (width / 4) - 25;
//     $('.bo_left').css('width', left_width)
//   } else if (width <= 991 & width >= 320) {
//     var left_width = width - bo_box_width - bo_right_width - 50
//     $('.bo_left').css('width', left_width)
//   } else {
//     $('.bo_left').css('width', 19)
//   }

// });

// 以下變動解析度時會自動偵測螢幕寬度//

$(document).ready(function () {
  $(window).resize(function () {
    var width = $(window).width();
    var bo_right_width = $('.bo_right').width();
    var bo_box_width = $('.bo_box').width();
    if (width > 991) {
      var left_width = (width / 4);
      var all_width = left_width + bo_right_width + bo_box_width + 35;
      if (all_width > (width / 2)) {
        left_width = left_width - (all_width - (width / 2));
        $('.bo_left').css('width', left_width);
      } else {
        $('.bo_left').css('width', left_width);
      }
    } else if (width <= 991 & width >= 320) {
      var left_width = (width / 2);
      var all_width = left_width + bo_right_width + bo_box_width + 35;
      if (all_width > width) {
        left_width = left_width - (all_width - width);
        $('.bo_left').css('width', left_width);
      } else {
        $('.bo_left').css('width', left_width);
      }
    } else {
      $('.bo_left').css('width', 19);
    }

  });
});




