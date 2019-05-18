$(window).on('load', function () {
    $('.jumbotron .container').addClass('load');
});

$('.smooth-scroll').on('click', function (e) {

    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen ybs
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'easeInOutExpo');

    e.preventDefault();

});


$(document).on('click', '[data-toggle="lightbox"]', function (e) {
    e.preventDefault();
    $(this).ekkoLightbox();
});

$(window).scroll(function () {
    var SUP = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform': 'translate(0px,' + SUP / 12 + '%)'
    });
    $('.jumbotron h1').css({
        'transform': 'translate(0px,' + SUP / 10 + '%)'
    });

    $('.jumbotron h3').css({
        'transform': 'translate(0px,' + SUP / 8 + '%)'
    });

    if (SUP > $('.portfolio').offset().top - 50) {
        $('.portfolio img').each(function (i) {
            setTimeout(function () {
                $('.portfolio .card').eq(i).addClass('load');
            }, 300 * (i + 1))
        });
    }
});