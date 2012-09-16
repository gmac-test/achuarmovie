$(function($) {
    $("#achuar").load(htmllang+"/achuar.html section .container", function() { 
        $('body').scrollspy('refresh');
        $('#slideshow').carousel( { pause: 'none' }).carousel('pause');
    });
    $("#territory").load(htmllang+"/territory.html section .container", function() { 
        $('body').scrollspy('refresh');
    });
    $("#oil").load(htmllang+"/oil.html section .container", function() { 
        $('body').scrollspy('refresh'); 
    });
});