
 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets (1000)
});


$(document).ready(function() {

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


  /* Smoothscroll js
  -----------------------------------------------*/
    $(function() {
        $('.navbar-default a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });


 /* Home Slideshow Vegas
  -----------------------------------------------*/
  $(function() {
    $('body').vegas({
        slides: [
            // { src: 'images/slide-img1.jpg' },
            // { src: 'images/slide-img2.jpg' },
            // { src: 'images/slide-img3.jpg' }
						{ src: 'img/coverpage/20210423_135107.jpg' },
						{ src: 'img/coverpage/20210402_141336.jpg' },
						{ src: 'img/coverpage/20170811_103120.jpg' },
						{ src: 'img/coverpage/20170813_100909.jpg' },
            { src: 'img/coverpage/20171216_113958.jpg' },
            { src: 'img/coverpage/20180102_104358.jpg' },
            { src: 'img/coverpage/20180615_120626.jpg' },
            { src: 'img/coverpage/20180904_120053.jpg' },
            { src: 'img/coverpage/20181022_144203.jpg' },
            { src: 'img/coverpage/20181022_182519.jpg' },
            { src: 'img/coverpage/20190326_093800.JPG' },
            { src: 'img/coverpage/20190327_092044.jpg' },
            { src: 'img/coverpage/20190327_092550.jpg' },
            { src: 'img/coverpage/20191031_220900.jpg' },
            { src: 'img/coverpage/20191101_111109.jpg' },
            { src: 'img/coverpage/20191226_141303.jpg' },
            { src: 'img/coverpage/20200903_161959.jpg' },
            { src: 'img/coverpage/20201209_160530.jpg' },
            { src: 'img/coverpage/20210213_134924.jpg' }
				// ]
        ],
        timer: false// ,
        // transition: ['zoomIn'], // transitions=["fade","fade2","blur","blur2","flash","flash2","negative","negative2","burn","burn2","slideLeft","slideLeft2","slideRight","slideRight2","slideUp","slideUp2","slideDown","slideDown2","zoomIn","zoomIn2","zoomOut","zoomOut2","swirlLeft","swirlLeft2","swirlRight","swirlRight2"]
        // animation: ['kenburns'] // animations=["kenburns","kenburnsLeft","kenburnsRight","kenburnsUp","kenburnsUpLeft","kenburnsUpRight","kenburnsDown","kenburnsDownLeft","kenburnsDownRight"]
    });
  });


  /* Team carousel
  -----------------------------------------------*/
  $(document).ready(function() {
      $("#team-carousel").owlCarousel({
          items : 3,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3],
          slideSpeed: 300,
          itemsDesktop : [1199,2],
          itemsTablet: [768,1],
          itemsTabletSmall: [985,2],
          itemsMobile : [479,1],
      });
    });


    /* Back to Top
    -----------------------------------------------*/
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
          $('.go-top').fadeIn(200);
            } else {
                $('.go-top').fadeOut(200);
           }
        });
          // Animate the scroll to top
        $('.go-top').click(function(event) {
          event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    });


  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });
