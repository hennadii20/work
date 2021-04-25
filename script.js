//              Toggle menu

    $('.navigation__btn-burger').click(function (event) {
        $('.dropdown-menu, .header-svg, .header-wrapper-menu, .header-active').css("visibility", "visible");

        $('.navigation__btn-burger, .header-title').css("visibility", "hidden");
    });

    $('.header-svg, .menu-item-link').click(function (event) {
        $('.dropdown-menu, .header-svg, .header-active').css("visibility", "hidden");

        $('.navigation__btn-burger, .header-title').css("visibility", "visible");
    });

$(".recent-works-slider").slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    accessibility: false,
    dots: true,
    dotsClass: 'slick-dots slider__dots',
    prevArrow: $('.slick-arrow-prev'),
    nextArrow: $('.slick-arrow-next'),
    focusOnSelect: true,
    infinite: true,
    responsive: [
        {
             breakpoint: 768,
            settings: {
            slidesToShow: 1,
            }
        },
    ]
});



$(".slider").slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    swipeToSlide: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    accessibility: false,
    infinite: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            }
            },

        {
            breakpoint: 767,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            }
            },

        {
            breakpoint: 575,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
        }
    ]
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 1000) {
        $('#button').addClass('show');
  } else {
    $('#button').removeClass('show');
  }
});

$('#button').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 2000);
});