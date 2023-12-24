$(function(){
    //Toggle Search Modal
    $('#search_btn').on('click', function(){
        $('#search_modal').addClass('show');
    })
    $('#search_close_btn').on('click', function(){
        $('#search_modal').removeClass('show');
    })

    // popup checkBox
    $(window).on('load', function () {
      $('#popup').addClass('show')
    })
    $(".popup_x").on('click', function () {
        $('#popup').removeClass('show')
    })

    // slick slider
    $('.banner_slider').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      arrows:false,
      pauseOnHover:false,
      dots: true,
    });

    // slick slider
    $('.responsive').slick({
          autoplay: true,
          autoplaySpeed: 3000,
          arrows:false,
          pauseOnHover:false,
          dots: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 578,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
          ]
          
    });

    // card slider 
    $('.slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      prevArrow: `<i class="fa-solid fa-circle-arrow-left"></i>`,
      nextArrow: `<i class="fa-solid fa-circle-arrow-right"></i>`,
    });

    //discound slick slider
    $('.discound_banner_slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows:false,
        pauseOnHover:false,
        slidesToShow:2,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
        ]
    });

    $('.banner_slider_trend').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows:false,
        pauseOnHover:false,
        arrows:true,
        prevArrow:`<i class="fa-solid fa-chevron-left"></i>`,
        nextArrow:`<i class="fa-solid fa-chevron-right"></i>`
    });

    $('.profile_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay:true,
        autoplaySpeed:2000,
        fade: true,
        asNavFor: '.profile_slider_nav'
    });
    $('.profile_slider_nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.profile_slider',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
        ]
    });

    $('.pslide').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows:false,
        pauseOnHover:false,
        slidesToShow:4,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
    //backtotop button
    $('#backtotop').on('scroll', function(){
          let scrollTop = $(window).scrollTop();
          if(scrollTop < 200){
              $(`$('#backtotop`).addClass(`.show`);
             }else{
              $(`$('#backtotop`).removeClass(`.show`);
             }
    })

    //manu bar 
    $(window).on(`scroll`,function(){
        let scrollTop = $(window).scrollTop();
       if(scrollTop > 180){
        $(`.navbar`).addClass(`fixed`);
       }else{
        $(`.navbar`).removeClass(`fixed`);
       }
    //scrolltotop button
    })

    $('.product_slider').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            arrows:true,
            pauseOnHover:false,
            prevArrow:`<i class="fa-solid fa-chevron-left"></i>`,
            nextArrow:`<i class="fa-solid fa-chevron-right"></i>`,
            responsive: [
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
    });
    // coundow timer 
    $(`#deals_timer`).countdown("2023/12/31",function(event){
            var $this = $(this).html(
              event.strftime(
                "" +
                ` <div class="deals_timer_info"><span>%D</span><span class="last">Days</span></div>` +
                "<span>:</span>"+
                ` <div class="deals_timer_info"><span>%H</span><span class="last">Hour</span></div>` +
                "<span>:</span>"+
                ` <div class="deals_timer_info"><span>%M</span><span class="last">Minute</span></div>` +
                "<span>:</span>"+
                ` <div class="deals_timer_info"><span>%S</span><span class="last">Sec</span></div>`
              )
            )
    })
    //latest news slick slider
    $('.latest_news_slider').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      arrows:false,
      pauseOnHover:false,
      slidesToShow: 4,
      dots: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    //instagram slick slider
    $('.inst').slick({
          autoplay: true,
          autoplaySpeed: 4000,
          arrows:false,
          pauseOnHover:false,
          slidesToShow: 6,
          dots: true,
          slidesToScroll: 1,
          ocusOnSelect: true,
          responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 567,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
          ]
    });

})
function myFunction() {
  var element = document.getElementById("myDIV");
  element.classList.toggle("mystyle");
}
function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

   document.getElementById(`open`).addEventListener(`click`,function(){
  if(document.documentElement.classList.contains(`card_slide`)){
    document.documentElement.classList.remove(`card_slide`);
    }else{
      document.documentElement.classList.add(`card_slide`);
    }
})

// cart toaltips 
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// add product card 
var add = document.getElementById