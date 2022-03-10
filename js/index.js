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
            breakpoint: 815,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '30px',

            }
        },
        {
            breakpoint: 491,
            settings: {
                slidesToShow: 1,
                centerMode: false,}

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
            breakpoint: 1140,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 920,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        },
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 2,
                centerMode: false,
                arrows: false,
            }
        },
        {
            breakpoint: 425,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                arrows: false,
            }
        }
    ]
})