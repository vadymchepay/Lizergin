$(document).ready(function(){
    $('.sidenav').sidenav();
  });


$(function () {
            var controller = new ScrollMagic.Controller();
            // define movement of panels
            var wipeAnimation = new TimelineMax()
            .fromTo("section.panel.turqoise", 1, {y: "0%"}, {y: "-100%", ease: Linear.easeNone}) // in from left
            .fromTo("section.panel.green", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}); // in from right
           
            // create scene to pin and link animation
            new ScrollMagic.Scene({
                    triggerElement: "#pinContainer"
                    , triggerHook: "onLeave"
                    , duration: "300%"
                }).setPin("#pinContainer").setTween(wipeAnimation)
                .addTo(controller);
        });