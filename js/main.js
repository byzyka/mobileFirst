$(document).ready(function () {
   
      $('.top-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:  '<button type="button" class="slick-arrow slick-next"><img src="images/next-top-slider.svg" alt="next"></button>',
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/prev-top-slider.svg" alt="prev"></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
             
            }
          },
          {
            breakpoint: 640,
            settings: {
                arrows: false,
            }
          },
                    
        ]
      });

      $(window).on('load', function () {
        $('.news__items').masonry({
          // options
          itemSelector: '.news__item',
          // columnWidth: 270,
          gutter: 30,
          fitWidth: true,
          horizontalOrder: true
        });
    });

    // var $container = $('.news__item');
    // $container.imagesLoaded(function () {
    //   $container.masonry({
    //     // options
    //     itemSelector: '.news__item',
    //     // columnWidth: 270,
    //     gutter: 30,
    //     fitWidth: true,
    //     horizontalOrder: true
    //   });
    // });
    //   $('.news__items').masonry({
    //   // options
    //   itemSelector: '.news__item',
    //   // columnWidth: 270,
    //   gutter: 30,
    //   fitWidth: true,
    //   horizontalOrder: true
    // });

    $('.advice-sliders').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      arrows: false,
    });
})