$(document).ready(function() {




    // =========== Menu Active Start ==============//
    $('.nav-menu li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
    // =========== Menu Active End ==============//







    //============= Nav Menu Slider Start ==============//
    $('.nav_trigger').click(function(){
        $('.sidebar').addClass('slide_menu');
    })

    $('.nav-dismess').click(function(){
        $('.sidebar').removeClass('slide_menu');
    })
    //==== Nav Menu Slider End ==============//








    //==== Video Play Start ==============// 
    $('.video_play').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    //==== Video Play End ==============// 









    //==== School Area End ==============// 
    $('.school-area__wraper').owlCarousel({
        loop:true,
        margin:10,
        dots: false,
        nav:true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 3000,
        smartSpeed: 2000,
        fluidSpeed: 2000,
        slideTransition: 'ease-in-out',
        responsive:{
            0:{
                items:1
            },
            575:{
                items:2
            },
            767:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    //==== School Area End ==============// 








    // =========== pagination Start ==============//
    $('.pagination li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
    // =========== pagination End ==============//









    // =========== Option Area Start ==============//
    $('.select_box').niceSelect();
    // =========== Option Area End ==============//




});



    
