//menu
let tombolMenu = $('.tombol-menu');
let menu = $('nav .menu ul');

function klikMenu() {
  tombolMenu.click(function () {
    menu.toggle();
  });
  menu.click(function () {
    menu.toggle();
  });
}

$(document).ready(function () {
  let width = $(window).width();
  if (width < 990) {
    klikMenu();
  }
});

//chechk lebar
$(window).resize(function () {
  let width = $(window).width();
  if (width > 989) {
    menu.css('display', 'block');
  } else {
    menu.css('display', 'none');
  }
  klikMenu();
});

//efek scroll
$(document).ready(function () {
  let scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 0) {
      $('nav').addClass('putih');
      $('nav img.hitam').show();
      $('nav img.putih').hide();
    } else {
      $('nav').removeClass('putih');
      $('nav img.hitam').hide();
      $('nav img.').show();
    }
  });
});
