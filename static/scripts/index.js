$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
            $('.more-info').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
            $('.more-info').removeClass("show");
            $('.submenu2').removeClass("menu2");
            $('.more-info i').removeClass("menu2");
        }
    });

    /* menur */ 
    $('.more-info').click(function(){
        $('.submenu2').toggleClass("menu2");
        $('.more-info i').toggleClass("menu2");
    });


   /* window.onscroll = function() {
        var y = window.scrollY;
        console.log(y);
      };*/
    /*scroll up btn*/
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    /* Toggle menu */ 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    /* tryping word */
    var typed = new Typed(".typing", {
        strings: ["Populares", "Fiesteros", "Familiares"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true 
    });

    /* owl carousel */
    $('.carsel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
}); 