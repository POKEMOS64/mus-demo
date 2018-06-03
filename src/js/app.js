$(function(){
  if($(window).width() < 960) {
    $('.hide-on-med-and-down').addClass("sidenav");
    $('.hide-on-med-and-down').removeClass("right hide-on-med-and-down");
    $('.sidenav-close').css('display','block');

  } else {
    // change functionality for larger screens
  }
});

$('.owl-carousel.chronology').owlCarousel({
    loop:true,
    autoplayTimeout:5000,
    autoplay:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
$('.owl-carousel.index-slide,.owl-carousel.slider-widget').owlCarousel({
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

   //Видео линк замещение
   $('a.videolink').click(function(){
     var vl = $(this).attr('dataTarget');
     var linkUp = 'https://www.youtube.com/embed/'
     var theEndEvent = '?rel=0&amp;controls=0&amp;showinfo=0'
     var exitVideo = linkUp + vl + theEndEvent
     $('.video_fraps').attr('src',exitVideo);
     console.log(exitVideo);
   });
   //Видео линк замещение
   //Gallery
   $('.pufUp').click(function(){
     var puf = $(this).attr('datapic');
     $('.low_link_pic').attr('href',puf);
     $('.lowpic').attr('src',puf);
     console.log(puf);
   });
   //Gallery

 });




       $('a.videolink').click(function(){
         var vl = $(this).attr('href');
         $('.video_fraps').attr('src', vl);
         console.log(vl);
       });


       $('.article.bg-image img').click(function(){
         var imgSc = $(this).attr('src');

         $('.img-slide-list').attr('src', imgSc);
       });
