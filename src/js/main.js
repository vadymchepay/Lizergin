$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.wach_mov').hide();
    var activePoint = 0;
    //function for sections sliding while scroll
    var introHeight = $('.intro_content').innerHeight();
    var aboutHeight = $('.about').innerHeight();
    var trigger_1 = false;
    var coverBottom;
    var sPos = 0;
    var introContentY = $('.intro_content').offset().top;
    var introContentX = $('.intro_content').offset().left;
    var introContentWidth = $('.intro_content').width();
    var aboutPosY = $('.about').offset().top;
    var aboutPosX = $('.about').offset().left;
    var aboutWidth = introContentWidth;
    var volChange;
    $('.about').css({
        'position': 'fixed'
        , 'top': aboutPosY
        , 'left': aboutPosX
        , 'width': aboutWidth
    });
    $('.intro_content').css({
        'position': 'fixed'
        , 'top': introContentY
        , 'left': introContentX
        , 'width': introContentWidth
        , 'height': $('.intro').innerHeight()
    });
    $('.intro').append('<div class="shadow"></div>');
    $('.shadow').css({
        'height': $('.intro_content').innerHeight() + $('.about').innerHeight()
    });
    $(window).scroll(function () {
        sPos = $(this).scrollTop();
        coverBottom = $('.intro_cover').innerHeight() - sPos;
        if (coverBottom > 0) {
            $('.intro').css({
                'top': sPos + 'px'
            });
        };
        $('.intro_cover').css({
            'top': -sPos + 'px'
        });
        if (coverBottom >= -50 && coverBottom <= 0) {
            coverBottom = 0;
        };
        if (coverBottom == 0) {
            $('.intro').css({
                'position': 'relative'
            });
            $('.about').css({
                'position': 'relative'
                , 'top': sPos
                , 'left': 0
            });
        };
        console.log('aboutTop = ' + $('.about').offset().top);
        console.log('sPos = ' + sPos);
        if (coverBottom <= 0) {
            trigger_1 = true;
            $('.wach_mov').fadeIn();
            var contactsTop = $('.contacts').offset().top;
            //            console.log('contactsTop = ' + contactsTop);
            //            console.log('sPos = ' + sPos);
            volChange = ($('.about').offset().top - sPos) / 1000;
            console.log('volChange = ' + volChange);
            bgPlayer.volume(volChange);
            slidePlayer[activeIndex].volume(volChange);
            if (volChange <= 0) {
                bgPlayer.pause();
                volChange = 0;
            }
            else if (volChange >= 0) {
                bgPlayer.play();
            }
        }
        else {
            trigger_1 = false;
            $('.wach_mov').fadeOut();
            $('.about').css({
                'position': 'fixed'
                , 'top': aboutPosY
                , 'left': aboutPosX
                , 'width': aboutWidth
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
        videoSlide(activeIndex);
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
    console.log(activeIndex);

    function buttonFade() {
        if (activeIndex == 0) {
            $('.prev').fadeOut();
        }
        else {
            $('.prev').fadeIn();
        };
        if (activeIndex == childrenNo - 1) {
            $('.next').fadeOut();
        }
        else {
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
        videoSlide(activeIndex);
    });
    $('.next').click(function () {
        activeIndex++;
        buttonFade()
        setActive(activeIndex);
        videoSlide(activeIndex);
    });
    setWidth();
});
// Map API 
var locations = [{
        coordinates: {
            lat: 40.6971494
            , lng: -74.2598643
        }
    }, {
        coordinates: {
            lat: 51.461989
            , lng: -0.6104095
        }
    }
    , {
        coordinates: {
            lat: 52.5065133
            , lng: 13.1445555
        }
    }, {
        coordinates: {
            lat: 29.6688758
            , lng: 29.4339315
        }
    }, {
        coordinates: {
            lat: 3.1385036
            , lng: 101.616949
        }
    }, {
        coordinates: {
            lat: 35.6732619
            , lng: 139.5703037
        }
    }];
var markers = [];
var icons = [];

function initMap() {
    var element = document.getElementById('map');
    var options = {
        zoom: 2
        , center: {
            lat: 28.7328
            , lng: 303.6587
        }
        , styles: [
            {
                "elementType": "labels"
                , "stylers": [
                    {
                        "visibility": "off"
      }
    ]
  }
            , {
                "featureType": "administrative.land_parcel"
                , "stylers": [
                    {
                        "visibility": "off"
      }
    ]
  }
            , {
                "featureType": "administrative.neighborhood"
                , "stylers": [
                    {
                        "visibility": "off"
      }
    ]
  }
            , {
                "featureType": "landscape.natural"
                , "stylers": [
                    {
                        "visibility": "off"
      }
    ]
  }
            , {
                "featureType": "landscape.natural"
                , "elementType": "geometry.stroke"
                , "stylers": [
                    {
                        "visibility": "simplified"
      }
    ]
  }
            , {
                "featureType": "poi"
                , "elementType": "labels.text"
                , "stylers": [
                    {
                        "visibility": "off"
      }
    ]
  }
            , {
                "featureType": "poi.business"
                , "stylers": [
                    {
                        "visibility": "off"
      }
    ]
  }
            , {
                "featureType": "road"
                , "stylers": [
                    {
                        "visibility": "off"
      }
    ]
  }
            , {
                "featureType": "road"
                , "elementType": "labels.icon"
                , "stylers": [
                    {
                        "visibility": "off"
      }
    ]
  }
            , {
                "featureType": "transit"
                , "stylers": [
                    {
                        "visibility": "off"
      }
    ]
  }
]
    };
    var myMap = new google.maps.Map(element, options);
    var marker, i;
    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: locations[i].coordinates
            , map: myMap
            , icon: '../img/map_pointer_small.png'
        });
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                console.log(marker);
                for (var j = 0; j < markers.length; j++) {
                    markers[j].setIcon('../img/map_pointer_small.png');
                }
                marker.setIcon('../img/map_pointer.png');
                for (var l = 0; l < markers.length; l++) {
                    icons[l] = markers[l].icon;
                }
                activePoint = icons.indexOf('../img/map_pointer.png');
                setContActive(activePoint);
                console.log('actPoint = ' + activePoint);
            };
        })(marker, i));
        markers.push(marker);
    };
};
//contacts slider
var contSlide = $(".slide");
var viewContWidth = $(".slider").width();
var contSliderInner = $(".slider-inner");
var contChildrenNo = contSliderInner.children().length;
contSliderInner.width(viewContWidth * contChildrenNo);
contSliderInner.css("transform", "translateX(-" + viewContWidth / 3 + "px) translateZ(0)");
$(window).resize(function () {
    viewContWidth = $(window).width();
});

