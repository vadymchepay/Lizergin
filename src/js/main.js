$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.wach_mov').hide();



    //function for sections sliding while scroll

    var introHeight = $('.intro_content').innerHeight();
    var aboutHeight = $('.about').innerHeight();
    var trigger_1 = false;
    var coverBottom;
    var aboutBottom;
    var sPos = 0;
    var nsPos;
    var aboutPosY = $('.about').offset().top;
    var aboutPosX = $('.about').offset().left;
    var aboutWidth = $('.about').width();
    var introContentY = $('.intro_content').offset().top;
    var introContentX = $('.intro_content').offset().left;
    var introContentWidth = $('.intro_content').width();

    $('.about').css({
        'position': 'fixed',
        'top': aboutPosY,
        'left': aboutPosX,
        'width': aboutWidth
    });
    $('.intro_content').css({
        'position': 'fixed',
        'top': introContentY,
        'left': introContentX,
        'width': introContentWidth
    });

    $('.intro').append('<div class="shadow"></div>');
    

    $(window).scroll(function () {
        sPos = $(this).scrollTop();
        $('.intro_cover').css({
            'top': -sPos + 'px'
        });

        coverBottom = $('.intro_cover').innerHeight() - sPos * 1.98;
        
        
        //
        if (coverBottom >= -30 && coverBottom <= 0) {
            $('.about').css({
                'position': 'absolute',
                'top': introHeight + sPos
            });
        };


        if (coverBottom <= 0) {
            trigger_1 = true;
            $('.wach_mov').fadeIn();
        }   else {
            trigger_1 = false;
            $('.wach_mov').fadeOut();
            $('.about').css({

                'position': 'fixed',
                'top': aboutPosY,
                'left': aboutPosX,
                'width': aboutWidth
            });
        };
        
        console.log('cB = ' + coverBottom);
        console.log('sPos = ' + sPos);

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

    $('.close_btn').click(function () {
        $('.video_slider').removeClass('move_left');
    });

    //Video Slider


    var slide = $(".video_slide");
    var viewWidth = $(".video_slide").width();
    var sliderInner = $(".video_slider_container");
    var childrenNo = sliderInner.children().length;

    sliderInner.width(viewWidth * childrenNo);
    $('.prev').hide();


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
        if (activeIndex == childrenNo - 1) {
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
