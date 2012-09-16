$(function($) {
    $("#achuar").load("achuar.html #achuar .container", function() { 
        $('body').scrollspy('refresh');
        $('#slideshow').carousel( { pause: 'none' }).carousel('pause');
    });
    $("#territory").load("territory.html #territory .container", function() { 
        $('body').scrollspy('refresh');
    });
    $("#oil").load("oil.html #oil .container", function() { 
        $('body').scrollspy('refresh'); 
    });
});