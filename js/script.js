// $(function(){
//  var shrinkHeader = 100;
//   $(window).scroll(function() {
//     var scroll = getCurrentScroll();
//       if ( scroll >= shrinkHeader ) {
//            $('header').addClass('shrink');
//            $('header').css({opacity: '0', transition: 'all 0.5s ease-in-out',});
//         }
//         else {
//             $('header').removeClass('shrink');
//             $('.fit').removeClass('shrink');
//         }
//   });
// function getCurrentScroll() {
//     return window.pageYOffset || document.documentElement.scrollTop;
//     }
// });

$(function(){
        // Check the initial Poistion of the Sticky Header
        var stickyHeaderTop = $('header').offset().top;
        if ($(window).width() > 960) {
            $(window).scroll(function(){
                    if( $(window).scrollTop() > 100 ) {
                            $('header').css({position: 'fixed', height: '36px', transition: 'all 0.2s ease-in-out', transitionDelay: '0.25s',});
                            $('header .fit').css({top: '0px', height: '36px', transition: 'all 0.2s ease-in-out', transitionDelay: '0.25s',});
                            $('.logo').css({opacity: '0', transition: 'all 0.25s ease-in-out',});
                            $('header nav ul li').css({borderRadius: '0px',});
                    } else {
                            $('header').css({position: 'fixed', height: '80px', transition: 'all 0.3s ease-in-out'});
                            $('header .fit').css({height: '80px', transition: 'all 0.3s ease-in-out'});
                            $('.logo').css({display: 'block', transition: 'all 0.3s ease-in-out',});
                            $('.logo').css({opacity: '1', transition: 'all 1s ease-in-out',});
                            $('header nav ul li').css({borderRadius: '3px',});
                    }
            });
        } else {
        }
  });