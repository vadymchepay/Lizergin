$(document).ready(function () {
    $('.sidenav').sidenav();
});

//
//$(function () {
//    // Init ScrollMagic
//    var controller = new ScrollMagic.Controller();
//
//    // pin the intro
//    var pinIntroScene = new ScrollMagic.Scene({
//            triggerElement: '.intro_content',
//            triggerHook: 0,
//            duration: '100%'
//        })
//        .setPin('.intro_content', {
//            pushFollowers: false
//        })
//        .addTo(controller);
//
//    // pin again
//    var pinIntroScene2 = new ScrollMagic.Scene({
//            triggerElement: '#project01',
//            triggerHook: 0.4
//        })
//        .setPin('#intro', {
//            pushFollowers: false
//        })
//        .addTo(controller);
//});

$(window).scroll(function () {
    var introPos = $(this).scrollTop();
    var coverBottom = $('.intro_cover').position().top + $('.intro_cover').innerHeight();
    var trigger_1 = false;

    $('.intro_cover').css({
        'top': -introPos + 'px'
    });
    if (coverBottom <= 0) {
        trigger_1 = true;
    };
    if (trigger_1) {
        var aboutPos = $('.about').offset().top;
        $('.about').css({
            'position' : 'relative',
            'top': aboutPos-introPos
        });
    }

    console.log(trigger_1);
    console.log(aboutPos);
});
