$(document).ready(function () {
    $('.sidenav').sidenav();
    //function for sections sliding while scroll
    
   


    var introHeight = $('.intro').innerHeight();
    var aboutHeight = $('.about').innerHeight();
    var trigger_1 = false;
    var coverBottom;
    var aboutBottom;
    var sPos = 0;
    var nTop;
 
  
    $('.wach_mov').hide();

//    $('.about').css({ 'top': introHeight
//    });
    $(window).scroll(function () {
        sPos = $(this).scrollTop();
        $('.intro_cover').css({
            'top': -sPos + 'px'
        });
         $('.about').css({ 'top': sPos  });
             
        coverBottom = $('.intro_cover').innerHeight() - sPos;
//        
        console.log('cB = ' + coverBottom);    
        console.log('sPos = ' + sPos);    
//        var top = introHeight + sPos;
//        $('.about').css({
//            'top': top + 'px'
//        });
        if (coverBottom >= -100 && coverBottom <= 0) {
            nTop = $('.about').position().top - sPos;
        };
        console.log('nTop = ' + nTop); 
        
        if (coverBottom <= 0) {
            trigger_1 = true;
            $('.wach_mov').fadeIn();
            $('.about').css({
                'top': nTop + 'px'
            });
//            aboutBottom = aboutHeight - sPos * 1.87 + nTop;
        } else {
            trigger_1 = false;
            $('.wach_mov').fadeOut();
            $('.about').css({
                'top': top + 'px'
            });
        };

    });
    
    
    
    // Intro cover slider
    var sliderInt = 1;
    $(function () {
        count = $('.cover_content_slider_container .cover_content_slide').length;
        $('.cover_content_slider_container .cover_content_slide').hide();
        $('#slide1').fadeIn(1000);
    });

    function next() {
        newSlide = sliderInt + 1;
        showSlide(newSlide);
    }

    function showSlide(id) {
        if (id > count) {
            id = 1;
        } else if (id < 1) {
            id = count;
        }
        $('.cover_content_slider_container .cover_content_slide').hide();
        $('#slide' + id).fadeIn(1000);
        sliderInt = id;
    }
    setInterval(function () {
        next();
    }, 5000);
    //Wach Movies function
   
    $('.wach_mov').click(function () {
        $('.video_slider').addClass('move_left');
    });
    
    //Video Slider


    var slide = $(".video_slide");
    var viewWidth = $(".video_slide").width();
    var sliderInner = $(".video_slider_container");
    var childrenNo = sliderInner.children().length;

    sliderInner.width(viewWidth * childrenNo);



    function setWidth() {
        slide.each(function () {
            $(this).width(viewWidth);
            $(this).css("left", viewWidth * $(this).index());
        });
    }
    var videoActive = $('.video_slider_container .active');
    var activeIndex = videoActive.index();

    function buttonFade() {
        if (activeIndex == 0) {
            $('.prev').fadeOut();
        } else {
            $('.prev').fadeIn();
        };
        if (activeIndex == childrenNo-1) {
            $('.next').fadeOut();
        } else {
            $('.next').fadeIn();
        };
    };

    function setActive(active) {
        sliderInner.css("transform", "translateX(-" + active * viewWidth + "px) translateZ(0)");
        $('.video_slider_container .active').removeClass("active");
        $(".video_slider_container .video_slide").eq(active).addClass("active");
    };
    $('.prev').click(function () {
        activeIndex--;
        buttonFade()
        setActive(activeIndex);
    });
    $('.next').click(function () {
        activeIndex++;
        buttonFade()
        setActive(activeIndex);
    });

    setWidth();
});
