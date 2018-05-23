$(document).ready(function () {
    $('.sidenav').sidenav();
    var introHeight = $('.intro').innerHeight();
    var aboutHeight = $('.about').innerHeight();
    var trigger_1 = false;
    var coverBottom;
    var aboutBottom;
    var nTop;
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
            $('.about').css({
                'top': nTop + 'px'
               });
            aboutBottom = aboutHeight - sPos * 1.87 + nTop;
        }else {
            trigger_1 = false;
            $('.about').css({
                'top': top + 'px'
            });
        };
        
        console.log('coverBottom =' + coverBottom);
        console.log('aboutHeight =' + aboutHeight);
        console.log('aboutBottom =' + aboutBottom);
        console.log('innerHeight =' + $('.intro_cover').innerHeight());
        
        console.log('sPos =' + sPos);
        console.log('nTop =' + nTop);
    });
});