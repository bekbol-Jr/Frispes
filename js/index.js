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