//              Toggle menu

const buttonToggle = document.querySelector("#dropdown-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");

function toggleDropdown (){
    if (buttonToggle.classList.contains("show")){
        buttonToggle.classList.remove("show"); 
    }else{
        buttonToggle.classList.add("show");
    }
    if (dropdownMenu.classList.contains("show")){
        dropdownMenu.classList.remove("show");
    }else{
        dropdownMenu.classList.add("show");
    }
}

function closeMenu(){
    buttonToggle.classList.remove("show");
    dropdownMenu.classList.remove("show");
} 
dropdownMenu.addEventListener("mouseup", closeMenu);
dropdownMenu.addEventListener("mouseleave", closeMenu);
buttonToggle.addEventListener("click", toggleDropdown);

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