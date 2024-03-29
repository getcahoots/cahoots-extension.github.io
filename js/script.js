$(function(){
        // Check the initial Poistion of the Sticky Header
        var stickyHeaderTop = $('header').offset().top;
        if ($(window).width() > 960) {
            $(window).scroll(function(){
                    if( $(window).scrollTop() > 40 ) {
                            $('header').css({position: 'fixed', height: '36px', transition: 'all 0.2s ease-in-out', transitionDelay: '0.2s',});
                            $('header .fit').css({top: '0px', height: '36px', transition: 'all 0.2s ease-in-out', transitionDelay: '0.2s',});
                            $('.logo').css({opacity: '0', transition: 'all 0.2s ease-in-out',});
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

$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 360, 'swing', function () {
            window.location.hash = target;
        });
    });
});

$(document).ready(function(){
var aChildren = $("nav li").children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i=0; i < aChildren.length; i++) {    
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    } // this for loop fills the aArray with attribute href values

    $(window).scroll(function(){
        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();

        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $(theID).offset().top; // get the offset of the div from the top of page
            var divHeight = $(theID).height(); // get the height of the div in question
            if (windowPos+20 >= divPos && windowPos <= (divPos + divHeight)) {
                $("a[href='" + theID + "']").addClass("active");
            } else {
                $("a[href='" + theID + "']").removeClass("active");
            }
        }

        if(windowPos+20 + windowHeight >= docHeight-200) {
            if (!$("nav li:last-child a").hasClass("active")) {
                var navActiveCurrent = $(".active").attr("href");
                $("a[href='" + navActiveCurrent + "']").removeClass("active");
                $("nav li:last-child a").addClass("active");
            }
        }
    });
});

$(document).ready(function(){
    $('#search').keyup(function() {
        localStorage.setItem("searchValue", document.getElementById("search").value);
    });

    $( "#click" ).click(function() {
        window.open('/suchen/index.html');
    });
});