function setContWidth() {
    contSlide.each(function () {
        $(this).width(viewContWidth / 3);
        $(this).css("left", viewContWidth / 3 * $(this).index() + viewContWidth / 3);
    });
}

function setContActive(index) {
    //		var clickedIndex = element.index();
    //               console.log('clickedIndex = ' + clickedIndex);
    //		var clickedIndex = activePoint;
    //		$(".slider-nav .active").removeClass("active");
    //		element.addClass("active");
    contSliderInner.css("transform", "translateX(-" + index * viewContWidth / 3 + "px) translateZ(0)");
    $(".slider-inner .active").removeClass("active");
    $(".slider-inner .slide").eq(index).addClass("active");
}
setContWidth();
//	$(".slider-nav > div").on("click", function(){
//		setContActive($(this));
//	});
$(window).resize(function () {
    setContWidth();
});
//Video API
var trigger_2 = false;
var trigger_3 = false;
var playedTrig = false
$(".video-js").each(function (i, el) {
    $(el).mousemove(function () {
        trigger_2 = true;
        trigger_3 = true;
        playButton(i);
    });
});

function playButton(p) {
    if (trigger_3) {
        $('.big-play-button').eq(p).addClass('play-button-show');
        var hb = setTimeout(function () {
            $('.big-play-button').eq(p).removeClass('play-button-show');
        }, 1500);
        $('.big-play-button').eq(p).mouseover(function () {
            $('.big-play-button').eq(p).addClass('play-button-show');
            clearTimeout(hb);
        });
    };
};
var bgPlayer;
videojs("#bg-video").ready(function () {
    bgPlayer = this;
    bgPlayer.play();
    bgPlayer.volume(0);
    $('.wach_mov').click(function () {
        bgPlayer.pause();
    });
    $('.close_btn').click(function () {
        bgPlayer.play();
    });
    if (trigger_2) {
        bgPlayer.removeClass('vjs-user-inactive');
        bgPlayer.addClass('vjs-user-active');
    };
    $('.big-play-button').eq(0).click(function () {
        if (bgPlayer.paused()) {
            bgPlayer.play();
        }
        else {
            bgPlayer.pause();
        };
    });
});
var playerId = [];
var slidePlayer = [];
for (var x = 0; x < $('.video_slide .video-js').length; x++) {
    playerId[x] = $('.video_slide .video-js').eq(x).attr('id');
    slidePlayer[x] = 'slidePlayer_' + x;
};

function videoSlide(y) {
    slidePlayer[y] = videojs(playerId[y]);
    slidePlayer[y].volume(0.7);
//    var q=y+1;
//    var w=y-1;
    $('.prev').click(function () {
        slidePlayer[y].pause();
    });   
    $('.next').click(function () {
        slidePlayer[y].pause();
    });
    $('.close_btn').click(function () {
        slidePlayer[y].pause();
    });
    if (trigger_2) {
        slidePlayer[y].removeClass('vjs-user-inactive');
        slidePlayer[y].addClass('vjs-user-active');
    };
    $('.big-play-button').eq(y + 1).click(function () {
        if (slidePlayer[y].paused()) {
            slidePlayer[y].play();
        }
        else {
            slidePlayer[y].pause();
        };
    });
};