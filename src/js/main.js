$(document).ready(function () {
    $('.sidenav').sidenav();
    //function for sections sliding while scroll
    var introHeight = $('.intro').innerHeight();
    var aboutHeight = $('.about').innerHeight();
    var trigger_1 = false;
    var coverBottom;
    var aboutBottom;
    var nTop;
    $('.wach_mov').hide();
    $('.about').css({
        'top': introHeight + 'px'
    });
    $('.intro_content').css({
        'top': 0
    });
    $(window).scroll(function () {
        var sPos = $(this).scrollTop();
        $('.intro_cover').css({
            'top': -sPos + 'px'
        });
        coverBottom = $('.intro_cover').innerHeight() - sPos * 1.87;
        $('.intro_content').css({
            'top': sPos + 'px'
        });
        var top = introHeight + sPos;
        $('.about').css({
            'top': top + 'px'
        });
        if (coverBottom >= -200 && coverBottom <= 0) {
            nTop = $('.about').position().top;
        };
        if (coverBottom <= 0) {
            trigger_1 = true;
            $('.wach_mov').fadeIn();
            $('.about').css({
                'top': nTop + 'px'
            });
            aboutBottom = aboutHeight - sPos * 1.87 + nTop;
        }
        else {
            trigger_1 = false;
            $('.wach_mov').fadeOut();
            $('.about').css({
                'top': top + 'px'
            });
        };
        //        console.log('coverBottom =' + coverBottom);
        //        console.log('aboutHeight =' + aboutHeight);
        //        console.log('aboutBottom =' + aboutBottom);
        //        console.log('innerHeight =' + $('.intro_cover').innerHeight());
        //        
        //        console.log('sPos =' + sPos);
        //        console.log('nTop =' + nTop);
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
        }
        else if (id < 1) {
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
    
    
//    var slideCount = $('.video_slide').length;
//    var slideWidth = $('.video_slide').width();
//    var slideHeight = $('.video_slide').height();
//    var sliderUlWidth = slideCount * slideWidth;
//    $('.video_slider_container').css({
//        width: slideWidth
//        , height: slideHeight
//    });
//    $('.video_slide:last-child').prependTo('.video_slider_container ul');
//
//    function moveLeft() {
//        $('.video_slider_container ul').animate({
//            left: +slideWidth
//        }, 700, function () {
//            $('.video_slide:last-child').prependTo('.video_slider_container ul');
//            $('.video_slider_container ul').css('left', '');
//        });
//    };
//
//    function moveRight() {
//        $('.video_slide:first-child').prependTo('.video_slider_container ul');
//        $('.video_slider_container ul').animate({
//            left: -slideWidth
//        }, 200, function () {
//            $('.video_slider_container ul').css('left', '');
//        });
//    };
//    $('.prev').click(function () {
//        moveLeft();
//    });
//    $('.next').click(function () {
//        moveRight();
//    });
    
    var slide = $(".video_slide");
	var viewWidth = $(".video_slide").width();
	var sliderInner = $(".video_slider_container");
	var childrenNo = sliderInner.children().length;
	
	sliderInner.width( viewWidth * childrenNo );
	

	
	function setWidth(){
		slide.each(function(){
			$(this).width(viewWidth);
			$(this).css("left", viewWidth * $(this).index());
		});	
	}
    var videoActive = $('.video_slider_container .active');
    var click_move = 1;
    function setActive(element){
		var activeIndex = element.index();
         
//		$(".slider-nav .active").removeClass("active");
//		element.addClass("active");
//		
//		sliderInner.css("transform", "translateX(-" + clickedIndex * viewWidth + "px) translateZ(0)");
//		
//		$(".slider-inner .active").removeClass("active");
//		$(".slider-inner .slide").eq(clickedIndex).addClass("active");
	}
    
   
    
    
	
	setWidth();
});