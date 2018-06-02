$(function(){
  if($(window).width() < 960) {
    $('.hide-on-med-and-down').addClass("sidenav");
    $('.hide-on-med-and-down').removeClass("right hide-on-med-and-down");
    $('.sidenav-close').css('display','block');

  } else {
    // change functionality for larger screens
  }
});

$('.owl-carousel.otz').owlCarousel({
    loop:true,
    autoplayTimeout:5000,
    autoplay:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('.owl-carousel.index-slide').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    navText : ["<i class='material-icons medium'>keyboard_arrow_left</i>","<i class='material-icons medium'>keyboard_arrow_right</i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$(document).ready(function(){
    $('.dropdown-trigger').dropdown();
		$('.sidenav').sidenav();
		$('.tabs').tabs();
		$('.modal').modal({
			inDuration: 500,
			startingTop: '50%',
			endingTop: '0%'
		});
	});

jQuery(document).ready(function($) {
   var clock;
   var futureDate = new Date("June 11, 2018 0:00 PM EDT");
   var currentDate = new Date();
   var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

   function dayDiff(first, second) {
     return (second - first) / (1000 * 60 * 60 * 24);
   }
   if (dayDiff(currentDate, futureDate) < 100) {
     $('.clock').addClass('twoDayDigits');
   } else {
     $('.clock').addClass('threeDayDigits');
   }
   if (diff < 0) {
     diff = 0;
   }
   clock = $('.clock').FlipClock(diff, {
     clockFace: 'DailyCounter',
     language: 'ru',
     countdown: true
   });
 });

 $(document).ready(function(){
   var ii = '<i class="material-icons tiny">check</i>'
   $('.event__text ul li').prepend(ii);
 });




       $('a.videolink').click(function(){
         var vl = $(this).attr('href');
         $('.atrrVideo').attr('src', vl);
         console.log(vl);
       });


       $('.article.bg-image img').click(function(){
         var imgSc = $(this).attr('src');

         $('.img-slide-list').attr('src', imgSc);
       });
