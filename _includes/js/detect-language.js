$(function($) {
    window.htmllang = $('html').attr('lang');
    $.ajax({ 
        url: "http://ajaxhttpheaders.appspot.com", 
        dataType: 'jsonp', 
        success: function(headers) {
            var language = headers['Accept-Language'].substring(0,2);
            var acceptedLanguages = ['en','es']
            console.log(($.inArray(language, acceptedLanguages))>-1);
            if (($.inArray(language, acceptedLanguages) > -1) && (htmllang != language)) {
                window.location.pathname = language === "en" ? "" : "index."+language+".html";
            }
        }
    });
});