$(function($) {
  
	$('.nav a[href*=#]').click(function(event){		
		event.preventDefault();
		var scrollSrc = $(window).scrollTop();
		var scrollDest = $(this.hash).offset().top + 0;
		$('html,body').animate({scrollTop:scrollDest}, Math.round(Math.abs(scrollDest - scrollSrc) / 3));
	});
	
	$(window).one("scroll", function () {
	  $('.share-this').delay(1000).fadeOut();
  	$(".share a").on("mouseenter mouseleave", function () {
  	  $('.share-this').fadeToggle("fast");
  	});
	});

	$('.play').click(function(e){
  	$(".video iframe").addClass("loading")
	  $('.play').hide();
	});
	
	$('.share a').click(function(e) {
	    e.preventDefault();
	    openShareWindow(this.href);
	});
	    
	window.openShareWindow = function(url) {
     var width  = 640,
         height = 352,
         left   = ($(window).width()  - width)  / 2,
         top    = ($(window).height() - height) / 2,
         opts   = 'status=1' +
                  ',width='  + width  +
                  ',height=' + height +
                  ',top='    + top    +
                  ',left='   + left;

     window.open(url, 'twitter', opts);
     return false;
   };
      
   $('body').scrollspy( { target: '.topbar', offset: 20} );
});

