/* 메뉴 스크롤 */
$('#navbar > ul > li > a').click(function () {
    $('html, body').animate({
        scrollTop: $('#' + $(this).data('item')).position().top - 120
    }, 800);
});

/* 스크롤할때 메뉴 효과 */
$(document).scroll(function () {

    if ($(document).scrollTop() > $('#menu').position().top) {

        $('#header').css({
            "background-color": "white",
            "box-shadow": "0px 0px 5px #777",
            "color": "#222"
        });
    }

    if ($(document).scrollTop() <= $('#header').outerHeight() - $('#menu').outerHeight()) {

        $('#header').css({
            "background-color": "#ffecac",
            "box-shadow": "none",
            "color": "white"
        });

    }
});

/* back-to-top */
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});

$('.back-to-top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
    return false;
});
