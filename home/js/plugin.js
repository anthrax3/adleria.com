$(document).ready(function(){
  $("#top-slider").owlCarousel( {
	    loop:true,
	    nav:false,
	    items:1,
	    dots: true,
	    animateOut: 'fadeOut',
        animateIn: 'fadeIn', 
        autoplay : true,
		}
  	);
});



$(document).ready(function(){
  $("#awards-slider").owlCarousel( {
      loop:true,
      nav:false,
      items:1,
      dots: true,
      autoplay : true,

    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
        }
    }
      
    }
    );
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});


$(document).ready(function(){
  $("#test-slider").owlCarousel( {
      loop:true,
      nav:false,
      items:1,
      dots: true,
      autoplay : false,
      margin:15,

    responsive:{
        0:{
            items:1,
             autoplay : true
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
      
    }
    );
});


$(document).ready(function(){
  $("#news-slider").owlCarousel( {
      loop:true,
      nav:false,
      items:1,
      dots: true,
      autoplay : false,
      margin:15,

    responsive:{
        0:{
            items:1,
             autoplay : true
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
      
    }
    );
});


$(document).ready(function(){
  $("#logos-slider").owlCarousel( {
      loop:true,
      nav:false,
      items:1,
      dots: true,
      autoplay : false,

    responsive:{
        0:{
            items:1,
             autoplay : true
        },
        600:{
            items:2,
        },
        1000:{
            items:6,
        }
    }
      
    }
    );
});


  function init() {
        window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 90,
                header = document.querySelector("#top-header");
            if (distanceY > shrinkOn) {
                classie.add(header,"smaller");
            } else {
                if (classie.has(header,"smaller")) {
                    classie.remove(header,"smaller");
                }
            }
        });
    }
    window.onload = init();

    $('.dropdown-menu input, .dropdown-menu label').click(function(e) {
        e.stopPropagation();
    });






$(function() {
  $('a[href*=#start]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
});
$('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
});

$(function () {
  $('[data-toggle="popover"]').popover()
})


// Add custom JS here
$('a[rel=popover]').popover({
  html: true,
  trigger: 'hover',
  placement: 'top',
  content: function(){return '<img src="'+$(this).data('img') + '" />';}
});



$('.show-more').click(function() {
    if($('.show-more-snippet').css('height') != '35px'){
        $('.show-more-snippet').stop().animate({height: '35px'}, 200);
        $(this).text('More...');
    }else{
        $('.show-more-snippet').css({height:'100%'});
        var xx = $('.show-more-snippet').height();
        $('.show-more-snippet').css({height:'35px'});
        $('.show-more-snippet').stop().animate({height: xx}, 400);
        // ^^ The above is beacuse you can't animate css to 100% (or any percentage).  So I change it to 100%, get the value, change it back, then animate it to the value. If you don't want animation, you can ditch all of it and just leave: $('.show-more-snippet').css({height:'100%'});^^ //
        $(this).text('Less...');
    }
});



    $(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});
   
   
    $(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop2').fadeIn();
    } else {
        $('#toTop2').fadeOut();
    }
});
   

$(function() {
  $('a[href*=#top]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});   