$('.navigation-item').click(function (event) {
    $('.navigation-btn-burger').toggleClass('show');
    $('.header-menu-items').toggleClass('hidden');
});

$('.header-link').click(function (event) {
    $('.header-menu-items').toggleClass('hidden');
    $('.navigation-btn-burger').toggleClass('show');
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
            breakpoint: 992,
           settings: {
           slidesToShow: 1,
           }
       },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            }
        },
        {
            breakpoint: 576,
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