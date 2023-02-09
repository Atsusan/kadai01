// ドロワーメニューの実装

$(function() {
    $('#toggle').on('click', function() {
        $(this).toggleClass('open');
    });
});

// Topへ戻る

$(function() {
    var pagetop = $('#page-top');
    pagetop.hide();
    $(window).scroll(function() {
        if($(this).scrollTop() > 70) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function() {
        $('body, html').animate({scrollTop: 0}, 500);
        return false;
    });
});


// モーダルウィンドウ

$('.js-list, .js-image > img').click(function() {
    var srcA = $(this).attr('src');

    $('.modal-overlay').fadeIn();
    $('.modal-overlay').css('display', 'flex');
    
    $('#popup').attr('src', srcA);
});
$('.modal-img-box > span, .modal-overlay').click(function() {
    $('.modal-overlay').css('display','none');
});