$(document).ready(function (){
    $(".header__burger").click(function (event) {
        $(".header__burger,.header__nav").toggleClass("active");
    })
});



$(".our-spaces") .slick({
    slidesToShow: 3,
    arrows: true,
    dots: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '30px',
                arrows: false,

            }
        },
        {
            breakpoint: 491,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                arrows: false,
            }

            }
    ]
})



$(".our-facilities") .slick({
    slidesToShow: 1,
    dots: true,
})

$(".frispes-gallery") .slick({
    slidesToShow: 3,
    arrows: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '30px',
                arrows: false,

            }
        },
        {
            breakpoint: 491,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                arrows: false,
            }
        },
    ]
})


$(".reviews") .slick({
    slidesToShow: 3,
    arrows: true,
    dots: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 715,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '30px',
                arrows: false,

            }
        },
        {
            breakpoint: 491,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                arrows: false,
            }

        }
    ]
})











